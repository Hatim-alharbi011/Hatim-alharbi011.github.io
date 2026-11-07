(() => {
  "use strict";
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const md = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const bdi = (t) => esc(t).replace(/[A-Za-z][A-Za-z0-9™ .&\-]*[A-Za-z0-9™]/g, (m) => `<bdi>${m}</bdi>`);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const get = (o, p) => p.split(".").reduce((x, k) => (x ? x[k] : undefined), o);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const PAGES = ["home", "about", "path", "certs", "skills", "learn", "work", "contact"];

  /* ---------- State ---------- */
  let lang = "ar";
  try { const v = localStorage.getItem("lang"); if (v === "ar" || v === "en") lang = v; } catch (e) {}
  const qp = new URLSearchParams(location.search).get("lang");
  if (qp === "ar" || qp === "en") lang = qp;
  let page = "home", treated = false, focusK = null, stopI = null, workI = 0, certF = "all", busy = false;
  const T = () => S[lang];
  const rtl = () => lang === "ar";

  /* ---------- Matrix ---------- */
  const COLORS = { 1: "#2EC4B6", 2: "#9BE3C6", 3: "#FFB627", 4: "#FF8A5B", 5: "#FF5D73" };
  const level = (s) => (s <= 3 ? 1 : s <= 6 ? 2 : s <= 12 ? 3 : s <= 16 ? 4 : 5);
  const pos = ([l, i]) => ({ x: ((i - 0.5) / 5) * 100, y: ((5 - l + 0.5) / 5) * 100 });
  const score = (a) => a[0] * a[1];

  function buildGrid() {
    const g = $("#grid"); g.innerHTML = "";
    for (let l = 5; l >= 1; l--) for (let i = 1; i <= 5; i++) {
      const c = document.createElement("div");
      c.className = "cell"; c.dataset.l = l; c.dataset.i = i;
      c.style.setProperty("--c", COLORS[level(l * i)]);
      g.appendChild(c);
    }
    g.insertAdjacentHTML("beforeend", '<svg class="paths" viewBox="0 0 5 5" preserveAspectRatio="none" aria-hidden="true"></svg>');
  }

  function renderMatrix() {
    const m = T().matrix, g = $("#grid");
    $$(".dot,.ghost", g).forEach((n) => n.remove());
    const svg = $(".paths", g); svg.innerHTML = "";
    m.risks.forEach((r, k) => {
      const a = pos(r.from), b = pos(r.to), p = treated ? b : a;
      svg.insertAdjacentHTML("beforeend", `<line data-k="${k}" x1="${a.x / 20}" y1="${a.y / 20}" x2="${b.x / 20}" y2="${b.y / 20}"/>`);
      g.insertAdjacentHTML("beforeend", `<span class="ghost" data-k="${k}" style="left:${a.x}%;top:${a.y}%"></span>`);
      g.insertAdjacentHTML("beforeend", `<span class="dot" data-k="${k}" style="left:${p.x}%;top:${p.y}%;transition-delay:${k * 0.1}s">${k + 1}</span>`);
    });
    $("#risks").innerHTML = m.risks.map((r, k) => `<li><button type="button" class="risk" data-k="${k}" aria-pressed="false">
      <span class="n" style="--lvl:${COLORS[level(score(treated ? r.to : r.from))]}">${k + 1}</span>
      <span><span class="lbl">${esc(r.label)}</span><span class="tr">${esc(r.treatment)}</span></span>
      <span class="tag">${esc(r.type)}</span></button></li>`).join("");
    $("#treatBtn").textContent = treated ? m.reset : m.treat;
    $("#treatBtn").setAttribute("aria-pressed", String(treated));
    $("#matrix").classList.toggle("is-treated", treated);
    setFocus(focusK);
  }

  function setTreated(v) {
    treated = v;
    const m = T().matrix;
    $("#matrix").classList.toggle("is-treated", v);
    $$(".dot").forEach((d) => { const r = m.risks[d.dataset.k], p = pos(v ? r.to : r.from); d.style.left = p.x + "%"; d.style.top = p.y + "%"; });
    $$(".risk .n").forEach((n, k) => n.style.setProperty("--lvl", COLORS[level(score(v ? m.risks[k].to : m.risks[k].from))]));
    $("#treatBtn").textContent = v ? m.reset : m.treat;
    $("#treatBtn").setAttribute("aria-pressed", String(v));
  }

  function setFocus(k) {
    focusK = k;
    const mx = $("#matrix");
    mx.classList.toggle("has-focus", k !== null);
    $$(".dot,.ghost,.paths line", mx).forEach((n) => n.classList.toggle("is-focus", k !== null && +n.dataset.k === k));
    $$(".risk", mx).forEach((b) => { const on = k !== null && +b.dataset.k === k; b.classList.toggle("is-focus", on); b.setAttribute("aria-pressed", String(on)); });
    readoutDefault();
  }

  function readoutDefault() {
    const m = T().matrix, ro = $("#readout");
    if (focusK === null) { ro.textContent = ""; return; }
    const r = m.risks[focusK], s = score(treated ? r.to : r.from), lv = level(s);
    ro.innerHTML = `<b style="background:${COLORS[lv]}">${esc(m.levels[lv - 1])}</b> <button type="button" class="evidence" data-link="${r.link}">${esc(T().nav.evidence)}</button>`;
  }

  function matrixEvents() {
    const g = $("#grid");
    g.addEventListener("pointerover", (e) => {
      const c = e.target.closest(".cell"); if (!c) return;
      const m = T().matrix, l = +c.dataset.l, i = +c.dataset.i, s = l * i, lv = level(s);
      $("#readout").innerHTML = esc(m.readout.replace("{l}", l).replace("{i}", i).replace("{s}", s)) + ` <b style="background:${COLORS[lv]}">${esc(m.levels[lv - 1])}</b>`;
      $$(".cell", g).forEach((x) => x.classList.toggle("is-dim", level(+x.dataset.l * +x.dataset.i) !== lv));
    });
    g.addEventListener("pointerleave", () => { readoutDefault(); $$(".cell", g).forEach((x) => x.classList.remove("is-dim")); });
    $("#risks").addEventListener("click", (e) => { const b = e.target.closest(".risk"); if (b) setFocus(focusK === +b.dataset.k ? null : +b.dataset.k); });
    $("#treatBtn").addEventListener("click", () => { setTreated(!treated); readoutDefault(); });
    $("#readout").addEventListener("click", (e) => {
      const b = e.target.closest(".evidence"); if (!b) return;
      const [p, n] = b.dataset.link.split(":");
      if (p === "path" && n != null) stopI = +n;
      if (p === "work" && n != null) { workI = +n; showWork(false); }
      go(p);
    });
  }

  function intro() {
    if (reduce) return;
    $$(".cell").forEach((c, n) => {
      const dx = (Math.random() - 0.5) * 420, dy = (Math.random() - 0.5) * 320, rot = (Math.random() - 0.5) * 140;
      c.animate([{ transform: `translate(${dx}px,${dy}px) rotate(${rot}deg) scale(.4)`, opacity: 0 }, { transform: "none", opacity: 0.9 }],
        { duration: 900, delay: 150 + n * 28, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" });
    });
    $$(".dot").forEach((d, n) => d.animate([{ transform: "scale(0)", opacity: 0 }, { transform: "scale(1.25)", opacity: 1, offset: 0.6 }, { transform: "scale(1)", opacity: 1 }],
      { duration: 500, delay: 1150 + n * 120, easing: "ease-out", fill: "backwards" }));
  }

  /* ---------- Pages ---------- */
  function renderHome() {
    const h = T().hero;
    $("#heroPhoto").src = S.photo; $("#heroPhoto").alt = h.name;
    $("#heroName").textContent = h.name;
    $("#heroRole").textContent = h.role;
    $("#heroOrg").textContent = h.org || "";
    $("#heroBadges").innerHTML = h.badges.map((b) => `<b>${esc(b)}</b>`).join("");
    $("#heroLine").textContent = h.line;
    $("#heroFacts").innerHTML = (h.facts || []).map((f) => `<div><dt>${esc(f.v)}</dt><dd>${esc(f.k)}</dd></div>`).join("");
    renderMatrix();
  }

  const certIdx = (id) => (id == null || id === "" ? -1 : typeof id === "number" ? id : S.certFiles.findIndex((c) => c.id === id));
  function renderAbout() {
    const a = T().about;
    $("#aboutText").innerHTML = a.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("") +
      `<button class="btn btn--dark" type="button" data-go="path">${esc(a.next)}</button>`;
    $("#idcard").innerHTML = `<h3>${esc(a.cardTitle)}</h3><dl>${a.card.map((r) => `<div><dt>${esc(r.k)}</dt><dd>${bdi(r.v)}</dd></div>`).join("")}</dl>`;
  }

  function renderSkills() {
    $("#skills").innerHTML = T().skills.groups.map((g) => `<article class="skill" style="--k:${CAT[g.cat]}">
      <h3>${esc(g.title)}</h3><ul>${g.points.map((p) => `<li>${md(p)}</li>`).join("")}</ul>
      ${g.tools.length ? `<ul class="chips">${g.tools.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}</article>`).join("");
  }

  function renderLearn() {
    const L = T().learn;
    $("#learnWrap").innerHTML = `
      <div class="learn__side">
        <section class="lcard lcard--edu"><h3>${esc(L.eduTitle)}</h3><p class="big">${esc(L.edu.degree)}</p><p>${esc(L.edu.school)}</p><p class="meta">${esc(L.edu.years)}</p></section>
        <section class="lcard"><h3>${esc(L.volTitle)}</h3><p class="big">${esc(L.vol.name)}</p><p class="meta">${esc(L.vol.meta)}</p><p>${esc(L.vol.text)}</p></section>
      </div>
      <div class="learn__main">
        <section><h3 class="sub">${esc(L.recentTitle)}</h3><ul class="rows rows--link">${L.recent.map((r) => `<li><b>${esc(r.name)}</b><span>${esc(r.by)}</span><span>${esc(r.meta)}</span>${certIdx(r.cert) >= 0 ? `<button type="button" class="certlink" data-set="certs" data-i="${certIdx(r.cert)}">${esc(L.viewCert)}</button>` : "<i></i>"}</li>`).join("")}</ul></section>
        <section><h3 class="sub">${esc(L.devTitle)}</h3><ul class="rows rows--two">${L.dev.map((r) => `<li><b>${esc(r.name)}</b><span>${esc(r.by)}</span></li>`).join("")}</ul></section>
      </div>`;
  }

  const CAT = { risk: "#FF5D73", data: "#2EC4B6", fin: "#FFB627", people: "#2F5BEA" };
  const months = (s, e) => {
    const [sy, sm] = s.split("-").map(Number);
    const now = new Date(), [ey, em] = e ? e.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
    return Math.max(1, (ey - sy) * 12 + (em - sm));
  };
  const durText = (m) => {
    const U = T().path.units, y = Math.floor(m / 12), r = m % 12;
    const ar = lang === "ar";
    const fy = (n) => ar ? (n === 1 ? U.y1 : n === 2 ? U.y2 : n <= 10 ? `${n} ${U.y}` : `${n} ${U.y1}`) : `${n} ${n === 1 ? U.y1 : U.y}`;
    const fm = (n) => ar ? (n === 1 ? U.m1 : n === 2 ? U.m2 : n <= 10 ? `${n} ${U.m}` : `${n} ${U.m1}ًا`) : `${n} ${n === 1 ? U.m1 : U.m}`;
    if (!y) return fm(r);
    return r ? `${fy(y)}${U.and}${fm(r)}` : fy(y);
  };
  const stops = () => { const p = T().path; return [{ cat: "fin", ...p.education, edu: true }, ...p.jobs.slice().reverse()]; };
  function renderPath() {
    const st = stops(), rail = $("#rail");
    if (stopI === null || stopI >= st.length) stopI = st.length - 1;
    rail.style.setProperty("--n", st.length);
    rail.innerHTML = `<span class="rail__fill" id="railFill"></span>` + st.map((s, k) => `
      <button type="button" data-stop="${k}" aria-pressed="${k === stopI}" class="${k < stopI ? "is-past" : ""}">
        <span class="pin" style="--k:${CAT[s.cat || "fin"]}">${esc(String(s.years).slice(0, 4))}</span><span class="r">${esc(s.role)}</span><span class="d">${s.start ? esc(durText(months(s.start, s.end))) : ""}</span>
      </button>`).join("");
    renderTenure(st);
    const f = st.length > 1 ? stopI / (st.length - 1) : 0;
    $("#railFill").style.width = `calc((100% - 100% / ${st.length}) * ${f})`;
    const sel = rail.querySelector('[aria-pressed="true"]');
    if (sel && rail.scrollWidth > rail.clientWidth) sel.scrollIntoView({ inline: "center", block: "nearest" });
    const s = st[stopI], card = $("#stopCard");
    card.style.setProperty("--k", CAT[s.cat]);
    card.innerHTML = `<h3>${esc(s.role)}</h3><p class="org">${esc(s.org)}${s.unit ? " — " + esc(s.unit) : ""}</p>
      <p class="meta">${esc(s.dates)}${s.start ? ` · <b>${esc(durText(months(s.start, s.end)))}</b>` : ""}</p>${s.points ? `<ul>${s.points.map((p) => `<li>${md(p)}</li>`).join("")}</ul>` : ""}
      ${s.extra ? `<div class="stop__extra"><h4>${esc(s.extraTitle)}</h4><ul>${s.extra.map((p) => `<li>${md(p)}</li>`).join("")}</ul></div>` : ""}`;
    let lg = $("#legend");
    if (!lg) { lg = document.createElement("ul"); lg.id = "legend"; lg.className = "legend"; card.after(lg); }
    const L = T().cats || {};
    lg.innerHTML = Object.keys(CAT).map((k) => `<li style="--k:${CAT[k]}">${esc(L[k] || k)}</li>`).join("");
    // print version: every stop
    let pp = $("#printPath");
    if (!pp) { pp = document.createElement("div"); pp.id = "printPath"; pp.className = "print-path"; card.after(pp); }
    pp.innerHTML = st.slice().reverse().map((x) => `<article><h3>${esc(x.role)} — ${esc(x.org)}</h3><p>${esc(x.dates)}</p>${x.points ? `<ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}</article>`).join("");
  }
  function renderTenure(st) {
    const t0 = st[0].start, total = months(t0, null);
    const pos = (ym) => (months(t0, ym) / total) * 100;
    const segs = st.map((s, k) => {
      if (!s.start) return "";
      const a = s.start === t0 ? 0 : pos(s.start), w = (months(s.start, s.end) / total) * 100;
      const label = `${s.role} — ${durText(months(s.start, s.end))}`;
      return `<button type="button" class="seg${k === stopI ? " is-on" : ""}" data-stop="${k}" style="--k:${CAT[s.cat]};inset-inline-start:${a}%;width:calc(${w}% - 3px)" title="${esc(label)}" aria-label="${esc(label)}"></button>`;
    }).join("");
    const y0 = +t0.slice(0, 4), yN = new Date().getFullYear();
    const ticks = [];
    for (let y = y0; y <= yN; y += 1) if (((y - y0) % 4 === 0 && yN - y >= 2) || y === yN) ticks.push(y);
    const tickHtml = ticks.map((y) => `<span style="inset-inline-start:${y === yN ? 100 : pos(`${y}-${t0.slice(5)}`)}%">${y}</span>`).join("");
    $("#tenure").innerHTML = `<p class="tenure__cap">${esc(T().path.barLabel || "")}</p><div class="tenure__track">${segs}</div><div class="tenure__ticks">${tickHtml}</div>`;
  }
  function pickStop(k) {
    if (k === stopI) return;
    stopI = k; renderPath();
    const c = $("#stopCard"); c.classList.remove("is-swap"); void c.offsetWidth; c.classList.add("is-swap");
  }

  const workItems = () => { const w = T().work, c = w.caseStudy, t = w.training; return [{ ...c, isCase: true }, ...w.gallery, { ...t, isTraining: true }]; };
  function renderWork() {
    const items = workItems(), c = T().work.caseStudy, t = T().work.training;
    gallery.work = [...items.map((x) => ({ src: x.image, cap: x.title })), { src: c.award, cap: c.result }];
    gallery.training = t.pages.map((p) => ({ src: p, cap: t.title }));
    $("#thumbs").innerHTML = items.map((x, k) => `<li><button type="button" class="thumb" data-work="${k}" aria-pressed="${k === workI}">
      <img src="${x.image.replace(".jpg", "-t.jpg")}" alt="" width="78" height="48"><span>${x.tag ? `<small>${esc(x.tag)}</small>` : ""}${esc(x.title)}</span></button></li>`).join("");
    showWork(false);
  }
  function showWork(anim) {
    const items = workItems(), x = items[workI];
    $$(".thumb").forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.work === workI)));
    $("#stageImg").src = x.image; $("#stageImg").alt = x.title;
    $("#stage").setAttribute("aria-label", x.title);
    $("#stage").dataset.lb = x.isTraining ? "training" : "work";
    let html = `<h3>${esc(x.title)}</h3>`;
    if (x.isCase) html += `<p>${esc(x.problem)}</p><ol class="steps">${x.steps.map((s) => `<li><span>${md(s)}</span></li>`).join("")}</ol>
         <div class="award"><button type="button" data-set="work" data-i="${gallery.work.length - 1}" aria-label="${esc(x.result)}"><img src="${x.award}" alt=""></button><p>${esc(x.result)}</p></div>`;
    else if (x.isTraining) html += `<p class="dates">${esc(x.dates)}</p><p>${esc(x.text)}</p>
        <div class="chart" id="chart">
          <div class="bar-row"><span>${esc(x.before)}</span><div class="bar-track"><div class="bar-fill" style="--v:${x.beforeV}%;--c:#FFB627">${x.beforeV}%</div></div></div>
          <div class="bar-row"><span>${esc(x.after)}</span><div class="bar-track"><div class="bar-fill" style="--v:${x.afterV}%;--c:#2EC4B6">${x.afterV}%</div></div></div>
          <div class="figs">${x.figures.map((f) => `<div><b>${esc(f.v)}</b><span>${esc(f.k)}</span></div>`).join("")}</div>
        </div>
        <button class="linkbtn" type="button" data-set="training" data-i="0">${esc(x.open)}</button>`;
    else html += `<p>${esc(x.note)}</p>`;
    $("#workInfo").innerHTML = html;
    if (x.isTraining) requestAnimationFrame(() => requestAnimationFrame(() => { const ch = $("#chart"); if (ch) ch.classList.add("is-in"); }));
    if (anim) ["#stage", "#workInfo"].forEach((s) => { const n = $(s); n.classList.remove("is-swap"); void n.offsetWidth; n.classList.add("is-swap"); });
  }

  function renderCerts() {
    const K = T().certs, F = S.certFiles, cats = T().cats;
    const list = K.items.map((it, k) => ({ ...it, ...F[k], k }));
    gallery.certs = list.map((c) => ({ src: c.img, cap: c.name }));
    const card = (c, big) => `<li class="cc${big ? " cc--pro" : ""}" style="--k:${CAT[c.cat]}">
        <button type="button" data-set="certs" data-i="${c.k}" aria-label="${esc(c.name)}"><img src="${c.img.replace(".jpg", "-t.jpg")}" alt="" loading="lazy" decoding="async"></button>
        <div class="cc__b">${c.valid ? `<span class="valid">${esc(c.valid)}</span>` : ""}<h4>${esc(c.name)}</h4><p>${esc(c.issuer)}</p><p class="meta">${esc(c.date)}</p>
        ${c.file ? `<a href="${c.file}" target="_blank" rel="noopener">${esc(K.view)}</a>` : ""}</div></li>`;
    const pro = list.filter((c) => c.pro), rest = list.filter((c) => !c.pro);
    const used = [...new Set(rest.map((c) => c.cat))];
    const count = (k) => rest.filter((c) => k === "all" || c.cat === k).length;
    $("#certsWrap").innerHTML = `
      <h3 class="sub">${esc(K.proTitle)}</h3>
      <ul class="cgrid cgrid--pro">${pro.map((c) => card(c, true)).join("")}</ul>
      <div class="certs__head"><h3 class="sub">${esc(K.coursesTitle)}</h3><div class="filters" id="filters">${["all", ...used].map((k) => `<button type="button" data-f="${k}" aria-pressed="${k === certF}" style="--k:${k === "all" ? "#1F2328" : CAT[k]}">${esc(k === "all" ? K.all : cats[k])} <i>${count(k)}</i></button>`).join("")}</div></div>
      <ul class="cgrid" id="cgrid">${rest.filter((c) => certF === "all" || c.cat === certF).map((c) => card(c)).join("")}</ul>`;
  }

  function renderContact() {
    const t = T(), ct = t.contact, c = S.contact, h = t.hero;
    const ph = String(c.phone || "").replace(/\D/g, "");
    const phShow = ph.length === 10 ? `${ph.slice(0, 3)} ${ph.slice(3, 6)} ${ph.slice(6)}` : ph;
    const telIntl = ph ? "+966" + ph.replace(/^0/, "") : "";
    const main = [];
    if (c.email) main.push(`<a class="reach__btn is-main" href="mailto:${c.email}"><span>${esc(ct.email)}</span><small>${esc(c.email)}</small></a>`);
    if (ph) main.push(`<a class="reach__btn" href="tel:${telIntl}"><span>${esc(ct.call)}</span><small dir="ltr">${esc(phShow)}</small></a>`);
    if (c.whatsapp) main.push(`<a class="reach__btn" href="https://wa.me/${c.whatsapp}" target="_blank" rel="noopener"><span>${esc(ct.whatsapp)}</span><small></small></a>`);
    if (c.linkedin) main.push(`<a class="reach__btn" href="${c.linkedin}" target="_blank" rel="noopener"><span>${esc(ct.linkedin)}</span><small>linkedin.com</small></a>`);
    const cv = `cv.html?lang=${lang}`, vc = S.vcard && S.vcard[lang];
    const tools = [
      `<a class="reach__tool" href="${cv}" target="_blank" rel="noopener">${esc(ct.cv)}</a>`,
      vc ? `<a class="reach__tool" href="${vc}" download>${esc(ct.save)}</a>` : "",
      `<button class="reach__tool" type="button" id="shareBtn">${esc(ct.share)}</button>`,
      c.email ? `<button class="reach__tool" type="button" id="copyMail">${esc(ct.copy)}</button>` : ""
    ].join("");
    const year = new Date().getFullYear();
    $("#contactWrap").innerHTML = `
      <div class="reach__main">
        <h2 class="reach__title">${esc(ct.title)}</h2>
        <p class="reach__text">${esc(ct.text)}</p>
        <div class="reach__btns">${main.join("")}</div>
        <div class="reach__tools">${tools}</div>
      </div>
      <aside class="vcard" aria-label="${esc(ct.cardTitle)}">
        <div class="vcard__top">
          <div class="vcard__ph"><img src="${S.photo}" alt=""></div>
          <div><p class="vcard__name">${esc(h.name)}</p><p class="vcard__role">${esc(h.role)}</p></div>
        </div>
        <p class="vcard__org">${esc(h.org || "")}</p>
        <p class="vcard__line"><span class="badges">${h.badges.map((b) => `<b>${esc(b)}</b>`).join("")}</span><span>${esc(h.place)}</span></p>
        ${S.qr ? `<div class="vcard__qr"><img src="${S.qr}" alt="QR" width="104" height="104"><p>${esc(ct.scan)}</p></div>` : ""}
      </aside>
      <p class="reach__foot">© ${year} ${esc(t.footer)} — ${esc(ct.rights)}</p>`;
  }

  function render() {
    const t = T();
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl() ? "rtl" : "ltr";
    document.title = t.meta.title;
    $('meta[name="description"]').setAttribute("content", t.meta.description);
    $$("[data-t]").forEach((n) => { const v = get(t, n.dataset.t); if (v != null) n.textContent = v; });
    $("#tabsNav").setAttribute("aria-label", t.nav.pages);
    $("#prevBtn").setAttribute("aria-label", t.nav.prev);
    $("#nextBtn").setAttribute("aria-label", t.nav.next);
    $("#lbPrev").textContent = t.work.prev; $("#lbNext").textContent = t.work.next; $("#lbClose").textContent = t.work.close;
    renderHome(); renderAbout(); renderPath(); renderCerts(); renderSkills(); renderLearn(); renderWork(); renderContact();
    syncTabs();
  }

  /* ---------- Navigation ---------- */
  function syncTabs() {
    $$('[role="tab"]').forEach((b) => {
      const on = b.dataset.go === page;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
    });
    const idx = PAGES.indexOf(page);
    $("#prevBtn").disabled = idx === 0;
    $("#nextBtn").disabled = idx === PAGES.length - 1;
    $("#nextLbl").textContent = idx < PAGES.length - 1 ? `${T().nav.next}: ${T().nav[PAGES[idx + 1]]}` : "";
    requestAnimationFrame(moveInk);
  }
  function moveInk() {
    const b = $(`[role="tab"][data-go="${page}"]`), ink = $("#ink");
    if (!b) return;
    ink.style.left = b.offsetLeft + "px"; ink.style.width = b.offsetWidth + "px";
    const list = $("#tablist");
    const l = b.offsetLeft - list.clientWidth / 2 + b.offsetWidth / 2;
    list.scrollTo({ left: l, behavior: reduce ? "auto" : "smooth" });
  }

  function go(next, opts = {}) {
    if (!PAGES.includes(next)) next = "home";
    if (next === page) { if (next === "path") renderPath(); return; }
    if (busy) return;
    const from = $(`[data-page="${page}"]`), to = $(`[data-page="${next}"]`);
    const forward = PAGES.indexOf(next) > PAGES.indexOf(page);
    const sign = (forward ? 1 : -1) * (rtl() ? -1 : 1); // incoming from the reading-end side
    page = next;
    to.hidden = false; to.scrollTop = 0;
    if (next === "path") renderPath();
    syncTabs();
    if (!opts.silent) history.replaceState(null, "", "#" + next);
    const done = () => {
      from.hidden = true; busy = false;
      const ch = next === "work" && $("#chart"); if (ch) { ch.classList.remove("is-in"); requestAnimationFrame(() => requestAnimationFrame(() => ch.classList.add("is-in"))); }
    };
    if (reduce || !to.animate) { done(); return; }
    busy = true;
    from.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: `translateX(${-sign * 20}px)` }], { duration: 140, easing: "ease-in", fill: "forwards" })
      .onfinish = () => { from.getAnimations().forEach((a) => a.cancel()); };
    to.animate([{ opacity: 0, transform: `translateX(${sign * 28}px)` }, { opacity: 1, transform: "none" }], { duration: 260, delay: 40, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" })
      .onfinish = done;
  }
  const step = (d) => { const i = PAGES.indexOf(page) + d; if (i >= 0 && i < PAGES.length) go(PAGES[i]); };

  /* ---------- Lightbox ---------- */
  const gallery = {};
  let lbSet = null, lbI = 0;
  const lb = $("#lightbox");
  function lbShow() {
    const it = gallery[lbSet][lbI], n = gallery[lbSet].length;
    $("#lbImg").src = it.src; $("#lbImg").alt = it.cap; $("#lbCap").textContent = it.cap;
    $("#lbCount").textContent = n > 1 ? `${lbI + 1} / ${n}` : "";
    $("#lbPrev").hidden = $("#lbNext").hidden = n < 2;
  }
  const lbStep = (d) => { const n = gallery[lbSet].length; lbI = (lbI + d + n) % n; lbShow(); };
  function openLb(set, i) { lbSet = set; lbI = i; lbShow(); if (lb.showModal) lb.showModal(); }

  /* ---------- Events ---------- */
  document.addEventListener("click", (e) => {
    const g = e.target.closest("[data-go]"); if (g) { e.preventDefault(); go(g.dataset.go); return; }
    const s = e.target.closest("[data-set]"); if (s) { openLb(s.dataset.set, +s.dataset.i); return; }
    const st = e.target.closest("[data-stop]"); if (st) { pickStop(+st.dataset.stop); return; }
    const w = e.target.closest("[data-work]"); if (w) { const k = +w.dataset.work; if (k !== workI) { workI = k; showWork(true); } return; }
    const stg = e.target.closest("#stage"); if (stg) { openLb(stg.dataset.lb || "work", stg.dataset.lb === "training" ? 0 : workI); return; }
    const f = e.target.closest("[data-f]"); if (f) { certF = f.dataset.f; renderCerts(); const g = $("#cgrid"); g.classList.remove("is-swap"); void g.offsetWidth; g.classList.add("is-swap"); return; }
    if (e.target.closest("#copyMail")) {
      navigator.clipboard.writeText(S.contact.email).then(() => toast(T().contact.copied), () => (location.href = "mailto:" + S.contact.email));
      return;
    }
    if (e.target.closest("#shareBtn")) {
      const url = S.site || location.href.split("#")[0];
      if (navigator.share) navigator.share({ title: T().meta.title, url }).catch(() => {});
      else navigator.clipboard.writeText(url).then(() => toast(T().contact.shared), () => {});
      return;
    }
  });
  $(".mark").addEventListener("click", (e) => { e.preventDefault(); go("home"); });
  $("#prevBtn").addEventListener("click", () => step(-1));
  $("#nextBtn").addEventListener("click", () => step(1));
  $("#lbPrev").addEventListener("click", () => lbStep(-1));
  $("#lbNext").addEventListener("click", () => lbStep(1));
  $("#lbClose").addEventListener("click", () => lb.close());
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });

  addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const back = e.key === (rtl() ? "ArrowRight" : "ArrowLeft") ? -1 : 1;
    if (lb.open) { e.preventDefault(); lbStep(back); return; }
    if (e.target.closest("input,textarea,.rail,.thumbs,.filters")) return;
    e.preventDefault();
    step(back);
    if (e.target.closest('[role="tablist"]')) requestAnimationFrame(() => $(`[role="tab"][data-go="${page}"]`).focus());
  });

  // swipe between pages on touch screens
  let sx = 0, sy = 0, swiping = false;
  $("#deck").addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "touch" || e.target.closest(".thumbs,.rail,.matrix__grid")) return;
    swiping = true; sx = e.clientX; sy = e.clientY;
  });
  $("#deck").addEventListener("pointerup", (e) => {
    if (!swiping) return; swiping = false;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6) step((dx > 0) === rtl() ? 1 : -1);
  });
  $("#deck").addEventListener("pointercancel", () => (swiping = false));

  addEventListener("hashchange", () => go(location.hash.slice(1), { silent: true }));
  addEventListener("resize", () => requestAnimationFrame(moveInk));

  $("#langBtn").addEventListener("click", () => {
    lang = rtl() ? "en" : "ar";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });
  $("#printBtn").addEventListener("click", () => window.open(`cv.html?lang=${lang}`, "_blank", "noopener"));

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("is-on");
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("is-on"), 2200);
  }

  /* ---------- Boot ---------- */
  buildGrid();
  matrixEvents();
  const start = location.hash.slice(1);
  if (PAGES.includes(start) && start !== "home") {
    page = start;
    $$(".page").forEach((p) => (p.hidden = p.dataset.page !== start));
  }
  render();
  if (page === "home") intro();
  document.fonts && document.fonts.ready.then(moveInk);
  const warm = () => {
    const urls = [...new Set([...S.certFiles.map((c) => c.img.replace(".jpg", "-t.jpg")), ...workItems().map((x) => x.image), S.photo])];
    let i = 0;
    const next = () => { if (i >= urls.length) return; const im = new Image(); im.decoding = "async"; im.src = urls[i++]; (im.decode ? im.decode() : Promise.resolve()).catch(() => {}).finally(() => setTimeout(next, 30)); };
    next();
  };
  addEventListener("load", () => ("requestIdleCallback" in window ? requestIdleCallback(warm, { timeout: 1500 }) : setTimeout(warm, 800)));
})();

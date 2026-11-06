/* ==================================================================
   محتوى الموقع — هذا هو الملف الوحيد الذي تحتاج تعديله.
   ------------------------------------------------------------------
   • عدّل النصوص بين علامات التنصيص " " فقط، ولا تحذف الفواصل أو الأقواس.
   • القسم "ar" للعربية، و"en" للإنجليزية. أي إضافة في أحدهما أضفها في الآخر.
   • لإضافة عنصر (وظيفة، شهادة، دورة): انسخ عنصرًا مشابهًا كاملًا من { إلى }
     مع الفاصلة بعده، ثم عدّل قيمه.
   • الصور تُرفع داخل مجلد assets ثم يُكتب مسارها هنا.
   • اترك الحقل فارغًا "" لإخفائه (مثل رابط لينكدإن).
   • الفئات (cat): risk مخاطر وامتثال · data بيانات وتحليل · fin مالية ومحاسبة · people تدريب وأفراد
   ================================================================== */

window.SITE = {
  contact: {
    email: "h.t.m.1@hotmail.com",
    whatsapp: "966547413141",          // بدون + أو أصفار في البداية
    linkedin: ""                       // ضع رابط حسابك هنا، مثال: "https://www.linkedin.com/in/your-name"
  },
  site: "https://hatim-alharbi011.github.io",
  photo: "assets/img/hatem-cut.webp",
  cv: { ar: "assets/cv/hatem-almahmadi-cv-ar.pdf", en: "assets/cv/hatem-almahmadi-cv-en.pdf" },

  /* صور الشهادات — مشتركة بين اللغتين. أسماؤها في قسم كل لغة (certs.items) بنفس الترتيب */
  certFiles: [
    { cat: "risk",   img: "assets/certs/c01.jpg", file: "assets/certs/c01.pdf" },
    { cat: "risk",   img: "assets/certs/c02.jpg", file: "assets/certs/c02.pdf" },
    { cat: "risk",   img: "assets/certs/c03.jpg" },
    { cat: "risk",   img: "assets/certs/c18.jpg" },
    { cat: "risk",   img: "assets/certs/c19.jpg" },
    { cat: "fin",    img: "assets/certs/c17.jpg" },
    { cat: "data",   img: "assets/certs/c20.jpg" },
    { cat: "people", img: "assets/certs/c04.jpg" },
    { cat: "data",   img: "assets/certs/c05.jpg" },
    { cat: "data",   img: "assets/certs/c06.jpg" },
    { cat: "data",   img: "assets/certs/c07.jpg" },
    { cat: "data",   img: "assets/certs/c08.jpg" },
    { cat: "data",   img: "assets/certs/c09.jpg" },
    { cat: "data",   img: "assets/certs/c10.jpg" },
    { cat: "data",   img: "assets/certs/c11.jpg" },
    { cat: "data",   img: "assets/certs/c16.jpg" },
    { cat: "fin",    img: "assets/certs/c12.jpg" },
    { cat: "fin",    img: "assets/certs/c14.jpg" },
    { cat: "fin",    img: "assets/certs/c15.jpg" },
    { cat: "risk",   img: "assets/certs/c21.jpg" }
  ],

  ar: {
    meta: {
      title: "حاتم المحمادي — أخصائي إدارة مخاطر",
      description: "أخصائي إدارة مخاطر حاصل على GRCP وGRCA، بخبرة تتجاوز عشر سنوات في المحاسبة والتقارير المالية والالتزام وتحليل البيانات."
    },
    nav: { home: "الرئيسية", about: "نبذة", path: "الخبرات", certs: "الشهادات", skills: "المهارات", learn: "التعليم والتطوير", work: "الأعمال", contact: "تواصل", print: "تحميل السيرة PDF", lang: "English", next: "التالي", prev: "السابق", evidence: "اعرض الدليل", pages: "صفحات الموقع" },
    cats: { risk: "مخاطر وامتثال", data: "بيانات وتحليل", fin: "مالية ومحاسبة", people: "تدريب وأفراد" },

    hero: {
      name: "حاتم بن عابد المحمادي",
      role: "أخصائي إدارة مخاطر",
      org: "الهيئة العامة للعناية بشؤون المسجد الحرام والمسجد النبوي",
      badges: ["GRCP™", "GRCA™"],
      line: "أستند إلى خبرتي المالية، وأوظّف البيانات والأدوات الرقمية لفهم التحديات وبناء حلول عملية تدعم جودة العمليات والقرارات.",
      place: "مكة المكرمة، المملكة العربية السعودية",
      cta: "تواصل معي",
      cta2: "تعرّف عليّ",
      facts: [
        { v: "+10", k: "سنوات في المالية والالتزام" },
        { v: "GRCP · GRCA", k: "شهادتان مهنيتان من OCEG" },
        { v: "1447هـ", k: "جائزة العمل المتميز" }
      ]
    },

    matrix: {
      title: "خمسة مخاطر عالجتها فعلًا",
      likelihood: "الاحتمال",
      impact: "الأثر",
      treat: "طبّق المعالجة",
      reset: "أعِد الوضع الأصلي",
      note: "التقييم توضيحي؛ المعالجات من سجل عملي الفعلي.",
      levels: ["منخفض", "متوسط", "مرتفع", "مرتفع جدًا", "حرج"],
      readout: "الاحتمال {l} × الأثر {i} = {s}",
      risks: [
        { type: "بيانات", label: "بيانات صكوك الأوقاف مبعثرة ولا يمكن حصرها", treatment: "لوحة Power BI حصرت 1,961 صكًا وصنّفتها آليًا", from: [5, 4], to: [1, 2], link: "work:0" },
        { type: "امتثال", label: "أخطاء متراكمة في إقرارات ضريبة القيمة المضافة", treatment: "تصحيح الإقرارات من 2018 إلى 2024 ضمن لجنة رئيسية", from: [4, 5], to: [1, 3], link: "path:2" },
        { type: "تنظيمي", label: "عدم الجاهزية لمتطلبات الفوترة الإلكترونية", treatment: "قيادة مشروع الفوترة الإلكترونية بالتنسيق مع الجهات المعنية", from: [5, 5], to: [2, 2], link: "path:3" },
        { type: "مالي", label: "تفاوت إيجارات أبراج الاتصالات ومستحقات غير محصّلة", treatment: "توحيد القيم الإيجارية وتسوية المستحقات المالية", from: [4, 4], to: [2, 1], link: "path:3" },
        { type: "بشري", label: "فجوة مهارية في Excel لدى الموظفين", treatment: "دورة ارتفع فيها متوسط درجات المتدربين من 47% إلى 82%", from: [3, 3], to: [1, 1], link: "work:5" }
      ]
    },

    about: {
      title: "نبذة",
      paragraphs: [
        "أخصائي إدارة مخاطر بخبرة مهنية تتجاوز عشر سنوات في المحاسبة والتقارير المالية والالتزام وتحليل البيانات. أعمل حاليًا في إدارة المخاطر المؤسسية، وأسهم في تحديد المخاطر وتقييمها ومتابعتها، وتطوير سجلات المخاطر وخطط المعالجة، وإعداد التقارير الداعمة لاتخاذ القرار.",
        "أستفيد من خلفيتي المالية والتحليلية في فهم المخاطر والضوابط وربطها بالأهداف والعمليات، وأوظّف أدوات الذكاء الاصطناعي التوليدي مثل ChatGPT وClaude في تحليل المعلومات وتطوير التقارير والنماذج وتحسين كفاءة سير العمل، مع مراجعة المخرجات والتحقق من دقتها قبل اعتمادها."
      ],
      cardTitle: "بطاقة تعريف",
      card: [
        { k: "المسمى الحالي", v: "أخصائي إدارة مخاطر" },
        { k: "جهة العمل", v: "الهيئة العامة للعناية بشؤون المسجد الحرام والمسجد النبوي" },
        { k: "الخبرة", v: "أكثر من 10 سنوات" },
        { k: "الشهادات المهنية", v: "GRCP™ · GRCA™ · أخصائي ضريبة القيمة المضافة" },
        { k: "المؤهل", v: "بكالوريوس محاسبة — جامعة أم القرى" },
        { k: "المدينة", v: "مكة المكرمة" }
      ],
      next: "ابدأ من الخبرات"
    },

    path: {
      title: "الخبرات",
      intro: "من دفاتر الحسابات إلى سجلات المخاطر. اختر محطة لعرض تفاصيلها.",
      units: { y1: "سنة", y2: "سنتان", y: "سنوات", m1: "شهر", m2: "شهران", m: "أشهر", and: " و", now: "حتى الآن" },
      education: { years: "2009", role: "بكالوريوس محاسبة", org: "جامعة أم القرى", dates: "2009 — 2013", cat: "fin", start: "2009-09", end: "2013-06" },
      jobs: [
        {
          years: "2026 — الآن", cat: "risk", start: "2026-06", end: null,
          role: "أخصائي إدارة مخاطر",
          org: "الهيئة العامة للعناية بشؤون المسجد الحرام والمسجد النبوي",
          unit: "الإدارة العامة للحوكمة والمخاطر والالتزام المؤسسي",
          dates: "يونيو 2026 — حتى الآن",
          points: [
            "تحديد المخاطر المؤسسية وتحليلها وتقييمها ومتابعتها بالتنسيق مع الوحدات التنظيمية.",
            "إعداد وتحديث سجلات المخاطر وخطط المعالجة، ومتابعة حالة المخاطر وإجراءات المعالجة مع ملّاك المخاطر.",
            "تحليل مستويات المخاطر والضوابط القائمة، والمساهمة في إعداد تقارير ومؤشرات المخاطر الداعمة لاتخاذ القرار.",
            "المساهمة في تعزيز الوعي بممارسات إدارة المخاطر المؤسسية وتطوير أساليب المتابعة والتقارير."
          ]
        },
        {
          years: "2023 — 2026", cat: "data", start: "2023-08", end: "2026-06",
          role: "محاسب مالي",
          org: "الهيئة العامة للعناية بشؤون المسجد الحرام والمسجد النبوي",
          unit: "الإدارة المالية للشؤون الوقفية",
          dates: "أغسطس 2023 — يونيو 2026",
          points: [
            "إعداد وثيقة مشروع تأسيس وتشغيل مالية الأوقاف، متضمنة الأرصدة الافتتاحية والقوائم المالية للشؤون الوقفية.",
            "تصميم وتنفيذ لوحات معلومات تفاعلية باستخدام Power BI لمتابعة التحصيل والإيرادات وبيانات المستفيدين، بما عزّز وضوح المعلومات ودعم اتخاذ القرار.",
            "تحويل بيانات الصكوك الوقفية البالغ عددها **1,961 صكًا** إلى لوحة تفاعلية عبر Power BI، بما مكّن من حصر الأوقاف وتصنيفها وتحليلها وتسريع الوصول للمعلومات.",
            "متابعة الموظفين وتوجيههم والإشراف على تدريبهم على Excel لرفع كفاءة الأداء وتحسين جودة التقارير."
          ],
          extraTitle: "وكيل إدارة التحصيل والحسابات للشؤون الوقفية وتطوير الأعمال (تكليف سابق)",
          extra: [
            "**قيادة** وتنفيذ مشروع **الفوترة الإلكترونية** بالتنسيق مع الجهات المعنية.",
            "المشاركة في توحيد القيم الإيجارية لأبراج الاتصالات وتسوية المستحقات المالية، والمساهمة في تعظيم العائد الاستثماري عبر لجنة تثمين الأصناف الرجيع.",
            "إعداد دراسة متخصصة حول تطبيقات ضريبة القيمة المضافة في قطاع الأوقاف."
          ]
        },
        {
          years: "2022 — 2023", cat: "risk", start: "2022-12", end: "2023-08",
          role: "محاسب ضريبة القيمة المضافة",
          org: "الهيئة العامة للعناية بشؤون المسجد الحرام والمسجد النبوي",
          unit: "إدارة الحسابات والأصول",
          dates: "ديسمبر 2022 — أغسطس 2023",
          points: [
            "عضو رئيسي في لجنة تصحيح إقرارات ضريبة القيمة المضافة **من عام 2018 إلى عام 2024**.",
            "المشاركة في مشروع التحول المحاسبي من الأساس النقدي إلى أساس الاستحقاق."
          ]
        },
        {
          years: "2013 — 2022", cat: "fin", start: "2013-09", end: "2022-07",
          role: "أخصائي محاسبة",
          org: "شركة إخوان السعودية التجارية",
          unit: "جدة",
          dates: "سبتمبر 2013 — يوليو 2022",
          points: [
            "إعداد ومراجعة إقرارات ضريبة القيمة المضافة شهريًا **لعشرة أنشطة متنوعة** ضمن مجموعة ضريبية واحدة، مع ضمان الالتزام بالأنظمة واللوائح التنفيذية والمحافظة على سجل ضريبي منتظم **وخالٍ من المخالفات**.",
            "تمثيل الشركة في التواصل مع هيئة الزكاة والضريبة والجمارك ومتابعة المعاملات الضريبية والإقرارات إلكترونيًا.",
            "إعداد القوائم المالية الشهرية والسنوية، وتنفيذ التسويات البنكية ومراجعة قيود العهد النقدية، بما عزّز موثوقية التقارير وسلامة المستندات المالية.",
            "الإشراف على الجرد الشهري للصندوق، والمساهمة في تطوير النظام المحاسبي بما يتوافق مع المتغيرات التشغيلية ومتطلبات العمل."
          ]
        }
      ]
    },

    certs: {
      title: "الشهادات",
      intro: "اضغط أي شهادة لعرضها. البيانات الشخصية في الصور مموّهة.",
      proTitle: "الشهادات المهنية",
      coursesTitle: "الدورات والبرامج التدريبية",
      all: "الكل",
      view: "ملف الشهادة",
      items: [
        { name: "محترف معتمد في الحوكمة والمخاطر والالتزام (GRCP™)", issuer: "OCEG", date: "أغسطس 2026", valid: "سارية حتى أغسطس 2027", pro: true },
        { name: "مدقق معتمد في الحوكمة والمخاطر والالتزام (GRCA™)", issuer: "OCEG", date: "أغسطس 2026", valid: "سارية حتى أغسطس 2027", pro: true },
        { name: "أخصائي ضريبة القيمة المضافة", issuer: "الهيئة السعودية للمراجعين والمحاسبين", date: "مايو 2024", pro: true },
        { name: "إدارة المخاطر المؤسسية (ERM)", issuer: "شركة كفاءة", date: "18 ساعة · أغسطس 2026" },
        { name: "الحوكمة والمخاطر والامتثال (GRC)", issuer: "شركة كفاءة", date: "18 ساعة · يونيو 2026" },
        { name: "دبلوم المحاسب المحترف في القطاع غير الربحي", issuer: "الجمعية السعودية للحوكمة — جامعة الملك خالد", date: "64 ساعة · سبتمبر — أكتوبر 2025" },
        { name: "تحليل البيانات ومهارات العرض", issuer: "شركة كفاءة", date: "12 ساعة · مارس 2026" },
        { name: "تدريب المدربين (TOT)", issuer: "IBCT — إدراك", date: "نوفمبر 2025" },
        { name: "تحليل البيانات وذكاء الأعمال وأدوات الذكاء الاصطناعي", issuer: "ثراء للتدريب", date: "60 ساعة · 2025" },
        { name: "التقارير الإدارية وتحليل البيانات", issuer: "مركز تقنيات العلوم للتدريب", date: "15 ساعة · 2025" },
        { name: "احتراف برنامج Microsoft Excel", issuer: "منصة رواق", date: "بدرجة 98% · يوليو 2025" },
        { name: "Data Analysis — Power BI", issuer: "Udemy", date: "8.5 ساعات · أغسطس 2025" },
        { name: "Power BI 101 — مستوى مبتدئ", issuer: "أكاديمية سطر", date: "ساعتان · مايو 2025" },
        { name: "Power BI 102 — مستوى متوسط", issuer: "أكاديمية سطر", date: "ساعتان · مايو 2025" },
        { name: "مقدمة في ذكاء الأعمال", issuer: "أكاديمية سطر", date: "ساعة واحدة · مايو 2025" },
        { name: "لقاء تحليل البيانات باستخدام Power BI", issuer: "الجمعية المهنية للإحصائيين وعلماء البيانات", date: "6 ساعات · مايو 2025" },
        { name: "التهيئة لاختبار فني محاسبة", issuer: "مركز لغة الأعمال للتدريب", date: "60 ساعة · 2025" },
        { name: "أساسيات ومبادئ المحاسبة المالية — الجزء الثاني", issuer: "دروب", date: "13 ساعة · نوفمبر 2022" },
        { name: "مبادئ وأساسيات المحاسبة لنظار الوقف", issuer: "مركز تمكين الهدف للإشراف والتدريب التربوي", date: "5 ساعات · 2025" },
        { name: "التميز التشغيلي وتحسين الإجراءات", issuer: "شركة كفاءة", date: "18 ساعة · يوليو 2026" }
      ]
    },

    skills: {
      title: "المهارات",
      groups: [
        { title: "إدارة المخاطر والحوكمة والالتزام", cat: "risk", points: [
          "**إدارة المخاطر المؤسسية (ERM):** تحديد المخاطر وتحليلها وتقييمها ومتابعتها.",
          "**سجلات المخاطر:** إعداد وتحديث سجلات المخاطر وخطط المعالجة وتقارير ومؤشرات المخاطر.",
          "**الحوكمة والالتزام (GRC):** الضوابط الداخلية ودعم اتخاذ القرار."
        ], tools: ["ERM", "GRC", "سجلات المخاطر", "الضوابط الداخلية", "ضريبة القيمة المضافة"] },
        { title: "التحليل والتقنية", cat: "data", points: [
          "**لوحات المعلومات:** تحليل البيانات وتصميم لوحات المعلومات التفاعلية باستخدام Power BI وExcel.",
          "**Excel المتقدم:** بما يشمل Power Query وPivot Tables وتحليل مؤشرات الأداء الرئيسية (KPIs).",
          "**الذكاء الاصطناعي التوليدي:** توظيف ChatGPT وClaude في تحليل المعلومات وتطوير التقارير والنماذج."
        ], tools: ["Power BI", "Excel", "Power Query", "Pivot Tables", "KPIs", "ChatGPT", "Claude"] },
        { title: "مهارات إدارية وشخصية", cat: "people", points: [
          "**التفكير التحليلي:** حل المشكلات، ودقة مراجعة البيانات والمعاملات.",
          "**التواصل:** التواصل الفعّال والتحدث أمام الجمهور والتعامل مع فرق العمل الداخلية والخارجية.",
          "**القيادة والتنظيم:** الإشراف وتدريب الموظفين وإدارة الوقت وتحديد الأولويات والمرونة في بيئات العمل."
        ], tools: [] },
        { title: "الذكاء الاصطناعي بمسؤولية", cat: "fin", lead: true, points: [
          "**أين أستخدمه:** تحليل البيانات وتلخيص المعلومات، وصياغة التقارير والعروض، وبناء المعادلات والنماذج في Excel وPower BI.",
          "**كيف أضبطه:** أراجع كل مخرج وأتحقق من أرقامه ومصادره قبل اعتماده، ويبقى القرار النهائي بشريًا.",
          "**لماذا:** لأختصر وقت العمل الروتيني وأمنح وقتًا أكبر للتحليل والحكم المهني."
        ], tools: ["ChatGPT", "Claude"] }
      ]
    },

    learn: {
      title: "التعليم والتطوير",
      eduTitle: "التعليم",
      edu: { degree: "بكالوريوس محاسبة", school: "جامعة أم القرى", years: "2009 — 2013" },
      recentTitle: "الدورات الحديثة",
      recent: [
        { name: "إدارة المخاطر المؤسسية (ERM)", by: "شركة كفاءة", meta: "18 ساعة · أغسطس 2026", cert: 3 },
        { name: "التميز التشغيلي وتحسين الإجراءات", by: "شركة كفاءة", meta: "18 ساعة · يوليو 2026", cert: 19 },
        { name: "الحوكمة والمخاطر والامتثال (GRC)", by: "شركة كفاءة", meta: "18 ساعة · يونيو 2026", cert: 4 },
        { name: "تحليل البيانات ومهارات العرض", by: "شركة كفاءة", meta: "12 ساعة · مارس 2026", cert: 6 },
        { name: "دبلوم المحاسب المحترف في القطاع غير الربحي", by: "الجمعية السعودية للحوكمة", meta: "64 ساعة · 2025", cert: 5 }
      ],
      viewCert: "اعرض الشهادة",
      devTitle: "التطوير المهني الإضافي",
      dev: [
        { name: "معسكر تحليل البيانات وذكاء الأعمال وأدوات الذكاء الاصطناعي", by: "ثراء للتدريب" },
        { name: "Power BI (المستوى الأول والثاني)", by: "أكاديمية سطر" },
        { name: "التقارير الإدارية وتحليل البيانات", by: "مركز تقنيات العلوم للتدريب" },
        { name: "أخصائي مالي", by: "مركز المهارات المالية" }
      ],
      volTitle: "العمل التطوعي",
      vol: { name: "عضو — Toastmasters International", meta: "يوليو 2026 — حتى الآن", text: "المشاركة في أنشطة تطوير مهارات التواصل والإلقاء والعرض والقيادة والعمل الجماعي." }
    },

    work: {
      title: "الأعمال",
      intro: "لوحات بنيتها في Power BI لجهات عمل فعلية، وتدريب قدّمته. الأرقام في الصور مموّهة حفاظًا على سرية البيانات.",
      caseStudy: {
        tag: "دراسة حالة",
        title: "حصر أوقاف الحرمين: من 1,961 صكًا إلى لوحة واحدة",
        image: "assets/bi/p5.jpg",
        problem: "وصلت بيانات صكوك الأوقاف من لجنة الحصر في صورة نصوص غير منظمة، لا تكشف نوع الوقف ولا مصرفه ولا موقعه.",
        steps: [
          "تنظيف **23,532 خلية بيانات** وتجميعها باستخدام Power Query.",
          "بناء معادلات تصنيف تلقائية في Excel بدوال LET وSEARCH وISNUMBER، تستخرج نوع الوقف ومصرفه ومدينته ومنطقته من نص الصك.",
          "تصميم لوحة تفاعلية في Power BI بخريطة توزيع جغرافي على مناطق المملكة."
        ],
        result: "نال هذا العمل جائزة العمل المتميز لشهر جمادى الأولى 1447هـ.",
        award: "assets/img/award.jpg"
      },
      gallery: [
        { title: "ملخص التحصيل للعقود الاستثمارية", note: "نسب التحصيل لكل شركة متعاقدة، مع مؤشرات ملونة تكشف المتأخرات فورًا.", image: "assets/bi/p1.jpg" },
        { title: "مؤشرات السكن الخيري", note: "المستفيدون حسب الجنسية والجنس والوقف، مع الإيرادات السنوية.", image: "assets/bi/p3.jpg" },
        { title: "صفقات البيع العقارية في مكة المكرمة", note: "قيمة الصفقات ومتوسط سعر المتر حسب المدينة ونوع العقار.", image: "assets/bi/p4.jpg" },
        { title: "تحليل دورة إدارة الأعمال", note: "تقييم المتدربين للمحتوى والمدرب، ونسبة التحسن بين الاختبارين.", image: "assets/bi/p2.jpg" }
      ],
      training: {
        tag: "تدريب قدّمته",
        title: "دورة Excel لمنسوبي أكاديمية تطوير الموارد البشرية",
        image: "assets/docs/r1-01.jpg",
        dates: "10 — 19 فبراير 2026",
        text: "أول تجربة داخلية لنقل المعرفة في الأكاديمية: خمسة محاور من هيكلة البيانات إلى الجداول الذكية ومعايير الإخراج، وانتهت بمشروع تطبيقي لكل متدرب.",
        before: "الاختبار القبلي", after: "الاختبار البعدي", beforeV: 47, afterV: 82,
        figures: [ { v: "95%", k: "رضا المتدربين" }, { v: "99%", k: "تقييم المدرب" }, { v: "11", k: "متدربًا" } ],
        pages: ["assets/docs/r1-01.jpg", "assets/docs/r-05.jpg", "assets/docs/r-06.jpg"],
        open: "تصفّح تقرير الدورة"
      },
      close: "إغلاق", prev: "السابق", next: "التالي"
    },

    contact: {
      title: "لنتحدث",
      text: "إن كانت لديك فرصة في المخاطر أو الحوكمة أو تحليل البيانات، يسعدني أن أسمع منك.",
      close: "إغلاق",
      email: "راسلني بالبريد",
      whatsapp: "واتساب",
      linkedin: "لينكدإن",
      copy: "نسخ البريد",
      copied: "تم نسخ البريد"
    },
    footer: "حاتم المحمادي"
  },

  en: {
    meta: {
      title: "Hatem Almahmadi — Risk Management Specialist",
      description: "GRCP and GRCA certified risk management specialist with 10+ years in accounting, financial reporting, compliance and data analysis."
    },
    nav: { home: "Home", about: "About", path: "Experience", certs: "Certificates", skills: "Skills", learn: "Education", work: "Work", contact: "Contact", print: "Download CV (PDF)", lang: "العربية", next: "Next", prev: "Previous", evidence: "See the evidence", pages: "Site pages" },
    cats: { risk: "Risk & compliance", data: "Data & analysis", fin: "Finance & accounting", people: "Training & people" },

    hero: {
      name: "Hatem Abid Almahmadi",
      role: "Risk Management Specialist",
      org: "General Authority for the Affairs of the Grand Mosque and the Prophet's Mosque",
      badges: ["GRCP™", "GRCA™"],
      line: "I build on my financial background and use data and digital tools to understand challenges and create practical solutions that improve the quality of operations and decisions.",
      place: "Makkah, Saudi Arabia",
      cta: "Get in touch",
      cta2: "About me",
      facts: [
        { v: "10+", k: "years in finance & compliance" },
        { v: "GRCP · GRCA", k: "OCEG certifications" },
        { v: "1447 AH", k: "Outstanding Work Award" }
      ]
    },

    matrix: {
      title: "Five risks I actually treated",
      likelihood: "Likelihood",
      impact: "Impact",
      treat: "Apply treatment",
      reset: "Reset",
      note: "Ratings are illustrative; the treatments come from my actual work record.",
      levels: ["Low", "Medium", "High", "Very high", "Critical"],
      readout: "Likelihood {l} × Impact {i} = {s}",
      risks: [
        { type: "Data", label: "Endowment deed data scattered and uncountable", treatment: "A Power BI dashboard that inventoried and auto-classified 1,961 deeds", from: [5, 4], to: [1, 2], link: "work:0" },
        { type: "Compliance", label: "Accumulated errors in VAT returns", treatment: "Corrected 2018–2024 returns as a core committee member", from: [4, 5], to: [1, 3], link: "path:2" },
        { type: "Regulatory", label: "Not ready for e-invoicing requirements", treatment: "Led the e-invoicing project with the relevant parties", from: [5, 5], to: [2, 2], link: "path:3" },
        { type: "Financial", label: "Inconsistent telecom-tower rents and uncollected dues", treatment: "Unified rental values and settled outstanding dues", from: [4, 4], to: [2, 1], link: "path:3" },
        { type: "People", label: "Excel skills gap among staff", treatment: "A course that lifted average trainee scores from 47% to 82%", from: [3, 3], to: [1, 1], link: "work:5" }
      ]
    },

    about: {
      title: "About",
      paragraphs: [
        "Risk management specialist with more than ten years of experience in accounting, financial reporting, compliance and data analysis. I currently work in enterprise risk management, helping identify, assess and monitor risks, develop risk registers and treatment plans, and prepare reports that support decisions.",
        "I draw on my financial and analytical background to understand risks and controls and link them to objectives and processes. I use generative AI tools such as ChatGPT and Claude to analyse information, develop reports and models and improve workflow efficiency — reviewing and verifying every output before it is used."
      ],
      cardTitle: "At a glance",
      card: [
        { k: "Current role", v: "Risk Management Specialist" },
        { k: "Employer", v: "General Authority for the Affairs of the Grand Mosque and the Prophet's Mosque" },
        { k: "Experience", v: "10+ years" },
        { k: "Certifications", v: "GRCP™ · GRCA™ · VAT Specialist" },
        { k: "Degree", v: "BSc Accounting — Umm Al-Qura University" },
        { k: "City", v: "Makkah" }
      ],
      next: "Start with experience"
    },

    path: {
      title: "Experience",
      intro: "From ledgers to risk registers. Pick a stop to see the details.",
      units: { y1: "year", y2: "years", y: "years", m1: "month", m2: "months", m: "months", and: " ", now: "present" },
      education: { years: "2009", role: "BSc Accounting", org: "Umm Al-Qura University", dates: "2009 — 2013", cat: "fin", start: "2009-09", end: "2013-06" },
      jobs: [
        {
          years: "2026 — now", cat: "risk", start: "2026-06", end: null,
          role: "Risk Management Specialist",
          org: "General Authority for the Affairs of the Grand Mosque and the Prophet's Mosque",
          unit: "General Administration of Governance, Risk & Institutional Compliance",
          dates: "June 2026 — present",
          points: [
            "Identify, analyse, assess and monitor enterprise risks in coordination with organisational units.",
            "Prepare and update risk registers and treatment plans, and follow up on risk status and actions with risk owners.",
            "Analyse risk levels and existing controls, and contribute to risk reports and indicators that support decisions.",
            "Help raise awareness of enterprise risk practices and improve monitoring and reporting methods."
          ]
        },
        {
          years: "2023 — 2026", cat: "data", start: "2023-08", end: "2026-06",
          role: "Financial Accountant",
          org: "General Authority for the Affairs of the Grand Mosque and the Prophet's Mosque",
          unit: "Financial Administration for Endowment Affairs",
          dates: "August 2023 — June 2026",
          points: [
            "Prepared the project document for establishing endowment finance operations, including opening balances and financial statements.",
            "Designed interactive Power BI dashboards to track collections, revenue and beneficiary data, improving clarity and supporting decisions.",
            "Turned **1,961 endowment deeds** into an interactive Power BI dashboard to inventory, classify and analyse endowments and speed up access to information.",
            "Supervised and trained staff on Excel to improve performance and report quality."
          ],
          extraTitle: "Deputy Director of Collections, Accounts & Business Development (previous assignment)",
          extra: [
            "**Led** and delivered the **e-invoicing project** with the relevant parties.",
            "Helped unify rental values for telecom towers and settle outstanding dues, and contributed to investment returns through the returned-items valuation committee.",
            "Wrote a specialised study on VAT applications in the endowment sector."
          ]
        },
        {
          years: "2022 — 2023", cat: "risk", start: "2022-12", end: "2023-08",
          role: "VAT Accountant",
          org: "General Authority for the Affairs of the Grand Mosque and the Prophet's Mosque",
          unit: "Accounts & Assets Administration",
          dates: "December 2022 — August 2023",
          points: [
            "Core member of the committee correcting VAT returns **from 2018 to 2024**.",
            "Took part in moving accounting from a cash basis to an accrual basis."
          ]
        },
        {
          years: "2013 — 2022", cat: "fin", start: "2013-09", end: "2022-07",
          role: "Accounting Specialist",
          org: "Ikhwan Saudi Trading Company",
          unit: "Jeddah",
          dates: "September 2013 — July 2022",
          points: [
            "Prepared and reviewed monthly VAT returns for **ten business lines** in one tax group, ensuring compliance and a clean record **with no violations**.",
            "Represented the company before ZATCA and handled tax transactions and returns online.",
            "Prepared monthly and annual financial statements, bank reconciliations and petty-cash reviews, strengthening report reliability.",
            "Supervised monthly cash counts and helped develop the accounting system in line with operational needs."
          ]
        }
      ]
    },

    certs: {
      title: "Certificates",
      intro: "Select any certificate to view it. Personal details in the images are blurred.",
      proTitle: "Professional certifications",
      coursesTitle: "Courses and training programmes",
      all: "All",
      view: "Certificate file",
      items: [
        { name: "Certified GRC Professional (GRCP™)", issuer: "OCEG", date: "Aug 2026", valid: "Valid through Aug 2027", pro: true },
        { name: "Certified GRC Auditor (GRCA™)", issuer: "OCEG", date: "Aug 2026", valid: "Valid through Aug 2027", pro: true },
        { name: "VAT Specialist", issuer: "SOCPA", date: "May 2024", pro: true },
        { name: "Enterprise Risk Management (ERM)", issuer: "Kafa'a", date: "18 hours · Aug 2026" },
        { name: "Governance, Risk and Compliance (GRC)", issuer: "Kafa'a", date: "18 hours · Jun 2026" },
        { name: "Professional Accountant Diploma — Non-profit Sector", issuer: "Saudi Society for Governance — King Khalid University", date: "64 hours · Sep — Oct 2025" },
        { name: "Data analysis and presentation skills", issuer: "Kafa'a", date: "12 hours · Mar 2026" },
        { name: "Training of Trainers (TOT)", issuer: "IBCT — Edraak", date: "Nov 2025" },
        { name: "Data analytics, BI and AI tools", issuer: "Tharaa Training", date: "60 hours · 2025" },
        { name: "Management reporting and data analysis", issuer: "Science Techniques Training Center", date: "15 hours · 2025" },
        { name: "Microsoft Excel mastery", issuer: "Rwaq", date: "Score 98% · Jul 2025" },
        { name: "Data Analysis — Power BI", issuer: "Udemy", date: "8.5 hours · Aug 2025" },
        { name: "Power BI 101 — beginner", issuer: "Satr Academy", date: "2 hours · May 2025" },
        { name: "Power BI 102 — intermediate", issuer: "Satr Academy", date: "2 hours · May 2025" },
        { name: "Introduction to business intelligence", issuer: "Satr Academy", date: "1 hour · May 2025" },
        { name: "Data analysis with Power BI workshop", issuer: "Professional Association of Statisticians & Data Scientists", date: "6 hours · May 2025" },
        { name: "Accounting technician exam preparation", issuer: "Business Language Training Center", date: "60 hours · 2025" },
        { name: "Fundamentals of financial accounting — part 2", issuer: "Doroob", date: "13 hours · Nov 2022" },
        { name: "Accounting principles for endowment trustees", issuer: "Tamkeen Alhadaf Training Center", date: "5 hours · 2025" },
        { name: "Operational excellence and process improvement", issuer: "Kafa'a", date: "18 hours · Jul 2026" }
      ]
    },

    skills: {
      title: "Skills",
      groups: [
        { title: "Risk management, governance & compliance", cat: "risk", points: [
          "**Enterprise risk management (ERM):** identifying, analysing, assessing and monitoring risks.",
          "**Risk registers:** preparing and updating risk registers, treatment plans, and risk reports and indicators.",
          "**GRC:** governance, risk and compliance, internal controls and decision support."
        ], tools: ["ERM", "GRC", "Risk registers", "Internal controls", "VAT"] },
        { title: "Analysis & technology", cat: "data", points: [
          "**Dashboards:** data analysis and interactive dashboards with Power BI and Excel.",
          "**Advanced Excel:** including Power Query, Pivot Tables and KPI analysis.",
          "**Generative AI:** using tools such as ChatGPT and Claude to analyse information and develop reports and models."
        ], tools: ["Power BI", "Excel", "Power Query", "Pivot Tables", "KPIs", "ChatGPT", "Claude"] },
        { title: "Management & personal", cat: "people", points: [
          "**Analytical thinking:** problem solving and accurate review of data and transactions.",
          "**Communication:** effective communication, public speaking and working with internal and external teams.",
          "**Leadership & organisation:** supervising and training staff, time management, prioritising and adaptability."
        ], tools: [] },
        { title: "Responsible AI use", cat: "fin", lead: true, points: [
          "**Where I use it:** analysing data and summarising information, drafting reports and presentations, and building formulas and models in Excel and Power BI.",
          "**How I control it:** I review every output and check its figures and sources before using it — the final decision stays human.",
          "**Why:** to cut routine work and leave more time for analysis and professional judgement."
        ], tools: ["ChatGPT", "Claude"] }
      ]
    },

    learn: {
      title: "Education & development",
      eduTitle: "Education",
      edu: { degree: "BSc Accounting", school: "Umm Al-Qura University", years: "2009 — 2013" },
      recentTitle: "Recent courses",
      recent: [
        { name: "Enterprise Risk Management (ERM)", by: "Kafa'a", meta: "18 hours · Aug 2026", cert: 3 },
        { name: "Operational excellence and process improvement", by: "Kafa'a", meta: "18 hours · Jul 2026", cert: 19 },
        { name: "Governance, Risk and Compliance (GRC)", by: "Kafa'a", meta: "18 hours · Jun 2026", cert: 4 },
        { name: "Data analysis and presentation skills", by: "Kafa'a", meta: "12 hours · Mar 2026", cert: 6 },
        { name: "Professional Accountant Diploma — Non-profit Sector", by: "Saudi Society for Governance", meta: "64 hours · 2025", cert: 5 }
      ],
      viewCert: "View certificate",
      devTitle: "Additional professional development",
      dev: [
        { name: "Data analytics, BI and AI tools bootcamp", by: "Tharaa Training" },
        { name: "Power BI (levels 1 and 2)", by: "Satr Academy" },
        { name: "Management reporting and data analysis", by: "Science Techniques Training Center" },
        { name: "Financial Specialist", by: "Financial Skills Center" }
      ],
      volTitle: "Volunteering",
      vol: { name: "Member — Toastmasters International", meta: "July 2026 — present", text: "Taking part in activities that build communication, public speaking, presentation, leadership and teamwork skills." }
    },

    work: {
      title: "Work",
      intro: "Dashboards I built in Power BI for real organisations, and training I delivered. Figures in the images are blurred to keep the data confidential.",
      caseStudy: {
        tag: "Case study",
        title: "Haramain endowments: from 1,961 deeds to one dashboard",
        image: "assets/bi/p5.jpg",
        problem: "Endowment deed data arrived from the inventory committee as unstructured text that showed neither the type of endowment, its beneficiary nor its location.",
        steps: [
          "Cleaned and consolidated **23,532 data cells** with Power Query.",
          "Built automatic classification formulas in Excel (LET, SEARCH, ISNUMBER) that extract type, beneficiary, city and region from each deed's text.",
          "Designed an interactive Power BI dashboard with a map of the deeds across the Kingdom's regions."
        ],
        result: "This work won the Outstanding Work Award for Jumada al-Ula 1447 AH.",
        award: "assets/img/award.jpg"
      },
      gallery: [
        { title: "Investment contract collections", note: "Collection rates per contractor, with colour flags that surface arrears instantly.", image: "assets/bi/p1.jpg" },
        { title: "Charitable housing indicators", note: "Beneficiaries by nationality, gender and endowment, with annual revenue.", image: "assets/bi/p3.jpg" },
        { title: "Makkah real-estate sales", note: "Deal value and average price per square metre by city and property type.", image: "assets/bi/p4.jpg" },
        { title: "Business course analysis", note: "Trainee ratings of content and trainer, and improvement between tests.", image: "assets/bi/p2.jpg" }
      ],
      training: {
        tag: "Training I delivered",
        title: "Excel course for the HR Development Academy",
        image: "assets/docs/r1-01.jpg",
        dates: "10 — 19 February 2026",
        text: "The academy's first internal knowledge-transfer pilot: five modules from data structure to smart tables and print standards, ending with a hands-on project per trainee.",
        before: "Pre-test", after: "Post-test", beforeV: 47, afterV: 82,
        figures: [ { v: "95%", k: "Trainee satisfaction" }, { v: "99%", k: "Trainer rating" }, { v: "11", k: "Trainees" } ],
        pages: ["assets/docs/r1-01.jpg", "assets/docs/r-05.jpg", "assets/docs/r-06.jpg"],
        open: "Browse the course report"
      },
      close: "Close", prev: "Previous", next: "Next"
    },

    contact: {
      title: "Let's talk",
      text: "If you have an opportunity in risk, governance or data analysis, I'd be glad to hear from you.",
      close: "Close",
      email: "Email me",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      copy: "Copy email",
      copied: "Email copied"
    },
    footer: "Hatem Almahmadi"
  }
};

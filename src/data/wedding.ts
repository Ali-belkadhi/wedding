export interface ColorSwatch {
  name: { fr: string; ar: string };
  hex: string;
  border?: string;
  textDark?: boolean;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  thumb: string;
  alt: { fr: string; ar: string };
  caption: { fr: string; ar: string };
  orientation: 'landscape' | 'portrait' | 'square';
}

export const wedding = {
  bride: { fr: "Meriem", ar: "مريم" },
  groom: { fr: "Refki", ar: "رفقي" },
  coupleDisplay: { fr: "Meriem & Refki", ar: "مريم & رفقي" },
  initials: { fr: "M & R", ar: "م & ر" },

  date: "2026-12-12T18:00:00",
  displayDate: { fr: "12 Décembre 2026", ar: "12 ديسمبر 2026" },
  displayYear: "2026",

  city: { fr: "Kébili, Bazma", ar: "قبلي، بازمة" },
  country: { fr: "Tunisie", ar: "تونس" },

  venue: {
    name: { fr: "Espace des Célébrations", ar: "فضاء الاحتفالات الملكي" },
    subname: { fr: "Domaine de Bazma", ar: "قصر بازمة" },
    address: { fr: "Bazma, Kébili, Tunisie", ar: "بازمة، قبلي، تونس" },
    mapsUrl: "https://maps.google.com/?q=Bazma+Kebili+Tunisia",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Bazma+Kebili+Tunisia",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85"
  },

  whatsapp: {
    number: "21698123456",
    displayNumber: "+216 98 123 456",
    deadline: { fr: "1er Décembre 2026", ar: "1 ديسمبر 2026" },
    defaultMessage: {
      fr: "Bonjour Meriem & Refki ❤️ Je vous confirme ma présence à votre mariage du 12 Décembre 2026.",
      ar: "مرحبا مريم ورفقي ❤️ يسعدني ويشرفني تأكيد حضوري لحفل زفافكم المبارك يوم 12 ديسمبر 2026."
    }
  },

  welcome: {
    badge: { fr: "L'Invitation", ar: "بطاقة الدعوة" },
    quote: { 
      fr: "Deux âmes, un seul battement de cœur, une promesse pour l'éternité.",
      ar: "روحان، نبض قلب واحد، ووعد يُخلّد في أعماق الأبدية."
    },
    invitation: {
      fr: "C'est avec une immense joie et une émotion infinie que nous vous convions à célébrer le sacre de notre amour. Au cœur de la douceur oasienne de Kébili, venez partager nos rires, nos regards et nos danses.",
      ar: "بفيض من مشاعر الفرح والغبطة، يسعدنا أن ندعوكم لمشاركتنا بهجة عقد قراننا وزفافنا المبارك في ربوع قبلي وبازمة الجميلة. حضوركم يضفي على بهجتنا بهاءً وعلى فرحتنا سروراً."
    },
    signOff: { fr: "Avec tout notre amour et notre infinie tendresse.", ar: "بكل حب وتقدير وامتنان." }
  },

  story: {
    badge: { fr: "Notre Histoire", ar: "قصة حبنا" },
    title: { fr: "Le Fil Invisible du Destin", ar: "خيط القدر غير المرئي" },
    subtitle: { fr: "D'un regard échangé sous le jasmin aux promesses d'un futur radieux.", ar: "من نظرة أزهرت برائحة الياسمين إلى عهد يضيء درب الغد." },
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    paragraphs: [
      {
        fr: "Tout a commencé il y a six ans, lors d'un après-midi ensoleillé où le hasard a orchestré notre première conversation. Ce qui ne devait être qu'une brève rencontre s'est mué en heures d'échanges complices au parfum de fleur d'oranger.",
        ar: "بدأت حكايتنا قبل ست سنوات في أمسية مشرقة حيث رتّب القدر أول لقاء يجمعنا. ما كان يُفترض أن يكون حديثاً عابراً تحول إلى ساعات من الألفة والتناغم بعبير زهر البرتقال والياسمين."
      },
      {
        fr: "Au fil des voyages partagés, des défis surmontés et des étoiles contemplées ensemble, notre complicité s'est transformée en une évidence inaltérable. Refki a fait sa demande lors d'un coucher de soleil inoubliable sur les hauteurs de Sidi Bou Saïd.",
        ar: "عبر رحلات لا تُنسى ولحظات تشاركنا فيها الأحلام تحت ضوء النجوم، أضحى حبنا يقيناً راسخاً لا يتزعزع. وجاء طلب رفقي للزواج في مشهد ساحر وقت غروب الشمس على تلال سيدي بوسعيد الخلابة."
      },
      {
        fr: "Aujourd'hui, nous écrivons le plus beau chapitre de notre odyssée et rien ne nous rendrait plus heureux que d'avoir nos proches les plus précieux auprès de nous.",
        ar: "واليوم، نسطر معاً أبهى فصول رحلتنا، ولا تكتمل سعادتنا إلا بوجودكم بجانبنا لنحتفل معاً بهذا اليوم الموعود."
      }
    ],
    quote: {
      fr: "« Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction. »",
      ar: "« الحب لا يعني أن ينظر أحدنا للآخر، بل أن ننظر معاً في نفس الاتجاه. »"
    },
    stats: [
      { value: { fr: "6 Ans", ar: "٦ سنوات" }, label: { fr: "De Bonheur Partagé", ar: "من السعادة المشتركة" } },
      { value: { fr: "14 Pays", ar: "١٤ دولة" }, label: { fr: "Explorés Ensemble", ar: "استكشفناها معاً" } },
      { value: { fr: "1 Promesse", ar: "وعد واحد" }, label: { fr: "Pour Toujours", ar: "إلى الأبد" } }
    ]
  },

  dressCode: {
    badge: { fr: "Code Vestimentaire", ar: "قواعد اللباس" },
    title: { fr: "Élégance & Raffinement", ar: "أناقة وفخامة" },
    subtitle: { fr: "Une harmonie douce et intemporelle pour sublimer cette soirée magique.", ar: "تناغم راقٍ وألوان دافئة لتخليد هذه الليلة الساحرة." },
    tag: { fr: "Tenue Formelle & Élégante", ar: "زي رسمي وأنيق" },
    paletteTitle: { fr: "Palette Chromatique Suggérée", ar: "لوحة الألوان المقترحة" },
    description: {
      fr: "Nous vous invitons à revêtir vos plus belles parures de soirée dans un style Chic & Formel. Afin de créer une atmosphère visuelle douce et poétique, nous vous suggérons de vous inspirer de notre palette d'ivoire, champagne, beige, or poudré et noir élégant.",
      ar: "يسعدنا حضوركم بأبهى حُلل السهرة بأسلوب رسمي وراقٍ. ولإضفاء طابع بصري متناسق وساحر، نقترح عليكم الاستلهام من تدرجات ألواننا الأنيقة: العاجي، الشامبين، البيج، الذهبي والأسود الملكي."
    },
    notes: [
      { fr: "Tenue de soirée formelle ou costume raffiné de rigueur", ar: "يُرجى ارتداء ملابس السهرة الفاخرة أو البدلات الأنيقة" },
      { fr: "Nuances poudrées, ocres et tons naturels vivement appréciés", ar: "تدرجات البيج والذهبي والباستيل تعكس فخامة المناسبة" },
      { fr: "Le blanc pur est délicatement réservé à la mariée", ar: "يُرجى ترك اللون الأبيض الخالص حصرياً لإطلالة العروس" }
    ],
    colors: [
      { name: { fr: "Ivoire Vierge", ar: "عاجي نقي" }, hex: "#FAF8F5", border: "#D8D0C5", textDark: true },
      { name: { fr: "Champagne Doux", ar: "شامبين ناعم" }, hex: "#F3EAD5", border: "#C5BCAE", textDark: true },
      { name: { fr: "Beige Poudré", ar: "بيج بودري" }, hex: "#E7DFD5", border: "#C5BCB0", textDark: true },
      { name: { fr: "Or Satiné", ar: "ذهبي ملكي" }, hex: "#C5A859", border: "#A78C43", textDark: false },
      { name: { fr: "Noir Intense", ar: "أسود كلاسيكي" }, hex: "#1A1816", border: "#3D3934", textDark: false }
    ]
  },

  details: [
    {
      id: "ceremony",
      step: { fr: "Étape 01", ar: "المرحلة الأولى" },
      title: { fr: "La Cérémonie d'Échange", ar: "مراسم عقد القران" },
      subtitle: { fr: "L'Échange des Vœux", ar: "تبادل العهود" },
      time: "18:30",
      location: { fr: "L'Orangerie du Domaine", ar: "حديقة النارنج والزيتون" },
      description: {
        fr: "Sous une voûte d'oliviers et de voilages soyeux, unissons nos destins dans la lumière dorée du couchant.",
        ar: "تحت ظلال أشجار الزيتون العريقة، نشهد اتحاد قلبينا في ضوء الغروب الذهبي الساحر."
      },
      icon: "sparkles"
    },
    {
      id: "dinner",
      step: { fr: "Étape 02", ar: "المرحلة الثانية" },
      title: { fr: "Le Dîner de Prestige", ar: "مأدبة العشاء الملكية" },
      subtitle: { fr: "Voyage Gastronomique", ar: "تجربة طهي رفيعة" },
      time: "20:00",
      location: { fr: "Le Grand Pavillon des Glaces", ar: "القاعة الكبرى للضيافة" },
      description: {
        fr: "Un banquet raffiné aux accords méditerranéens, entouré de bougies, d'arômes nobles et de discours d'amour.",
        ar: "مأدبة فاخرة بأشهى الأطباق المتوسطية على ضوء الشموع الدافئة وأنغام الموسيقى الحالمة."
      },
      icon: "utensils"
    },
    {
      id: "party",
      step: { fr: "Étape 03", ar: "المرحلة الثالثة" },
      title: { fr: "La Nuit Étoilée", ar: "السهرة الاحتفالية" },
      subtitle: { fr: "Danse & Célébration", ar: "فرح ورقص" },
      time: "22:30",
      location: { fr: "L'Amphithéâtre sous les Palmiers", ar: "المسرح المفتوح بين النخيل" },
      description: {
        fr: "La piste s'illumine pour une nuit festive féerique sous le ciel étoilé jusqu'aux premières lueurs de l'aube.",
        ar: "تتألق ساحة الاحتفال بنبض الفرح والموسيقى تحت سماء مرصعة بالنجوم حتى مطلع الفجر."
      },
      icon: "party-popper"
    }
  ],

  schedule: [
    {
      time: "18:00",
      title: { fr: "Accueil & Cocktail de Bienvenue", ar: "استقبال الضيوف وكوكتيل الترحيب" },
      description: { fr: "Rafraîchissements aux fleurs d'oranger, quatuor à cordes et accueil chaleureux.", ar: "مشروبات منعشة بماء الزهر وعزف وتريات حي لاستقبالكم." },
      tag: { fr: "Bienvenue", ar: "ترحيب" }
    },
    {
      time: "18:30",
      title: { fr: "Cérémonie Solennelle", ar: "مراسم عقد القران والوفاء" },
      description: { fr: "Entrée du cortège, lecture des vœux et échange des alliances.", ar: "دخول الموكب، قراءة الفاتحة وتبادل خواتم الزواج." },
      tag: { fr: "Émotion", ar: "عقد القران" }
    },
    {
      time: "19:30",
      title: { fr: "Cocktail d'Or & Photographies", ar: "جلسة التصوير ومقبلات الشرف" },
      description: { fr: "Séances photos souvenir au couchant et bouchées signatures.", ar: "التقاط الصور التذكارية مع العروسين وقت الغروب." },
      tag: { fr: "Partage", ar: "ذكرى" }
    },
    {
      time: "20:30",
      title: { fr: "Dîner de Gala & Toasts", ar: "العشاء الاحتفالي وكلمات التهاني" },
      description: { fr: "Service du menu gastronomique et hommages des familles.", ar: "تقديم مأدبة العشاء وتهاني الأهل والأصدقاء." },
      tag: { fr: "Banquet", ar: "مأدبة" }
    },
    {
      time: "22:15",
      title: { fr: "Pièce Montée & Champagne", ar: "تقطيع كعكة الزفاف وعرض الألعاب" },
      description: { fr: "Découpe du gâteau nuptial illuminé par des cascades d'étincelles dorées.", ar: "قطع كعكة الفرح وسط بريق الشلالات المضيئة." },
      tag: { fr: "Féérie", ar: "بهجة" }
    },
    {
      time: "22:45",
      title: { fr: "Ouverture du Bal & Soirée Dansante", ar: "الرقصة الأولى وانطلاق السهرة" },
      description: { fr: "Première danse des mariés et fête rythmée jusqu'à l'aube.", ar: "الرقصة الأولى للعروسين وأجمل الأغاني حتى الصباح." },
      tag: { fr: "Fête", ar: "سهرة" }
    }
  ],

  gallery: [
    {
      id: "gal-1",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
      alt: { fr: "Meriem & Refki - Moment de complicité", ar: "مريم ورفقي - لحظة مودة" },
      caption: { fr: "Un éclat de rire volé à l'aube d'un jour nouveau.", ar: "ابتسامة فرح عند فجر حياة جديدة ملؤها الأمل." },
      orientation: "portrait"
    },
    {
      id: "gal-2",
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
      alt: { fr: "Décoration florale de mariage de luxe", ar: "تنسيق زهور الزفاف الفاخرة" },
      caption: { fr: "L'art de recevoir : délicatesse des roses et cristal pur.", ar: "جمال الضيافة: سحر الورود النقية وتألق الكريستال." },
      orientation: "landscape"
    },
    {
      id: "gal-3",
      src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
      alt: { fr: "Les mains unies et alliance de fiançailles", ar: "الأيدي المتشابكة وخاتم الزواج" },
      caption: { fr: "Deux mains scellées par une même destinée.", ar: "يدان متشابكتان على عهد الوفاء والمودة." },
      orientation: "square"
    },
    {
      id: "gal-4",
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
      alt: { fr: "Portrait des mariés sous la brise dorée", ar: "صورة العروسين في نسمات الغروب" },
      caption: { fr: "Regard vers un horizon tissé d'amour et de sérénité.", ar: "نظرة إلى أفق نسجه الحب والطمأنينة." },
      orientation: "portrait"
    },
    {
      id: "gal-5",
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
      alt: { fr: "Bouquet délicat de pivoines blanches", ar: "باقة ورد بيضاء ساحرة" },
      caption: { fr: "La pureté des fleurs blanches et du lin champagne.", ar: "نقاء الزهور البيضاء وسحر الحرير والكتان." },
      orientation: "landscape"
    },
    {
      id: "gal-6",
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
      alt: { fr: "Échange de serments intimes au bord de l'eau", ar: "تبادل العهود على ضفاف البحر" },
      caption: { fr: "Une promesse murmurée avec la mer pour témoin.", ar: "وعد بالوفاء والبحر الهادئ خير شاهد." },
      orientation: "portrait"
    }
  ],

  music: {
    title: { fr: "Clair de Lune (Acoustic Reverie)", ar: "ضوء القمر (لحن رومانسي هادئ)" },
    artist: "Orchestre Philharmonique",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-9835.mp3"
  }
};

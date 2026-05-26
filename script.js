// -------------------- Reveal on scroll --------------------
const revealEls = document.querySelectorAll(".reveal");

const revealIO = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add("in-view");
    }
  },
  { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
);

revealEls.forEach((el) => revealIO.observe(el));

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// -------------------- i18n (EN / UK / RU / CS / SK) --------------------
const dict = {
  en: {
    "nav.welcome": "Welcome",
    "nav.colors": "Colors",
    "nav.plan": "Plan",
    "nav.gifts": "Gifts",
    "nav.story": "Our Story",

    "hero.subtitle": "Welcome to our wedding invitation.",
    "hero.date": "Date",
    "hero.city": "City",
    "hero.cityValue": "Praha",
    "hero.ctaPlan": "See the plan",
    "hero.ctaPalette": "Pick a palette",

    "colors.title": "Wedding outfit palette",
    "palette.ourchoice": "Our choice",
    "palette.classy": "Classy colors",

    "plan.title": "The plan and timeline",
    "plan.subtitle": "Here is how our day will unfold.",

    "day1.title": "Wedding Day",
    "day1.subtitle": "Ceremony, photos, and the main celebration.",

    "ceremony.title": "Ceremony place",
    "ceremony.subtitle": "Meeting and ceremony",
    "ceremony.startValue": "12:55 sharp",
    "ceremony.note":
      "Heads up: we really mean 12:55. Late arrivals will walk in during our vows and interrupt the ceremony, so please be on time.",

    "party.title": "Party place",
    "party.subtitle": "Dinner, speeches, and dancing.",
    "party.body":
      "After the ceremony, drive straight here. Drinks, snacks, and a few fun activities will be waiting; it is the perfect time to meet the new family 🙂. The newlyweds will join shortly after the photoshoot.",

    "labels.time": "Time",
    "labels.address": "Address",
    "labels.gather": "Gather",
    "labels.altar": "At the altar",
    "labels.start": "Start",

    "gifts.title": "Gifts & Flowers",
    "gifts.p1":
      "The most precious gift for us on this day is your presence and the joy you share with us 🤍",
    "gifts.p2":
      "If you are thinking about a present, the best gift for us would be a contribution in an envelope; it will help us bring our shared plans and dreams to life.",
    "gifts.p3": "We kindly ask for no bouquets and no alcohol.",
    "gifts.p4": "We do not drink alcohol, and flowers, sadly, fade quickly.",
    "gifts.p5":
      "If you still feel like coming with flowers, you can bring one single flower or a small branch from yourself; anything that reminds you of us. At the end of the day, we will gather them into one shared bouquet, and that will mean something truly special to us.",
    "gifts.p6": "Thank you for understanding 🤍",

    "story.title": "Our story",
    "story.subtitle": "A bit about us",
    "story.howTitle": "How it started",
    "story.text":
      "It started with a Tinder match and a first date at Náplavka: easy laughs, river air, and zero awkwardness. Their first real conversation somehow turned into oatmeal dishes, and Daniel's homemade oatmeal cookies stole the show. Oksana had already seen him baking them on Instagram, and that was the moment her crush turned into something real. And now, two years later, they are celebrating their anniversary in the best way possible: by getting married. Two years full of challenges, fun, love, and adventures, plus an endless collection of oatmeal recipes along the way.",
  },

  uk: {
    "nav.welcome": "Ласкаво просимо",
    "nav.colors": "Кольори",
    "nav.plan": "План",
    "nav.gifts": "Подарунки",
    "nav.story": "Наша історія",

    "hero.subtitle": "Ласкаво просимо на наше весільне запрошення.",
    "hero.date": "Дата",
    "hero.city": "Місто",
    "hero.cityValue": "Прага",
    "hero.ctaPlan": "Дивитися план",
    "hero.ctaPalette": "Обрати палітру",

    "colors.title": "Атмосферна палітра образів",
    "palette.ourchoice": "Наш вибір",
    "palette.classy": "Класичні відтінки",

    "plan.title": "План та розклад",
    "plan.subtitle": "Ось як пройде наш день.",

    "day1.title": "Весілля",
    "day1.subtitle": "Церемонія, фото та головне святкування.",

    "ceremony.title": "Місце церемонії",
    "ceremony.subtitle": "Зустріч і церемонія",
    "ceremony.startValue": "12:55 рівно",
    "ceremony.note":
      "Увага: 12:55 — це справді 12:55. Запізнілі гості зайдуть під час обітниць і перервуть церемонію, тож, будь ласка, не запізнюйтеся.",

    "party.title": "Місце святкування",
    "party.subtitle": "Вечеря, тости та танці.",
    "party.body":
      "Після церемонії їдьте одразу сюди. На вас уже чекатимуть напої, закуски та кілька веселих активностей; це чудова нагода познайомитися з новою сім'єю 🙂. Молодята приєднаються одразу після фотосесії.",

    "labels.time": "Час",
    "labels.address": "Адреса",
    "labels.gather": "Збір",
    "labels.altar": "Біля вівтаря",
    "labels.start": "Початок",

    "gifts.title": "Подарунки та квіти",
    "gifts.p1":
      "Найцінніше для нас у цей день — ваша присутність і радість, яку ви розділяєте з нами 🤍",
    "gifts.p2":
      "Якщо ви плануєте подарунок, для нас найкращим буде внесок у конверті; він допоможе нам у реалізації наших спільних планів і мрій.",
    "gifts.p3": "Просимо не дарувати букети та алкоголь.",
    "gifts.p4": "Алкоголь ми не вживаємо, а квіти, на жаль, швидко в'януть.",
    "gifts.p5":
      "Якщо вам усе ж хочеться прийти з квітами, можна принести одну квітку або гілочку від себе; будь-яку, що у вас асоціюється з нами. Наприкінці дня ми зберемо з них один спільний букет, і це буде для нас особливо цінно.",
    "gifts.p6": "Дякуємо за розуміння 🤍",

    "story.title": "Наша історія",
    "story.subtitle": "Трішки про нас",
    "story.howTitle": "Як усе почалося",
    "story.text":
      "Все почалося з матчу в Tinder і першого побачення на Náplavka: легкі жарти, повітря біля річки і жодної незручності. Їхня перша справжня розмова раптом перейшла на вівсяні страви, а домашнє вівсяне печиво Даніеля стало хітом. Оксана вже бачила в Instagram, як він його пече, і саме тоді її симпатія перетворилася на щось справжнє. А тепер, через два роки, вони святкують річницю найкращим способом: одружуються. Два роки викликів, веселощів, любові й пригод, і нескінченної колекції вівсяних рецептів.",
  },

  ru: {
    "nav.welcome": "Добро пожаловать",
    "nav.colors": "Цвета",
    "nav.plan": "План",
    "nav.gifts": "Подарки",
    "nav.story": "Наша история",

    "hero.subtitle": "Добро пожаловать на наше свадебное приглашение.",
    "hero.date": "Дата",
    "hero.city": "Город",
    "hero.cityValue": "Прага",
    "hero.ctaPlan": "Смотреть план",
    "hero.ctaPalette": "Выбрать палитру",

    "colors.title": "Атмосферная палитра образов",
    "palette.ourchoice": "Наш выбор",
    "palette.classy": "Классические оттенки",

    "plan.title": "План и таймлайн",
    "plan.subtitle": "Вот как пройдёт наш день.",

    "day1.title": "Свадьба",
    "day1.subtitle": "Церемония, фото и главное празднование.",

    "ceremony.title": "Место церемонии",
    "ceremony.subtitle": "Встреча и церемония",
    "ceremony.startValue": "12:55 ровно",
    "ceremony.note":
      "Внимание: 12:55 — это правда 12:55. Опоздавшие зайдут во время клятв и прервут церемонию, поэтому, пожалуйста, не опаздывайте.",

    "party.title": "Место празднования",
    "party.subtitle": "Ужин, тосты и танцы.",
    "party.body":
      "После церемонии езжайте сразу сюда. Вас уже будут ждать напитки, закуски и пара весёлых активностей; отличный повод познакомиться с новой семьёй 🙂. Молодожёны присоединятся сразу после фотосессии.",

    "labels.time": "Время",
    "labels.address": "Адрес",
    "labels.gather": "Сбор",
    "labels.altar": "У алтаря",
    "labels.start": "Начало",

    "gifts.title": "Подарки и цветы",
    "gifts.p1":
      "Самое ценное для нас в этот день — ваше присутствие и разделённая с нами радость 🤍",
    "gifts.p2":
      "Если вы планируете подарок, для нас самым желанным будет вклад в конверте; он поможет нам в реализации наших общих планов и мечт.",
    "gifts.p3": "Просим не дарить букеты и алкоголь.",
    "gifts.p4": "Алкоголь мы не употребляем, а цветы, к сожалению, быстро вянут.",
    "gifts.p5":
      "Если вам всё же хочется прийти с цветами, можно принести один цветок или веточку от себя; любой, который у вас ассоциируется с нами. В конце дня мы соберём из них один общий букет, и это будет для нас особенно ценно.",
    "gifts.p6": "Спасибо за понимание 🤍",

    "story.title": "Наша история",
    "story.subtitle": "Немного о нас",
    "story.howTitle": "С чего всё началось",
    "story.text":
      "Всё началось с матча в Tinder и первого свидания на Náplavka: лёгкие шутки, воздух у реки и ноль неловкости. Их первый настоящий разговор внезапно превратился в обсуждение овсяных блюд, а домашнее овсяное печенье Даниэля стало главным хитом. Оксана уже видела в Instagram, как он его готовит, и именно тогда её симпатия превратилась во что-то настоящее. А теперь, два года спустя, они отмечают годовщину самым лучшим способом: женятся. Два года вызовов, веселья, любви и приключений, и бесконечной коллекции овсяных рецептов.",
  },

  cs: {
    "nav.welcome": "Vítejte",
    "nav.colors": "Barvy",
    "nav.plan": "Program",
    "nav.gifts": "Dary",
    "nav.story": "Náš příběh",

    "hero.subtitle": "Vítejte na našem svatebním pozvání.",
    "hero.date": "Datum",
    "hero.city": "Město",
    "hero.cityValue": "Praha",
    "hero.ctaPlan": "Zobrazit program",
    "hero.ctaPalette": "Vyberte paletu",

    "colors.title": "Paleta svatebního oblečení",
    "palette.ourchoice": "Naše volba",
    "palette.classy": "Elegantní barvy",

    "plan.title": "Program a harmonogram",
    "plan.subtitle": "Takhle bude náš den probíhat.",

    "day1.title": "Svatební den",
    "day1.subtitle": "Obřad, fotky a hlavní oslava.",

    "ceremony.title": "Místo obřadu",
    "ceremony.subtitle": "Setkání a obřad",
    "ceremony.startValue": "12:55 přesně",
    "ceremony.note":
      "Pozor: 12:55 myslíme vážně. Pozdní příchozí vejdou během našich slibů a obřad přeruší, takže prosíme, přijďte včas.",

    "party.title": "Místo oslavy",
    "party.subtitle": "Večeře, přípitky a tanec.",
    "party.body":
      "Po obřadu jeďte rovnou sem. Čekají na vás drinky, občerstvení a pár zábavných aktivit; skvělá příležitost poznat novou rodinu 🙂. Novomanželé se připojí krátce po focení.",

    "labels.time": "Čas",
    "labels.address": "Adresa",
    "labels.gather": "Sraz",
    "labels.altar": "U oltáře",
    "labels.start": "Začátek",

    "gifts.title": "Dary a květiny",
    "gifts.p1":
      "Nejcennějším darem pro nás v tento den je vaše přítomnost a radost, kterou s námi sdílíte 🤍",
    "gifts.p2":
      "Pokud přemýšlíte o dárku, nejlepším darem pro nás by byl příspěvek v obálce; pomůže nám uskutečnit naše společné plány a sny.",
    "gifts.p3": "Prosíme bez kytic a bez alkoholu.",
    "gifts.p4": "Alkohol nepijeme a květiny bohužel rychle uvadají.",
    "gifts.p5":
      "Pokud byste přesto chtěli přijít s květinou, přineste jen jeden květ nebo malou větvičku; cokoli, co vám připomíná nás. Na konci dne je spojíme do jedné společné kytice, a to pro nás bude něco opravdu vzácného.",
    "gifts.p6": "Děkujeme za pochopení 🤍",

    "story.title": "Náš příběh",
    "story.subtitle": "Něco málo o nás",
    "story.howTitle": "Jak to začalo",
    "story.text":
      "Začalo to matchem na Tinderu a prvním rande na Náplavce: lehký smích, vzduch u řeky a nula trapnosti. Jejich první opravdový rozhovor se nějak stočil k jídlům z ovesných vloček a Danielovy domácí ovesné sušenky všechno převálcovaly. Oksana ho už viděla péct na Instagramu, a v tu chvíli se z její sympatie stalo něco opravdového. A teď, o dva roky později, slaví výročí tím nejlepším možným způsobem: berou se. Dva roky plné výzev, zábavy, lásky a dobrodružství, a nekonečné sbírky receptů s ovesnými vločkami.",
  },

  sk: {
    "nav.welcome": "Vitajte",
    "nav.colors": "Farby",
    "nav.plan": "Program",
    "nav.gifts": "Dary",
    "nav.story": "Náš príbeh",

    "hero.subtitle": "Vitajte na našom svadobnom pozvaní.",
    "hero.date": "Dátum",
    "hero.city": "Mesto",
    "hero.cityValue": "Praha",
    "hero.ctaPlan": "Zobraziť program",
    "hero.ctaPalette": "Vyberte paletu",

    "colors.title": "Paleta svadobného oblečenia",
    "palette.ourchoice": "Naša voľba",
    "palette.classy": "Elegantné farby",

    "plan.title": "Program a harmonogram",
    "plan.subtitle": "Takto bude náš deň prebiehať.",

    "day1.title": "Svadobný deň",
    "day1.subtitle": "Obrad, fotky a hlavná oslava.",

    "ceremony.title": "Miesto obradu",
    "ceremony.subtitle": "Stretnutie a obrad",
    "ceremony.startValue": "12:55 presne",
    "ceremony.note":
      "Pozor: 12:55 myslíme vážne. Neskorí príchodzí vojdú počas našich sľubov a obrad prerušia, takže prosíme, príďte načas.",

    "party.title": "Miesto oslavy",
    "party.subtitle": "Večera, prípitky a tanec.",
    "party.body":
      "Po obrade choďte rovno sem. Čakajú na vás drinky, občerstvenie a pár zábavných aktivít; výborná príležitosť spoznať novú rodinu 🙂. Novomanželia sa pripoja krátko po fotení.",

    "labels.time": "Čas",
    "labels.address": "Adresa",
    "labels.gather": "Zraz",
    "labels.altar": "Pri oltári",
    "labels.start": "Začiatok",

    "gifts.title": "Dary a kvety",
    "gifts.p1":
      "Najcennejším darom pre nás v tento deň je vaša prítomnosť a radosť, ktorú s nami zdieľate 🤍",
    "gifts.p2":
      "Ak premýšľate nad darčekom, najlepším darom pre nás by bol príspevok v obálke; pomôže nám uskutočniť naše spoločné plány a sny.",
    "gifts.p3": "Prosíme bez kytíc a bez alkoholu.",
    "gifts.p4": "Alkohol nepijeme a kvety, žiaľ, rýchlo vädnú.",
    "gifts.p5":
      "Ak by ste predsa len chceli prísť s kvetom, prineste len jeden kvet alebo malú vetvičku; čokoľvek, čo vám pripomína nás. Na konci dňa ich spojíme do jednej spoločnej kytice, a to pre nás bude niečo naozaj vzácne.",
    "gifts.p6": "Ďakujeme za pochopenie 🤍",

    "story.title": "Náš príbeh",
    "story.subtitle": "Trochu o nás",
    "story.howTitle": "Ako to začalo",
    "story.text":
      "Začalo to matchom na Tinderi a prvým rande na Náplavke: ľahký smiech, vzduch pri rieke a nula trápnosti. Ich prvý skutočný rozhovor sa nejako stočil k jedlám z ovsených vločiek a Danielove domáce ovsené sušienky všetko prevalcovali. Oksana ho už videla piecť na Instagrame, a v tej chvíli sa z jej sympatie stalo niečo skutočné. A teraz, o dva roky neskôr, oslavujú výročie tým najlepším možným spôsobom: berú sa. Dva roky plné výziev, zábavy, lásky a dobrodružstiev, a nekonečnej zbierky receptov s ovsenými vločkami.",
  },
};

function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved && dict[saved]) return saved;

  const n = (navigator.language || "en").toLowerCase();
  if (n.startsWith("uk")) return "uk";
  if (n.startsWith("ru")) return "ru";
  if (n.startsWith("cs")) return "cs";
  if (n.startsWith("sk")) return "sk";
  return "en";
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value =
      (dict[lang] && dict[lang][key]) || (dict.en && dict.en[key]) || "";
    if (value) el.textContent = value;
  });

  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

applyLang(detectLang());

// -------------------- Mobile menu (hamburger) --------------------
(() => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  }

  toggle.addEventListener("click", () => {
    setOpen(!menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) setOpen(false);
  });
})();

// -------------------- Fireworks: hearts + petals (WELCOME ONLY) --------------------
(() => {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return;

  const hero = document.getElementById("welcome");
  const canvas = document.getElementById("heroFx");
  if (!hero || !canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });

  // Soft wedding palette for heart bursts (warm pinks, peach, cream, sky)
  const HEART_COLORS = [
    "#F2A7B5",
    "#FFD7E0",
    "#F6BFC9",
    "#FFC9A8",
    "#FFE4CC",
    "#B9DCFF",
  ];

  // Petal colors (softer, more pastel)
  const PETAL_COLORS = [
    ["#FFD7E0", "#F2A7B5"],
    ["#FFE4CC", "#F6BFA0"],
    ["#FFF1F3", "#F2C2CC"],
    ["#E9D7FF", "#C9B0E8"],
  ];

  const isMobile =
    window.matchMedia("(max-width: 720px)").matches || "ontouchstart" in window;

  const SETTINGS = {
    burstEveryMs: isMobile ? 2600 : 2000,
    heartCount: isMobile ? 90 : 130,
    heartScale: { min: isMobile ? 1.8 : 2.4, max: isMobile ? 2.8 : 3.8 },
    heartLife: { min: 2.2, max: 3.4 },
    heartGravity: { min: 12, max: 22 },
    glowMul: isMobile ? 3.8 : 4.5,
    petalEveryMs: isMobile ? 700 : 500,
    petalFall: { min: 18, max: 36 },
    petalLife: { min: 8, max: 14 },
    fadeAlpha: isMobile ? 0.055 : 0.045,
  };

  const hearts = [];
  const petals = [];
  const MAX_HEARTS = isMobile ? 500 : 900;
  const MAX_PETALS = isMobile ? 30 : 50;

  let running = false;
  let rafId = 0;
  let lastBurstAt = 0;
  let lastPetalAt = 0;
  let lastFrameAt = 0;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  function pick(arr) {
    return arr[(Math.random() * arr.length) | 0];
  }

  function resizeToHero() {
    const r = hero.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    canvas.width = Math.floor(r.width * dpr);
    canvas.height = Math.floor(r.height * dpr);
    canvas.style.width = r.width + "px";
    canvas.style.height = r.height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resizeToHero);
  resizeToHero();

  function hexToRgba(hex, a) {
    const h = hex.replace("#", "");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${Math.max(0, Math.min(1, a))})`;
  }

  // Heart parametric (math y is positive at point; canvas y is positive down, so heart tip points down naturally)
  function heartPoint(t) {
    const s = Math.sin(t);
    const x = 16 * s * s * s;
    const y =
      -(13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t));
    return { x, y };
  }

  function heartBurst(cx, cy) {
    const count = SETTINGS.heartCount;
    const baseColor = pick(HEART_COLORS);
    const scale = rand(SETTINGS.heartScale.min, SETTINGS.heartScale.max);
    // velocity multiplier so the heart shape is clearly visible early
    const velMul = 7;

    for (let i = 0; i < count; i++) {
      // small jitter on t prevents perfect circle look; tiny radial spread keeps heart shape
      const t = (i / count) * Math.PI * 2 + rand(-0.02, 0.02);
      const p = heartPoint(t);
      const vx = p.x * scale * velMul;
      const vy = p.y * scale * velMul;

      hearts.push({
        x: cx,
        y: cy,
        vx,
        vy,
        drag: rand(0.985, 0.992),
        g: rand(SETTINGS.heartGravity.min, SETTINGS.heartGravity.max),
        r: rand(1.8, 3.2),
        life: rand(SETTINGS.heartLife.min, SETTINGS.heartLife.max),
        maxLife: SETTINGS.heartLife.max,
        color: Math.random() < 0.25 ? pick(HEART_COLORS) : baseColor,
      });
    }

    if (hearts.length > MAX_HEARTS) {
      hearts.splice(0, hearts.length - MAX_HEARTS);
    }
  }

  function spawnPetal(w) {
    const colors = pick(PETAL_COLORS);
    petals.push({
      x: rand(-20, w + 20),
      y: rand(-40, -10),
      vy: rand(SETTINGS.petalFall.min, SETTINGS.petalFall.max),
      sway: rand(8, 22), // px amplitude
      swaySpeed: rand(0.6, 1.4), // rad/sec
      phase: rand(0, Math.PI * 2),
      rot: rand(0, Math.PI * 2),
      rotSpeed: rand(-0.8, 0.8),
      r: rand(5, 10),
      colorLight: colors[0],
      colorDark: colors[1],
      life: rand(SETTINGS.petalLife.min, SETTINGS.petalLife.max),
      maxLife: SETTINGS.petalLife.max,
      age: 0,
    });

    if (petals.length > MAX_PETALS) {
      petals.splice(0, petals.length - MAX_PETALS);
    }
  }

  function drawHeartGlow(x, y, r, color, alpha) {
    const glowR = r * SETTINGS.glowMul;
    const g = ctx.createRadialGradient(x, y, 0, x, y, glowR);
    g.addColorStop(0, hexToRgba(color, alpha * 0.45));
    g.addColorStop(0.3, hexToRgba(color, alpha * 0.15));
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, glowR, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    const fade =
      p.age < 1
        ? p.age
        : p.life < 2
        ? Math.max(0, p.life / 2)
        : 1;
    ctx.globalAlpha = 0.85 * fade;

    const grad = ctx.createLinearGradient(0, -p.r * 1.5, 0, p.r * 1.5);
    grad.addColorStop(0, p.colorLight);
    grad.addColorStop(1, p.colorDark);
    ctx.fillStyle = grad;

    // petal: rounded oval, slightly pointed
    ctx.beginPath();
    ctx.ellipse(0, 0, p.r * 0.55, p.r * 1.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // subtle inner highlight
    ctx.globalAlpha = 0.35 * fade;
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.beginPath();
    ctx.ellipse(-p.r * 0.15, -p.r * 0.4, p.r * 0.18, p.r * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
    ctx.globalAlpha = 1;
  }

  function step(now) {
    if (!running) return;

    const w = hero.clientWidth;
    const h = hero.clientHeight;

    const dt = Math.min(
      0.033,
      Math.max(0.008, (now - (lastFrameAt || now)) / 1000)
    );
    lastFrameAt = now;

    // soft trail fade
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = `rgba(0,0,0,${SETTINGS.fadeAlpha})`;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "source-over";

    // schedule heart burst
    if (now - lastBurstAt > SETTINGS.burstEveryMs + rand(-300, 400)) {
      lastBurstAt = now;
      const cx = rand(w * 0.22, w * 0.78);
      const cy = rand(h * 0.18, h * 0.5);
      heartBurst(cx, cy);
    }

    // schedule petal spawn
    if (now - lastPetalAt > SETTINGS.petalEveryMs + rand(-150, 200)) {
      lastPetalAt = now;
      spawnPetal(w);
    }

    // --- Draw hearts with additive glow ---
    ctx.globalCompositeOperation = "lighter";
    for (let i = hearts.length - 1; i >= 0; i--) {
      const p = hearts[i];

      p.vx *= Math.pow(p.drag, dt * 60);
      p.vy *= Math.pow(p.drag, dt * 60);
      p.vy += p.g * dt;

      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;

      const a = Math.max(0, p.life / p.maxLife);

      drawHeartGlow(p.x, p.y, p.r, p.color, a);
      ctx.globalAlpha = a * 0.85;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      if (
        p.life <= 0 ||
        p.x < -200 ||
        p.x > w + 200 ||
        p.y < -200 ||
        p.y > h + 200
      ) {
        hearts.splice(i, 1);
      }
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    // --- Draw petals (normal blending) ---
    for (let i = petals.length - 1; i >= 0; i--) {
      const p = petals[i];

      p.age += dt;
      p.life -= dt;
      p.rot += p.rotSpeed * dt;

      const swayOffset =
        Math.sin(p.phase + p.age * p.swaySpeed) * p.sway * dt;
      p.x += swayOffset;
      p.y += p.vy * dt;

      drawPetal(p);

      if (p.life <= 0 || p.y > h + 60) {
        petals.splice(i, 1);
      }
    }

    rafId = requestAnimationFrame(step);
  }

  function start() {
    if (running) return;
    running = true;
    resizeToHero();
    lastBurstAt = performance.now() - (SETTINGS.burstEveryMs - 400);
    lastPetalAt = performance.now() - 400;
    lastFrameAt = 0;
    ctx.clearRect(0, 0, hero.clientWidth, hero.clientHeight);
    rafId = requestAnimationFrame(step);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
    hearts.length = 0;
    petals.length = 0;
    ctx.clearRect(0, 0, hero.clientWidth, hero.clientHeight);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
  });

  const heroIO = new IntersectionObserver(
    (entries) => {
      const on = entries.some((e) => e.isIntersecting);
      if (on) start();
      else stop();
    },
    { threshold: isMobile ? 0.2 : 0.3 }
  );

  heroIO.observe(hero);
})();

// -------------------- Dress lightbox --------------------
(() => {
  const lb = document.getElementById("lightbox");
  if (!lb) return;

  const img = lb.querySelector(".lightbox__img");
  const closeBtn = lb.querySelector(".lightbox__close");

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "Preview";
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    img.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll('[data-lightbox="dress"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-src");
      const alt = btn.querySelector("img")?.alt || "";
      if (src) open(src, alt);
    });
  });

  closeBtn?.addEventListener("click", close);

  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
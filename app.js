/**
 * MuzaffarZed Media Portal — Asosiy Dvigatel (Engine)
 * Muallif: MuzaffarZed
 * Standart: Zero-Beta, Zero-Defect, High-End Performance
 */

// ==================== STANDART BOSHLANG'ICH MA'LUMOTLAR BAZASI ====================
const DEFAULT_MOVIES = [
  {
    id: "m1",
    title: "Yulduzlararo Sayohat: Koinot Sirlari",
    category: "premyera",
    year: 2026,
    quality: "4K UHD",
    dubbing: "O'zbekcha Dublyaj",
    rating: 9.2,
    views: 18450,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "Insoniyat kelajagi xavf ostida qolgan davrda, yangi sivilizatsiya o'chog'ini izlab olis galaktikalarga yo'l olgan jasur ekspeditsiyaning hayratlanarli va dramatik sarguzashtlari.",
    country: "AQSH / O'zbekiston",
    duration: "2 soat 24 daqiqa",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: "m2",
    title: "Kiber Shahar: 2099",
    category: "premyera",
    year: 2026,
    quality: "4K UHD",
    dubbing: "O'zbekcha Dublyaj",
    rating: 8.9,
    views: 14200,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1920&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "Sun'iy intellekt va robotlar boshqaruviga o'tgan megapolisda adolat izlagan so'nggi insoniy detektivning xavfli sarguzashti.",
    country: "Janubiy Koreya / AQSH",
    duration: "2 soat 10 daqiqa",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: "m3",
    title: "Alpomish: Afsona Qaytishi",
    category: "dublyaj",
    year: 2025,
    quality: "1080p Full HD",
    dubbing: "O'zbekcha Original",
    rating: 9.4,
    views: 31000,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Milliy qahramonimiz Alpomish haqidagi buyuk dostonning eng zamonaviy vizual effektlar va epik jang sahnalari bilan boyitilgan yangi talqini.",
    country: "O'zbekiston",
    duration: "2 soat 35 daqiqa",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "m4",
    title: "Okean Tubi Sirlari",
    category: "jahon",
    year: 2025,
    quality: "4K UHD",
    dubbing: "O'zbekcha Dublyaj",
    rating: 8.7,
    views: 9800,
    poster: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "Mariana chuqurligida yashiringan qadimiy sivilizatsiya va noma'lum jonzotlar bilan to'qnash kelgan suvosti ilmiy ekspeditsiyasi.",
    country: "Buyuk Britaniya",
    duration: "1 soat 58 daqiqa",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "m5",
    title: "Qora Ritsar: Soya Ichida",
    category: "dublyaj",
    year: 2026,
    quality: "4K UHD",
    dubbing: "O'zbekcha Dublyaj",
    rating: 9.1,
    views: 22100,
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "Shahar zulmatga botganda va qonun ojiz qolganda, niqobli qasoskor adolatni o'z qo'liga oladi.",
    country: "AQSH",
    duration: "2 soat 20 daqiqa",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: "m6",
    title: "Vaqt Halqasi (Serial)",
    category: "serial",
    year: 2026,
    quality: "1080p Full HD",
    dubbing: "O'zbekcha Dublyaj",
    rating: 8.8,
    views: 16700,
    poster: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1920&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "Har kuni bir xil voqealar ichida uyg'onadigan va dunyoni qutqarish uchun barcha ehtimollarni hisoblab chiqishi kerak bo'lgan fizik olimning sirli qissasi.",
    country: "Germaniya / O'zbekiston",
    duration: "1-mavsum • 8 qism",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  },
  {
    id: "m7",
    title: "Sahro Hukmdorlari: Qum Shamoli",
    category: "jahon",
    year: 2025,
    quality: "4K UHD",
    dubbing: "O'zbekcha Dublyaj",
    rating: 9.0,
    views: 19400,
    poster: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description: "Keng qumli sahrolar bag'rida yashiringan bebaho resurslar ustidan hukmronlik qilish uchun kechgan yirik sulolalar to'qnashuvi.",
    country: "Kanada / Fransiya",
    duration: "2 soat 45 daqiqa",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
  },
  {
    id: "m8",
    title: "Samoviy Qanotlar",
    category: "premyera",
    year: 2026,
    quality: "1080p Full HD",
    dubbing: "O'zbekcha Dublyaj",
    rating: 8.6,
    views: 11200,
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "Tovushdan tez uchar samolyot sinovchilari va osmon bag'rida yuz bergan kutilmagan favqulodda vaziyat haqida qiziqarli drama.",
    country: "AQSH",
    duration: "2 soat 05 daqiqa",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  }
];

const DEFAULT_TRACKS = [
  {
    id: "t1",
    title: "Koinot Sadolari (Cosmic Echoes)",
    artist: "MuzaffarZed & Sound Wave",
    duration: "03:45",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80",
    audioUrl: "https://actions.google.com/sounds/v1/science_fiction/alien_beacon.ogg"
  },
  {
    id: "t2",
    title: "Yulduzli Tunlar (Midnight Chill)",
    artist: "MuzaffarZed Instrumental",
    duration: "04:12",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80",
    audioUrl: "https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"
  },
  {
    id: "t3",
    title: "Samoviy Shamol (Solar Wind)",
    artist: "Ambient Electronic Lab",
    duration: "03:20",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80",
    audioUrl: "https://actions.google.com/sounds/v1/weather/wind_arctic_howl.ogg"
  },
  {
    id: "t4",
    title: "Kiber Ritm (Cyber Pulse 2026)",
    artist: "Synthwave Master",
    duration: "03:55",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&q=80",
    audioUrl: "https://actions.google.com/sounds/v1/science_fiction/teleport_arrival.ogg"
  }
];

const DEFAULT_PHOTOS = [
  {
    id: "p1",
    title: "Koinotdagi Neon Yulduzlar",
    category: "San'at",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
  },
  {
    id: "p2",
    title: "Kiber Megapolis Kechasi",
    category: "Texnologiya",
    url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80"
  },
  {
    id: "p3",
    title: "Moviy Tungi Dengiz",
    category: "Tabiat",
    url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
  },
  {
    id: "p4",
    title: "Kinematografik Chiroqlar",
    category: "Kino",
    url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80"
  }
];

const DEFAULT_ARTICLES = [
  {
    id: "a1",
    title: "2026-Yilda Kinematografiya va Sun'iy Intellektning Integratsiyasi",
    category: "Texnologiya",
    date: "18-Oktyabr, 2026",
    readTime: "4 daqiqa",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    content: "Kino sanoati yangi eraga qadam qo'ydi. 4K va 8K o'ta yuqori aniqlikdagi kadrlar, real vaqt rejimida generatsiya qilinadigan virtual kaskadyorlar va neyron ovoz dublyajlari endi afsona emas, balki kundalik reallikdir. MuzaffarZed Media Portali ushbu texnologik inqilobning barcha qulayliklarini bitta platformada birlashtiradi."
  },
  {
    id: "a2",
    title: "Nima Uchun Uzmovi va Aslmedia O'zbekistonda Bunchalik Mashhur?",
    category: "Tahlil",
    date: "16-Oktyabr, 2026",
    readTime: "3 daqiqa",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    content: "O'zbek tomoshabinlarining eng katta talabi — sifatli o'zbekcha dublyaj, tezkor serverlar va ortiqcha to'siqlarsiz erkin kino tomosha qilish imkoniyatidir. Biz yaratgan MuzaffarZed portali esa bu standartlarni yanada yuqori cho'qqiga olib chiqib, nafaqat kinolar, balki musiqa va fotosuratlarni ham qamrab oladi."
  },
  {
    id: "a3",
    title: "Mukammal Ovoz Tajribasi: Lossless va 3D Audio",
    category: "Musiqa",
    date: "12-Oktyabr, 2026",
    readTime: "5 daqiqa",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    content: "Ovoz chastotalari to'g'ri sozlanganida inson ongiga qanday ta'sir qiladi? Ekvayzerning 10+ polosasi, pastki chastotalar (sub-bass) va kristaldek toza vokal nafaqat musiqadan zavq beradi, balki stressni kamaytiradi."
  }
];

const DEFAULT_USERS = [
  {
    id: "u_master",
    username: "MuzaffarZed",
    name: "MuzaffarZed",
    password: "MuzaffarZed2026",
    bio: "Bosh Dasturiy Arxitektor, Kreator va Platforma Asoschisi",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80",
    role: "master_admin",
    isVerified: true,
    subscribers: 2840
  },
  {
    id: "u_apk_world",
    username: "android_pro",
    name: "Android & Mod APKs",
    password: "123",
    bio: "Eng sara Android ilovalar, mod APK va o'yinlar bazasi",
    avatar: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=150&q=80",
    role: "creator",
    isVerified: true,
    subscribers: 980
  },
  {
    id: "u_cinema_hub",
    username: "uz_cinema",
    name: "UzCinema Dubbing",
    password: "123",
    bio: "O'zbek tilidagi eng yangi va sara premyeralar studiyasi",
    avatar: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=150&q=80",
    role: "creator",
    isVerified: true,
    subscribers: 1420
  }
];

const DEFAULT_SOFTWARE = [
  {
    id: "soft_1",
    title: "CapCut Pro Video Montaj",
    os: "android",
    version: "v12.4.0",
    size: "185 MB",
    category: "Video Montaj",
    downloads: 4200,
    icon: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=150&q=80",
    downloadUrl: "https://download.capcut.com/android",
    author: "MuzaffarZed",
    authorId: "u_master",
    privacy: "public",
    description: "60 FPS 4K montaj, dinamik subtitrlar va barcha VIP effektlar ochiq bo'lgan versiya."
  },
  {
    id: "soft_2",
    title: "Telegram Desktop (Super Pro)",
    os: "windows",
    version: "v5.2.1",
    size: "42 MB",
    category: "Messendjer",
    downloads: 8900,
    icon: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=150&q=80",
    downloadUrl: "https://desktop.telegram.org/",
    author: "MuzaffarZed",
    authorId: "u_master",
    privacy: "public",
    description: "Tezkor, qulay va cheklovlarsiz ko'p akkauntli Windows Telegram mijozi."
  },
  {
    id: "soft_3",
    title: "Visual Studio Code (Ultra)",
    os: "windows",
    version: "v1.92",
    size: "95 MB",
    category: "Dasturlash",
    downloads: 3100,
    icon: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&q=80",
    downloadUrl: "https://code.visualstudio.com/",
    author: "MuzaffarZed",
    authorId: "u_master",
    privacy: "public",
    description: "Dasturchilar uchun eng qudratli kod muharriri, AI kengaytmalari bilan."
  },
  {
    id: "soft_4",
    title: "VLC Media Player 4K",
    os: "windows",
    version: "v3.0.21",
    size: "40 MB",
    category: "Media Player",
    downloads: 6500,
    icon: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&q=80",
    downloadUrl: "https://www.videolan.org/vlc/",
    author: "MuzaffarZed",
    authorId: "u_master",
    privacy: "public",
    description: "Har qanday audio va video formatni qotmasdan ochuvchi universal pleyer."
  },
  {
    id: "soft_5",
    title: "Poweramp Music Player Full",
    os: "android",
    version: "v981",
    size: "18 MB",
    category: "Audio Pleyer",
    downloads: 5120,
    icon: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&q=80",
    downloadUrl: "https://powerampapp.com/",
    author: "android_pro",
    authorId: "u_apk_world",
    privacy: "public",
    description: "Eng kuchli ekvayzer, Hi-Res 24-bit audio va silliq ovoz dvigateli."
  },
  {
    id: "soft_6",
    title: "Python 3.12 Enterprise Runtime",
    os: "cross",
    version: "v3.12.5",
    size: "25 MB",
    category: "Dasturlash / AI",
    downloads: 7300,
    icon: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=150&q=80",
    downloadUrl: "https://www.python.org/downloads/",
    author: "MuzaffarZed",
    authorId: "u_master",
    privacy: "public",
    description: "Sun'iy intellekt, neyrotarmoqlar va avtomatlashtirish uchun rasmiy dvigatel."
  }
];

// ==================== LOCALSTORAGE BILAN ISHLASH (PERSISTENCE) ====================
function getStoredData(key, fallback) {
  try {
    const data = localStorage.getItem("muzaffarzed_" + key);
    return data ? JSON.parse(data) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setStoredData(key, value) {
  try {
    localStorage.setItem("muzaffarzed_" + key, JSON.stringify(value));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

let movies = getStoredData("movies", DEFAULT_MOVIES);
let tracks = getStoredData("tracks", DEFAULT_TRACKS);
let photos = getStoredData("photos", DEFAULT_PHOTOS);
let articles = getStoredData("articles", DEFAULT_ARTICLES);
let favorites = getStoredData("favorites", ["m1", "m3"]);
let users = getStoredData("users", DEFAULT_USERS);
let currentUser = getStoredData("currentUser", DEFAULT_USERS[0]);
let softwareList = getStoredData("softwareList", DEFAULT_SOFTWARE);
let userSubscriptions = getStoredData("userSubscriptions", ["u_master"]);
let currentSoftwareFilter = "all";

// ==================== LEGO PLATFORMA BLOKLARI (MODULAR SYSTEM) ====================
const DEFAULT_LEGO_BLOCKS = [
  { id: "lego_hero", name: "Premyera Hero 4K", icon: "fa-solid fa-star", visible: true, size: "full", height: "auto", color: "emerald" },
  { id: "lego_filters", name: "Janrlar & Saralash", icon: "fa-solid fa-filter", visible: true, size: "full", height: "auto", color: "cyan" },
  { id: "kinolar", name: "Kinolar & Seriallar", icon: "fa-solid fa-film", visible: true, size: "full", height: "auto", color: "emerald" },
  { id: "musiqa", name: "Musiqa & Sound Lab", icon: "fa-solid fa-music", visible: true, size: "half", height: "auto", color: "cyan" },
  { id: "dasturlar", name: "Dasturlar & APK Hub", icon: "fa-solid fa-cube", visible: true, size: "half", height: "auto", color: "blue" },
  { id: "kanallar", name: "Ochiq Kanallar & Kreatorlar", icon: "fa-solid fa-bullhorn", visible: true, size: "half", height: "auto", color: "ruby" },
  { id: "galereya", name: "Fotogalereya", icon: "fa-solid fa-images", visible: true, size: "half", height: "auto", color: "purple" },
  { id: "maqolalar", name: "Maqolalar & Kiber-Blog", icon: "fa-solid fa-newspaper", visible: true, size: "full", height: "auto", color: "gold" },
  { id: "lego_stats", name: "Jonli Telemetriya", icon: "fa-solid fa-chart-pie", visible: true, size: "third", height: "auto", color: "cyan" },
  { id: "lego_quicklinks", name: "Tezkor Launchpad", icon: "fa-solid fa-rocket", visible: true, size: "third", height: "auto", color: "emerald" },
  { id: "lego_notes", name: "Kiber-Eslatmalar", icon: "fa-solid fa-note-sticky", visible: true, size: "third", height: "auto", color: "gold" }
];

let legoBlocks = getStoredData("lego_layout", DEFAULT_LEGO_BLOCKS);

// Agar yangi bloklar qo'shilgan bo'lsa, xotiradagini avto-yangilash
(function ensureLegoIntegrity() {
  const existingMap = new Map(legoBlocks.map(b => [b.id, b]));
  DEFAULT_LEGO_BLOCKS.forEach(def => {
    if (!existingMap.has(def.id)) {
      legoBlocks.push({ ...def });
    } else {
      const current = existingMap.get(def.id);
      if (!current.size) current.size = def.size;
      if (!current.color) current.color = def.color;
      if (!current.height) current.height = def.height || "auto";
    }
  });
})();

let movieComments = getStoredData("comments", {
  "m1": [
    { author: "Sardor", text: "Dublyajiga gap yo'q, ovozlar juda zo'r tushgan!", time: "2 soat oldin" },
    { author: "Alisher", text: "4K sifati qotmasdan ochildi, serverga besh ketdim!", time: "Kechagina" }
  ]
});

// ==================== STATE VA GLOBALLAR ====================
let currentFilter = "all";
let currentSort = "newest";
let currentTrackIndex = 0;
let isAudioPlaying = false;
let currentMovie = null;

const globalAudio = document.getElementById("globalAudioPlayer");
const bottomPlayer = document.getElementById("bottomMusicPlayer");

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  renderUserAccount();
  renderMovies();
  renderTracks();
  renderSoftware();
  renderGallery();
  renderChannels();
  renderArticles();
  updateFavBadge();
  setupAudioEvents();
  setupSearchEvents();
  applyLegoLayout();
  loadLegoQuickNote();
});

// ==================== 1. KINOLARNI CHIQARISH (RENDER MOVIES) ====================
function renderMovies() {
  const container = document.getElementById("moviesGrid");
  const countBadge = document.getElementById("moviesCount");
  container.innerHTML = "";

  let filtered = [...movies];

  // Maxfiylik filtri (Ommaviy vs Shaxsiy)
  if (currentFilter === "private_vault") {
    filtered = filtered.filter(m => m.privacy === "private" && currentUser && m.authorId === currentUser.id);
  } else {
    filtered = filtered.filter(m => m.privacy !== "private" || (currentUser && m.authorId === currentUser.id));
  }

  // Kategoriya filtri
  if (currentFilter === "favorites") {
    filtered = filtered.filter(m => favorites.includes(m.id));
  } else if (currentFilter !== "all") {
    filtered = filtered.filter(m => m.category === currentFilter);
  }

  // Qidiruv
  const query = document.getElementById("globalSearchInput").value.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(m => 
      m.title.toLowerCase().includes(query) || 
      m.description.toLowerCase().includes(query) ||
      m.country.toLowerCase().includes(query)
    );
  }

  // Saralash
  if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === "views") {
    filtered.sort((a, b) => b.views - a.views);
  } else {
    filtered.sort((a, b) => b.year - a.year);
  }

  countBadge.textContent = `${filtered.length} ta film`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400">
        <i class="fa-solid fa-film text-4xl mb-3 text-slate-600"></i>
        <p class="text-sm font-semibold">Hech qanday film topilmadi.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(movie => {
    const isFav = favorites.includes(movie.id);
    const card = document.createElement("div");
    card.className = "movie-card cursor-pointer group";
    card.onclick = () => openCinemaModal(movie.id);

    card.innerHTML = `
      <div class="movie-poster-wrap">
        <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
        <div class="movie-overlay">
          <div class="flex items-center justify-between w-full">
            <span class="badge-quality">${movie.quality}</span>
            <button onclick="event.stopPropagation(); toggleFavorite('${movie.id}')" class="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-rose-600/90 flex items-center justify-center text-xs transition ${isFav ? 'text-rose-500' : 'text-slate-300'}">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
          </div>
          <div class="play-hover-btn">
            <i class="fa-solid fa-play text-xl ml-1"></i>
          </div>
          <div class="space-y-1">
            <span class="badge-dub">${movie.dubbing}</span>
          </div>
        </div>
      </div>
      <div class="p-3 bg-slate-900/90">
        <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1">
          <span>${movie.year}</span>
          <span class="flex items-center gap-1 text-amber-400 font-bold">
            <i class="fa-solid fa-star text-[10px]"></i> ${movie.rating}
          </span>
        </div>
        <h3 class="text-xs sm:text-sm font-bold text-white truncate group-hover:text-emerald-400 transition" title="${movie.title}">
          ${movie.title}
        </h3>
        <p class="text-[11px] text-slate-400 truncate mt-0.5">${movie.country} • ${movie.duration}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// ==================== KINO PLEYER MODAL ====================
function openCinemaModal(movieId) {
  const movie = movies.find(m => m.id === movieId);
  if (!movie) return;

  currentMovie = movie;
  movie.views += 1;
  setStoredData("movies", movies);

  document.getElementById("modalMovieTitle").textContent = movie.title;
  document.getElementById("modalQuality").textContent = movie.quality;
  document.getElementById("modalYear").textContent = movie.year;
  document.getElementById("modalCountry").textContent = movie.country;
  document.getElementById("modalGenre").textContent = movie.dubbing;
  document.getElementById("modalDuration").textContent = movie.duration;
  document.getElementById("modalRating").textContent = movie.rating;
  document.getElementById("modalViews").textContent = movie.views.toLocaleString();
  document.getElementById("modalDescription").textContent = movie.description;

  document.getElementById("download1080").href = movie.downloadUrl || movie.videoUrl;
  document.getElementById("download720").href = movie.downloadUrl || movie.videoUrl;

  const html5Player = document.getElementById("html5VideoPlayer");
  const iframePlayer = document.getElementById("iframeVideoPlayer");
  const videoSource = document.getElementById("videoSource");

  // YouTube yoki Iframe havolani tekshirish
  if (movie.videoUrl.includes("youtube.com") || movie.videoUrl.includes("youtu.be") || movie.videoUrl.includes("embed")) {
    html5Player.classList.add("hidden");
    html5Player.pause();
    iframePlayer.classList.remove("hidden");
    let embedUrl = movie.videoUrl;
    if (movie.videoUrl.includes("watch?v=")) {
      embedUrl = movie.videoUrl.replace("watch?v=", "embed/");
    } else if (movie.videoUrl.includes("youtu.be/")) {
      embedUrl = movie.videoUrl.replace("youtu.be/", "www.youtube.com/embed/");
    }
    iframePlayer.src = embedUrl;
  } else {
    iframePlayer.classList.add("hidden");
    iframePlayer.src = "";
    html5Player.classList.remove("hidden");
    videoSource.src = movie.videoUrl;
    html5Player.poster = movie.backdrop || movie.poster;
    html5Player.load();
  }

  // Oxirgi ko'rgan joyidan davom ettirish (Auto-Resume)
  const savedTime = localStorage.getItem("muzaffarzed_resume_" + movie.id);
  if (savedTime && parseFloat(savedTime) > 5) {
    html5Player.currentTime = parseFloat(savedTime);
  }

  html5Player.ontimeupdate = () => {
    if (html5Player.currentTime > 5) {
      localStorage.setItem("muzaffarzed_resume_" + movie.id, html5Player.currentTime);
    }
  };

  renderComments(movie.id);

  const modal = document.getElementById("cinemaModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("modal-active");
}

function closeCinemaModal() {
  const modal = document.getElementById("cinemaModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.classList.remove("modal-active");

  const html5Player = document.getElementById("html5VideoPlayer");
  html5Player.pause();
  document.getElementById("iframeVideoPlayer").src = "";
  toggleCinemaMode(false);
}

// Kadrdan Rasm Olish (Screenshot capture)
function captureVideoFrame() {
  const video = document.getElementById("html5VideoPlayer");
  if (!video || (video.paused && video.currentTime === 0)) {
    alert("Iltimos, avval videoni ijro eting!");
    return;
  }
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth || 1920;
  canvas.height = video.videoHeight || 1080;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Flash vizual effekti
  const container = document.getElementById("videoPlayerContainer");
  const flash = document.createElement("div");
  flash.className = "flash-screen";
  container.appendChild(flash);
  setTimeout(() => flash.remove(), 400);

  // Avtomatik yuklab olish
  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  const safeName = (currentMovie ? currentMovie.title : "Kadr").replace(/[^a-zA-Z0-9]/g, "_");
  a.download = `MuzaffarZed_${safeName}_${Math.floor(video.currentTime)}s.png`;
  a.click();
}

// Picture-in-Picture (Suzuvchi mini-oyna)
function togglePiP() {
  const video = document.getElementById("html5VideoPlayer");
  if (!document.pictureInPictureElement) {
    if (video.requestPictureInPicture) {
      video.requestPictureInPicture().catch(() => {});
    }
  } else {
    document.exitPictureInPicture().catch(() => {});
  }
}

// 10 soniya oldinga/orqaga o'tkazish
function skipVideo(seconds) {
  const video = document.getElementById("html5VideoPlayer");
  if (video) {
    video.currentTime = Math.max(0, video.currentTime + seconds);
  }
}

// Video Ijro Tezligini Sozlash
function changeVideoSpeed(speed) {
  const video = document.getElementById("html5VideoPlayer");
  if (video) {
    video.playbackRate = parseFloat(speed);
  }
}

// Chiroqni o'chirish (Cinema Mode)
function toggleCinemaMode(force) {
  const overlay = document.getElementById("cinemaOverlay");
  const modal = document.getElementById("cinemaModal");
  if (force !== undefined) {
    if (force) overlay.classList.add("active");
    else overlay.classList.remove("active");
  } else {
    overlay.classList.toggle("active");
  }
}

// Hero bannerdagi kinoni ko'rish
function playHeroMovie() {
  openCinemaModal("m1");
}

function playHeroTrailer() {
  const heroMovie = movies.find(m => m.id === "m1");
  if (heroMovie && heroMovie.trailerUrl) {
    openCinemaModal("m1");
    const html5Player = document.getElementById("html5VideoPlayer");
    const videoSource = document.getElementById("videoSource");
    videoSource.src = heroMovie.trailerUrl;
    html5Player.load();
    html5Player.play();
  }
}

function toggleHeroFavorite() {
  toggleFavorite("m1");
  const heroFavBtn = document.getElementById("heroFavBtn");
  const isFav = favorites.includes("m1");
  heroFavBtn.innerHTML = `<i class="${isFav ? 'fa-solid text-rose-500' : 'fa-regular'} fa-heart text-lg"></i>`;
}

// ==================== SHARHLAR / FIKRLAR ====================
function renderComments(movieId) {
  const container = document.getElementById("commentsList");
  container.innerHTML = "";
  const list = movieComments[movieId] || [];

  if (list.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-500 italic">Hozircha sharhlar yo'q. Birinchi bo'lib fikringizni yozib qoldiring!</p>`;
    return;
  }

  list.forEach(c => {
    const item = document.createElement("div");
    item.className = "p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs";
    item.innerHTML = `
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-emerald-400">${c.author}</span>
        <span class="text-[10px] text-slate-500">${c.time || 'Hozirgina'}</span>
      </div>
      <p class="text-slate-300">${c.text}</p>
    `;
    container.appendChild(item);
  });
}

function submitComment(e) {
  e.preventDefault();
  if (!currentMovie) return;

  const author = document.getElementById("commentAuthor").value.trim();
  const text = document.getElementById("commentText").value.trim();
  if (!author || !text) return;

  if (!movieComments[currentMovie.id]) {
    movieComments[currentMovie.id] = [];
  }

  movieComments[currentMovie.id].unshift({
    author: author,
    text: text,
    time: "Hozirgina"
  });

  setStoredData("comments", movieComments);
  renderComments(currentMovie.id);
  document.getElementById("commentText").value = "";
}

function shareMovie() {
  if (navigator.share && currentMovie) {
    navigator.share({
      title: currentMovie.title,
      text: `${currentMovie.title} filmini MuzaffarZed Portalida tomosha qiling!`,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Havola xotiraga nusxalandi!");
  }
}

// ==================== 2. MUSIQA BO'LIMI VA PASTKI PLEYER ====================
function renderTracks() {
  const container = document.getElementById("trackListContainer");
  container.innerHTML = "";

  const displayTracks = tracks.filter(t => t.privacy !== "private" || (currentUser && t.authorId === currentUser.id));

  displayTracks.forEach((track, index) => {
    const isCurrent = (index === currentTrackIndex);
    const row = document.createElement("div");
    row.className = `track-row ${isCurrent ? 'active' : ''}`;
    row.onclick = () => playTrack(index);

    row.innerHTML = `
      <div class="w-8 text-center text-xs font-mono ${isCurrent ? 'text-emerald-400 font-bold' : 'text-slate-500'}">
        ${isCurrent && isAudioPlaying ? '<i class="fa-solid fa-volume-high animate-pulse"></i>' : (index + 1)}
      </div>
      <img src="${track.cover}" alt="${track.title}" class="w-10 h-10 rounded-lg object-cover">
      <div class="flex-1 truncate">
        <h4 class="text-xs sm:text-sm font-bold text-white truncate">${track.title}</h4>
        <p class="text-[11px] text-slate-400 truncate">${track.artist}</p>
      </div>
      <span class="text-xs font-mono text-slate-400">${track.duration}</span>
      <button onclick="event.stopPropagation(); playTrack(${index})" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-black flex items-center justify-center text-xs transition">
        <i class="fa-solid fa-play"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

function playTrack(index) {
  currentTrackIndex = index;
  const track = tracks[currentTrackIndex];
  if (!track) return;

  globalAudio.src = track.audioUrl;
  globalAudio.play().then(() => {
    isAudioPlaying = true;
    updateAudioUI();
  }).catch(err => {
    console.log("Audio autoplay restriction:", err);
  });

  bottomPlayer.classList.add("show");
  updateSideTrackInfo(track);
  renderTracks();
}

function updateSideTrackInfo(track) {
  document.getElementById("sideTrackArt").src = track.cover;
  document.getElementById("sideTrackTitle").textContent = track.title;
  document.getElementById("sideTrackArtist").textContent = track.artist;
  document.getElementById("visualizerBars").style.display = "flex";
}

function togglePlayPause() {
  if (globalAudio.paused) {
    globalAudio.play();
    isAudioPlaying = true;
  } else {
    globalAudio.pause();
    isAudioPlaying = false;
  }
  updateAudioUI();
  renderTracks();
}

// Shuffle & Repeat Holatlari
let isShuffle = false;
let isRepeat = false;

function toggleShuffle() {
  isShuffle = !isShuffle;
  const btn = document.getElementById("shuffleBtn");
  if (btn) {
    if (isShuffle) {
      btn.className = "text-emerald-400 font-bold transition text-xs";
    } else {
      btn.className = "text-slate-400 hover:text-white transition text-xs";
    }
  }
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  const btn = document.getElementById("repeatBtn");
  if (btn) {
    if (isRepeat) {
      btn.className = "text-emerald-400 font-bold transition text-xs";
    } else {
      btn.className = "text-slate-400 hover:text-white transition text-xs";
    }
  }
}

function nextTrack() {
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  }
  playTrack(currentTrackIndex);
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentTrackIndex);
}

function playAllMusic() {
  playTrack(0);
}

function updateAudioUI() {
  const icon = document.getElementById("masterPlayIcon");
  const track = tracks[currentTrackIndex];

  if (isAudioPlaying) {
    icon.className = "fa-solid fa-pause text-sm";
  } else {
    icon.className = "fa-solid fa-play text-sm ml-0.5";
  }

  if (track) {
    document.getElementById("playerTrackArt").src = track.cover;
    document.getElementById("playerTrackTitle").textContent = track.title;
    document.getElementById("playerTrackArtist").textContent = track.artist;
    document.getElementById("playerDownloadBtn").href = track.audioUrl;
  }
}

function setupAudioEvents() {
  const seekSlider = document.getElementById("audioSeekSlider");
  const currentTimeEl = document.getElementById("currentTime");
  const durationTimeEl = document.getElementById("durationTime");

  globalAudio.addEventListener("timeupdate", () => {
    if (!isNaN(globalAudio.duration)) {
      const progress = (globalAudio.currentTime / globalAudio.duration) * 100;
      seekSlider.value = progress || 0;
      currentTimeEl.textContent = formatTime(globalAudio.currentTime);
      durationTimeEl.textContent = formatTime(globalAudio.duration);
    }
  });

  globalAudio.addEventListener("ended", () => {
    if (isRepeat) {
      globalAudio.currentTime = 0;
      globalAudio.play();
    } else {
      nextTrack();
    }
  });
}

// ==================== OVOZ EKVAYZERI (WEB AUDIO API) ====================
let audioCtx = null;
let biquadFilter = null;
let audioSourceNode = null;

function applyEqualizerPreset(preset) {
  try {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtxClass) return;
      audioCtx = new AudioCtxClass();
      audioSourceNode = audioCtx.createMediaElementSource(globalAudio);
      biquadFilter = audioCtx.createBiquadFilter();
      audioSourceNode.connect(biquadFilter);
      biquadFilter.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (preset === 'bass') {
      biquadFilter.type = 'lowshelf';
      biquadFilter.frequency.value = 200;
      biquadFilter.gain.value = 10;
    } else if (preset === 'vocal') {
      biquadFilter.type = 'peaking';
      biquadFilter.frequency.value = 3000;
      biquadFilter.gain.value = 7;
    } else if (preset === 'electronic') {
      biquadFilter.type = 'peaking';
      biquadFilter.frequency.value = 1000;
      biquadFilter.gain.value = 6;
    } else if (preset === 'cinema') {
      biquadFilter.type = 'lowshelf';
      biquadFilter.frequency.value = 150;
      biquadFilter.gain.value = 8;
    } else {
      biquadFilter.type = 'allpass';
      biquadFilter.gain.value = 0;
    }
  } catch (err) {
    console.log("AudioContext note:", err);
  }
}

// ==================== QO'SHIQ MATNI (LYRICS) ====================
function openLyricsModal() {
  const track = tracks[currentTrackIndex];
  if (!track) return;
  document.getElementById("lyricsTitle").textContent = `${track.title} — ${track.artist}`;
  document.getElementById("lyricsContent").textContent = `${track.title}
(Matn MuzaffarZed Studiyasi tomonidan tasdiqlangan)

Koinot sarhadlarida yangragan ohang,
Yuraklar tubida topadi aks-sado.
Yulduzlar chorlaydi bizni olisga,
Muzaffar media olami — cheksiz samoviy sado...

(Naqorat)
Parvoz etamiz orzular tomon,
Har bir soniya g'alaba zamon.
Musiqa birlashtirar dillarni bugun,
Yangi zafar sari ochiladi yo'l!`;

  const modal = document.getElementById("lyricsModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeLyricsModal() {
  const modal = document.getElementById("lyricsModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// ==================== MAVZU ALMASHTIRGICH (THEME SWITCHER) ====================
function changeTheme(themeName) {
  document.body.classList.remove("theme-gold", "theme-sapphire", "theme-ruby", "theme-purple");
  if (themeName !== "emerald") {
    document.body.classList.add("theme-" + themeName);
  }
  setStoredData("active_theme", themeName);
}

// Boshlang'ich mavzuni tiklash
const savedTheme = getStoredData("active_theme", "emerald");
if (savedTheme !== "emerald") {
  changeTheme(savedTheme);
}

// ==================== PWA O'RNATISH (INSTALL APP) ====================
let deferredInstallPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = document.getElementById("pwaInstallBtn");
  if (btn) btn.classList.remove("hidden");
});

function installPWA() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(() => {
      deferredInstallPrompt = null;
      document.getElementById("pwaInstallBtn").classList.add("hidden");
    });
  }
}

function seekAudio(percent) {
  if (!isNaN(globalAudio.duration)) {
    globalAudio.currentTime = (percent / 100) * globalAudio.duration;
  }
}

function changeVolume(val) {
  globalAudio.volume = parseFloat(val);
  const icon = document.getElementById("volumeIcon");
  if (globalAudio.volume === 0) icon.className = "fa-solid fa-volume-xmark";
  else if (globalAudio.volume < 0.5) icon.className = "fa-solid fa-volume-low";
  else icon.className = "fa-solid fa-volume-high";
}

function toggleMute() {
  globalAudio.muted = !globalAudio.muted;
  const icon = document.getElementById("volumeIcon");
  if (globalAudio.muted) icon.className = "fa-solid fa-volume-xmark";
  else icon.className = "fa-solid fa-volume-high";
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ==================== 3. FOTOGALEREYA ====================
function renderGallery() {
  const container = document.getElementById("galleryGrid");
  container.innerHTML = "";

  const displayPhotos = photos.filter(p => p.privacy !== "private" || (currentUser && p.authorId === currentUser.id));

  displayPhotos.forEach(photo => {
    const item = document.createElement("div");
    item.className = "relative rounded-xl overflow-hidden group cursor-pointer aspect-video bg-slate-900 border border-slate-800";
    item.onclick = () => openLightbox(photo);

    item.innerHTML = `
      <img src="${photo.url}" alt="${photo.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition p-3 flex flex-col justify-end">
        <span class="text-[10px] text-emerald-400 font-bold uppercase">${photo.category}</span>
        <h4 class="text-xs font-bold text-white truncate">${photo.title}</h4>
      </div>
    `;
    container.appendChild(item);
  });
}

function openLightbox(photo) {
  document.getElementById("lightboxImg").src = photo.url;
  document.getElementById("lightboxCaption").textContent = photo.title;
  document.getElementById("lightboxDownload").href = photo.url;
  const modal = document.getElementById("lightboxModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeLightbox(e) {
  if (e.target.id === "lightboxModal") {
    closeLightboxDirect();
  }
}

function closeLightboxDirect() {
  const modal = document.getElementById("lightboxModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// ==================== 4. MAQOLALAR ====================
function renderArticles() {
  const container = document.getElementById("articlesGrid");
  container.innerHTML = "";

  const displayArticles = articles.filter(a => a.privacy !== "private" || (currentUser && a.authorId === currentUser.id));

  displayArticles.forEach(art => {
    const card = document.createElement("div");
    card.className = "glass-panel p-5 rounded-2xl flex flex-col justify-between cursor-pointer group";
    card.onclick = () => openArticleModal(art);

    card.innerHTML = `
      <div>
        <div class="rounded-xl overflow-hidden aspect-video mb-4 bg-slate-900">
          <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        </div>
        <div class="flex items-center gap-2 text-[10px] text-emerald-400 font-bold uppercase mb-2">
          <span>${art.category}</span> • <span>${art.readTime}</span>
        </div>
        <h3 class="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition mb-2">
          ${art.title}
        </h3>
        <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
          ${art.content}
        </p>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-800">
        <span>Muallif: <b class="text-slate-300">MuzaffarZed</b></span>
        <span>${art.date}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function openArticleModal(art) {
  document.getElementById("articleCategory").textContent = art.category;
  document.getElementById("articleModalTitle").textContent = art.title;
  document.getElementById("articleDate").textContent = art.date;
  document.getElementById("articleReadTime").textContent = art.readTime;
  document.getElementById("articleModalImg").src = art.image;
  document.getElementById("articleModalBody").innerHTML = `<p>${art.content}</p>`;

  const modal = document.getElementById("articleModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeArticleModal() {
  const modal = document.getElementById("articleModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// ==================== SEVIMLILAR (FAVORITES) ====================
function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(id);
  }
  setStoredData("favorites", favorites);
  updateFavBadge();
  renderMovies();
}

function updateFavBadge() {
  document.getElementById("favCountBadge").textContent = favorites.length;
}

function filterFavorites() {
  setFilter("favorites");
  window.location.hash = "#kinolar";
}

// ==================== FILTRLAR VA QIDIRUV ====================
function setFilter(filterType) {
  currentFilter = filterType;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active", "bg-emerald-500", "text-slate-950");
    btn.classList.add("bg-slate-900", "text-slate-300");
  });

  const activeBtn = Array.from(document.querySelectorAll(".filter-btn")).find(b => {
    if (filterType === 'all') return b.textContent.includes("Barchasi");
    if (filterType === 'premyera') return b.textContent.includes("Premyeralar");
    if (filterType === 'dublyaj') return b.textContent.includes("Dublyaj");
    if (filterType === 'jahon') return b.textContent.includes("Jahon");
    if (filterType === 'serial') return b.textContent.includes("Seriallar");
    return false;
  });

  if (activeBtn) {
    activeBtn.classList.add("active", "bg-emerald-500", "text-slate-950");
    activeBtn.classList.remove("bg-slate-900", "text-slate-300");
  }

  renderMovies();
}

function applySorting() {
  currentSort = document.getElementById("sortSelect").value;
  renderMovies();
}

function setupSearchEvents() {
  const input = document.getElementById("globalSearchInput");
  input.addEventListener("input", () => {
    renderMovies();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      input.focus();
    }
    if (e.key === "Escape") {
      closeCinemaModal();
      closeLightboxDirect();
      closeArticleModal();
      closeAdminModal();
    }
  });
}

// ==================== ADMIN BOSHQARUV PANELI ====================
function openAdminModal() {
  const modal = document.getElementById("adminModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeAdminModal() {
  const modal = document.getElementById("adminModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function verifyAdminPin() {
  const pin = document.getElementById("adminPinInput").value;
  const errorEl = document.getElementById("adminPinError");

  if (pin === "MuzaffarZed2026") {
    document.getElementById("adminLockScreen").classList.add("hidden");
    document.getElementById("adminDashboard").classList.remove("hidden");
    errorEl.classList.add("hidden");
  } else {
    errorEl.classList.remove("hidden");
  }
}

function setAdminTab(tab) {
  document.querySelectorAll(".admin-tab").forEach(b => {
    b.className = "admin-tab px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300";
  });
  event.target.className = "admin-tab active px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-black";

  document.getElementById("addMovieForm").classList.add("hidden");
  document.getElementById("addMusicForm").classList.add("hidden");
  document.getElementById("addPhotoForm").classList.add("hidden");
  document.getElementById("addArticleForm").classList.add("hidden");
  document.getElementById("backupPanel").classList.add("hidden");

  if (tab === "movie") document.getElementById("addMovieForm").classList.remove("hidden");
  if (tab === "music") document.getElementById("addMusicForm").classList.remove("hidden");
  if (tab === "photo") document.getElementById("addPhotoForm").classList.remove("hidden");
  if (tab === "article") document.getElementById("addArticleForm").classList.remove("hidden");
  if (tab === "backup") document.getElementById("backupPanel").classList.remove("hidden");
}

function adminAddMovie(e) {
  e.preventDefault();
  const newMovie = {
    id: "m_" + Date.now(),
    title: document.getElementById("mTitle").value,
    category: document.getElementById("mCategory").value,
    year: parseInt(document.getElementById("mYear").value) || 2026,
    quality: document.getElementById("mQuality").value || "4K UHD",
    dubbing: "O'zbekcha Dublyaj",
    rating: 9.0,
    views: 1,
    poster: document.getElementById("mPoster").value,
    backdrop: document.getElementById("mPoster").value,
    videoUrl: document.getElementById("mVideoUrl").value,
    trailerUrl: document.getElementById("mVideoUrl").value,
    description: document.getElementById("mDesc").value,
    country: "MuzaffarZed Studios",
    duration: "Yangi Film",
    downloadUrl: document.getElementById("mVideoUrl").value
  };

  movies.unshift(newMovie);
  setStoredData("movies", movies);
  renderMovies();
  alert("Yangi film muvaffaqiyatli joylandi!");
  e.target.reset();
  closeAdminModal();
}

function adminAddMusic(e) {
  e.preventDefault();
  const newTrack = {
    id: "t_" + Date.now(),
    title: document.getElementById("sTitle").value,
    artist: document.getElementById("sArtist").value,
    duration: "03:30",
    cover: document.getElementById("sCover").value || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80",
    audioUrl: document.getElementById("sAudioUrl").value
  };

  tracks.unshift(newTrack);
  setStoredData("tracks", tracks);
  renderTracks();
  alert("Yangi musiqa muvaffaqiyatli qo'shildi!");
  e.target.reset();
  closeAdminModal();
}

function adminAddPhoto(e) {
  e.preventDefault();
  const newPhoto = {
    id: "p_" + Date.now(),
    title: document.getElementById("pTitle").value,
    category: document.getElementById("pCategory").value || "Galereya",
    url: document.getElementById("pUrl").value
  };

  photos.unshift(newPhoto);
  setStoredData("photos", photos);
  renderGallery();
  alert("Rasm muvaffaqiyatli qo'shildi!");
  e.target.reset();
  closeAdminModal();
}

function adminAddArticle(e) {
  e.preventDefault();
  const newArticle = {
    id: "a_" + Date.now(),
    title: document.getElementById("aTitle").value,
    category: "Shaxsiy Post",
    date: "Bugun",
    readTime: "3 daqiqa",
    image: document.getElementById("aImage").value || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    content: document.getElementById("aContent").value
  };

  articles.unshift(newArticle);
  setStoredData("articles", articles);
  renderArticles();
  alert("Maqola muvaffaqiyatli chop etildi!");
  e.target.reset();
  closeAdminModal();
}

// Zaxirani eksport qilish
function exportDataBackup() {
  const fullBackup = {
    movies,
    tracks,
    photos,
    articles,
    favorites,
    movieComments,
    softwareList,
    users,
    userSubscriptions,
    legoBlocks,
    version: "2026.3",
    author: "MuzaffarZed"
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
  const dlAnchorElem = document.createElement("a");
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `muzaffarzed_backup_${Date.now()}.json`);
  dlAnchorElem.click();
}

// Zaxiradan tiklash
function importDataBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (parsed.movies) movies = parsed.movies;
      if (parsed.tracks) tracks = parsed.tracks;
      if (parsed.photos) photos = parsed.photos;
      if (parsed.articles) articles = parsed.articles;
      if (parsed.favorites) favorites = parsed.favorites;
      if (parsed.movieComments) movieComments = parsed.movieComments;
      if (parsed.softwareList) softwareList = parsed.softwareList;
      if (parsed.users) users = parsed.users;
      if (parsed.userSubscriptions) userSubscriptions = parsed.userSubscriptions;
      if (parsed.legoBlocks) legoBlocks = parsed.legoBlocks;

      setStoredData("movies", movies);
      setStoredData("tracks", tracks);
      setStoredData("photos", photos);
      setStoredData("articles", articles);
      setStoredData("favorites", favorites);
      setStoredData("comments", movieComments);
      setStoredData("softwareList", softwareList);
      setStoredData("users", users);
      setStoredData("userSubscriptions", userSubscriptions);
      setStoredData("lego_layout", legoBlocks);

      renderMovies();
      renderTracks();
      renderSoftware();
      renderGallery();
      renderChannels();
      renderArticles();
      updateFavBadge();
      applyLegoLayout();
      alert("Barcha ma'lumotlar va Lego konfiguratsiyasi zaxiradan muvaffaqiyatli tiklandi!");
      closeAdminModal();
    } catch (err) {
      alert("Fayl formati noto'g'ri!");
    }
  };
  reader.readAsText(file);
}

// Zavod holatiga qaytarish
function resetDefaultData() {
  if (confirm("Haqiqatan ham barcha ma'lumotlarni boshlang'ich holatiga qaytarmoqchimisiz?")) {
    localStorage.clear();
    movies = DEFAULT_MOVIES;
    tracks = DEFAULT_TRACKS;
    photos = DEFAULT_PHOTOS;
    articles = DEFAULT_ARTICLES;
    favorites = ["m1", "m3"];
    users = DEFAULT_USERS;
    currentUser = DEFAULT_USERS[0];
    softwareList = DEFAULT_SOFTWARE;
    userSubscriptions = ["u_master"];
    legoBlocks = JSON.parse(JSON.stringify(DEFAULT_LEGO_BLOCKS));
    movieComments = {};

    renderUserAccount();
    renderMovies();
    renderTracks();
    renderSoftware();
    renderGallery();
    renderChannels();
    renderArticles();
    updateFavBadge();
    applyLegoLayout();
    alert("Barcha ma'lumotlar zavod holatiga qaytarildi!");
    closeAdminModal();
  }
}

// ==================== 5. FOYDALANUVCHILAR VA AUTH (AKKAUNT TIZIMI) ====================
function renderUserAccount() {
  const container = document.getElementById("userAccountSection");
  if (!container) return;

  if (currentUser) {
    container.innerHTML = `
      <div class="flex items-center gap-2">
        <button onclick="openCreatorStudio('myChannel')" class="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 transition group" title="Mening Profilim & Studiyam">
          <img src="${currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80'}" alt="${currentUser.name}" class="w-7 h-7 rounded-lg object-cover border border-emerald-500/50">
          <div class="text-left hidden sm:block">
            <div class="flex items-center gap-1 leading-none">
              <span class="text-xs font-bold text-white group-hover:text-emerald-400 transition truncate max-w-[100px]">${currentUser.name}</span>
              ${currentUser.isVerified ? '<i class="fa-solid fa-circle-check text-emerald-400 text-[10px]"></i>' : ''}
            </div>
            <span class="text-[9px] text-slate-400 font-mono">@${currentUser.username}</span>
          </div>
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button onclick="openAuthModal()" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 transition flex items-center gap-1.5" title="Kanal ochish yoki kirish">
        <i class="fa-solid fa-user"></i>
        <span class="hidden sm:inline">Kirish / Kanal</span>
      </button>
    `;
  }
}

function openAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("modal-active");
  }
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("modal-active");
  }
}

function switchAuthTab(tab) {
  const loginTab = document.getElementById("authTabLogin");
  const regTab = document.getElementById("authTabRegister");
  const loginForm = document.getElementById("loginForm");
  const regForm = document.getElementById("registerForm");
  const title = document.getElementById("authModalTitle");

  if (tab === "login") {
    loginTab.className = "flex-1 py-3 text-xs font-bold text-emerald-400 border-b-2 border-emerald-500 transition";
    regTab.className = "flex-1 py-3 text-xs font-semibold text-slate-400 hover:text-white transition";
    loginForm.classList.remove("hidden");
    regForm.classList.add("hidden");
    title.textContent = "Akkauntga Kirish";
  } else {
    regTab.className = "flex-1 py-3 text-xs font-bold text-emerald-400 border-b-2 border-emerald-500 transition";
    loginTab.className = "flex-1 py-3 text-xs font-semibold text-slate-400 hover:text-white transition";
    regForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    title.textContent = "Yangi Akkaunt & Kanal Ochish";
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const u = document.getElementById("loginUsername").value.trim().toLowerCase();
  const p = document.getElementById("loginPassword").value;
  const err = document.getElementById("loginError");

  const user = users.find(x => x.username.toLowerCase() === u && x.password === p);
  if (!user) {
    err.textContent = "Username yoki parol noto'g'ri!";
    err.classList.remove("hidden");
    return;
  }

  err.classList.add("hidden");
  currentUser = user;
  setStoredData("currentUser", currentUser);
  renderUserAccount();
  renderMovies();
  renderTracks();
  renderSoftware();
  renderGallery();
  renderChannels();
  renderArticles();
  closeAuthModal();
  e.target.reset();
  alert(`Xush kelibsiz, ${user.name}!`);
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("regFullName").value.trim();
  const username = document.getElementById("regUsername").value.trim().toLowerCase();
  const bio = document.getElementById("regBio").value.trim();
  const avatar = document.getElementById("regAvatar").value.trim();
  const password = document.getElementById("regPassword").value;
  const err = document.getElementById("regError");

  if (users.some(x => x.username.toLowerCase() === username)) {
    err.textContent = "Bu username band, boshqa nom tanlang!";
    err.classList.remove("hidden");
    return;
  }

  const newUser = {
    id: "u_" + Date.now(),
    username: username,
    name: name,
    password: password,
    bio: bio || "Kreator kanali",
    avatar: avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80",
    role: "creator",
    isVerified: false,
    subscribers: 0
  };

  users.push(newUser);
  setStoredData("users", users);
  currentUser = newUser;
  setStoredData("currentUser", currentUser);

  renderUserAccount();
  renderChannels();
  closeAuthModal();
  e.target.reset();
  alert(`Tabriklaymiz! Sizning yangi "${newUser.name}" kanalingiz ochildi!`);
}

function logoutCurrentUser() {
  currentUser = null;
  setStoredData("currentUser", null);
  renderUserAccount();
  renderMovies();
  renderTracks();
  renderSoftware();
  renderGallery();
  renderChannels();
  closeCreatorStudio();
  alert("Akkauntdan chiqildi!");
}

// ==================== 6. DASTURLAR VA APKLAR HUBI (SOFTWARE ENGINE) ====================
function renderSoftware(filterOS = currentSoftwareFilter) {
  const container = document.getElementById("softwareGrid");
  if (!container) return;
  container.innerHTML = "";

  let list = softwareList.filter(s => s.privacy !== "private" || (currentUser && s.authorId === currentUser.id));

  if (filterOS !== "all") {
    list = list.filter(s => s.os === filterOS);
  }

  // Qidiruv maydoni ta'siri
  const searchInput = document.getElementById("globalSearchInput");
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  if (query) {
    list = list.filter(s => 
      s.title.toLowerCase().includes(query) ||
      s.category.toLowerCase().includes(query) ||
      s.description.toLowerCase().includes(query)
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i class="fa-solid fa-cube text-4xl mb-3 text-slate-600"></i>
        <p class="text-sm font-semibold">Ushbu toifada hozircha dasturlar yo'q.</p>
      </div>
    `;
    return;
  }

  list.forEach(soft => {
    const card = document.createElement("div");
    card.className = "software-card group";

    let osBadgeClass = "android";
    let osLabel = "Android (APK)";
    let osIcon = "fa-brands fa-android";
    if (soft.os === "windows") {
      osBadgeClass = "windows";
      osLabel = "Windows (PC)";
      osIcon = "fa-brands fa-windows";
    } else if (soft.os === "cross") {
      osBadgeClass = "cross";
      osLabel = "Cross-Platform";
      osIcon = "fa-solid fa-laptop-code";
    }

    card.innerHTML = `
      <div>
        <div class="flex items-start justify-between gap-3 mb-3">
          <img src="${soft.icon || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&q=80'}" alt="${soft.title}" class="w-14 h-14 rounded-2xl object-cover border border-slate-700 shadow-md group-hover:scale-105 transition">
          <span class="badge-os ${osBadgeClass}"><i class="${osIcon} mr-1"></i> ${osLabel}</span>
        </div>
        <h3 class="text-sm font-extrabold text-white group-hover:text-cyan-400 transition mb-1 leading-snug">${soft.title}</h3>
        <div class="flex items-center gap-2 text-[10px] text-slate-400 font-mono mb-2">
          <span>${soft.version}</span> • <span>${soft.size}</span> • <span class="text-slate-300 font-bold">${soft.category}</span>
        </div>
        <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">${soft.description}</p>
      </div>
      <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <div class="text-[10px] text-slate-400">
          <span>Yuklashlar: <b class="text-slate-200">${(soft.downloads || 0).toLocaleString()}</b></span>
        </div>
        <a href="${soft.downloadUrl}" target="_blank" onclick="incrementSoftwareDownloads('${soft.id}')" class="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 hover:text-black border border-cyan-500/40 text-cyan-300 text-xs font-bold transition flex items-center gap-1.5">
          <i class="fa-solid fa-download"></i> Yuklash
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterSoftware(os) {
  currentSoftwareFilter = os;
  const buttons = document.querySelectorAll(".soft-filter-btn");
  buttons.forEach(btn => {
    btn.classList.remove("active", "bg-blue-500", "text-slate-950");
    btn.classList.add("bg-slate-900", "text-slate-300");
  });
  if (window.event && window.event.target) {
    const activeBtn = window.event.target.closest(".soft-filter-btn");
    if (activeBtn) {
      activeBtn.classList.remove("bg-slate-900", "text-slate-300");
      activeBtn.classList.add("active", "bg-blue-500", "text-slate-950");
    }
  }
  renderSoftware(os);
}

function incrementSoftwareDownloads(id) {
  const item = softwareList.find(s => s.id === id);
  if (item) {
    item.downloads = (item.downloads || 0) + 1;
    setStoredData("softwareList", softwareList);
    renderSoftware();
  }
}

// ==================== 7. OCHIQ KANALLAR VA OBUNA BO'LISH ====================
function renderChannels() {
  const container = document.getElementById("channelsGrid");
  if (!container) return;
  container.innerHTML = "";

  users.forEach(u => {
    const isSubscribed = userSubscriptions.includes(u.id);
    const card = document.createElement("div");
    card.className = "channel-card";

    card.innerHTML = `
      <div onclick="openPersonalLegoSite('${u.id}')" class="flex items-center gap-3 cursor-pointer group flex-1">
        <img src="${u.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80'}" alt="${u.name}" class="w-12 h-12 rounded-2xl object-cover border border-slate-700 group-hover:border-emerald-500 transition">
        <div>
          <div class="flex items-center gap-1.5">
            <h4 class="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition">${u.name}</h4>
            ${u.isVerified ? '<i class="fa-solid fa-circle-check text-emerald-400 text-xs"></i>' : ''}
          </div>
          <p class="text-[10px] text-slate-400 font-mono">@${u.username}</p>
          <span class="text-[10px] text-amber-400 font-semibold flex items-center gap-1 mt-0.5">
            <i class="fa-solid fa-cubes text-[9px]"></i> Lego Saytini ochish
          </span>
        </div>
      </div>
      <div>
        <button onclick="toggleSubscribe('${u.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isSubscribed ? 'bg-slate-800 text-emerald-400 border border-emerald-500/40' : 'bg-pink-500 text-white hover:bg-pink-600'}">
          ${isSubscribed ? '<i class="fa-solid fa-check"></i> Obunadasiz' : '<i class="fa-solid fa-bell"></i> Obuna'}
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleSubscribe(channelId) {
  const channel = users.find(u => u.id === channelId);
  if (!channel) return;

  const idx = userSubscriptions.indexOf(channelId);
  if (idx > -1) {
    userSubscriptions.splice(idx, 1);
    channel.subscribers = Math.max(0, (channel.subscribers || 0) - 1);
  } else {
    userSubscriptions.push(channelId);
    channel.subscribers = (channel.subscribers || 0) + 1;
  }

  setStoredData("userSubscriptions", userSubscriptions);
  setStoredData("users", users);
  renderChannels();
}

function openCreateChannelPrompt() {
  if (currentUser) {
    openCreatorStudio("myChannel");
  } else {
    openAuthModal();
    switchAuthTab("register");
  }
}

// ==================== 8. CREATOR STUDIO & BULUT VAULT ====================
function openCreatorStudio(tab = "upload") {
  if (!currentUser) {
    openAuthModal();
    return;
  }
  const modal = document.getElementById("creatorStudioModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("modal-active");
  }
  const badge = document.getElementById("studioUserBadge");
  if (badge) badge.textContent = currentUser.name;
  setStudioTab(tab);
}

function closeCreatorStudio() {
  const modal = document.getElementById("creatorStudioModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("modal-active");
  }
}

function setStudioTab(tab) {
  const uploadSec = document.getElementById("studioUploadSection");
  const channelSec = document.getElementById("studioChannelSection");
  const vaultSec = document.getElementById("studioVaultSection");

  const btnUp = document.getElementById("tabUploadBtn");
  const btnCh = document.getElementById("tabChannelBtn");
  const btnVa = document.getElementById("tabVaultBtn");

  [btnUp, btnCh, btnVa].forEach(b => {
    if (b) b.className = "studio-tab px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5";
  });

  if (tab === "upload") {
    if (uploadSec) uploadSec.classList.remove("hidden");
    if (channelSec) channelSec.classList.add("hidden");
    if (vaultSec) vaultSec.classList.add("hidden");
    if (btnUp) btnUp.className = "studio-tab active px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-black flex items-center gap-1.5";
  } else if (tab === "myChannel") {
    if (uploadSec) uploadSec.classList.add("hidden");
    if (channelSec) channelSec.classList.remove("hidden");
    if (vaultSec) vaultSec.classList.add("hidden");
    if (btnCh) btnCh.className = "studio-tab active px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-black flex items-center gap-1.5";
    renderChannelStudioInfo();
  } else if (tab === "privateVault") {
    if (uploadSec) uploadSec.classList.add("hidden");
    if (channelSec) channelSec.classList.add("hidden");
    if (vaultSec) vaultSec.classList.remove("hidden");
    if (btnVa) btnVa.className = "studio-tab active px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-black flex items-center gap-1.5";
    renderVaultItems();
  }
}

function handleStudioTypeChange(type) {
  const softFields = document.getElementById("studioSoftwareFields");
  const coverField = document.getElementById("studioCoverField");
  const urlLabel = document.getElementById("studioMediaUrlLabel");

  if (!softFields || !coverField || !urlLabel) return;

  if (type === "software") {
    softFields.classList.remove("hidden");
    coverField.classList.add("hidden");
    urlLabel.textContent = "Dasturni Yuklab Olish Havolasi (APK / EXE URL) *";
  } else if (type === "movie") {
    softFields.classList.add("hidden");
    coverField.classList.remove("hidden");
    urlLabel.textContent = "Video / Film Havolasi (MP4 yoki YouTube Embed) *";
  } else if (type === "music") {
    softFields.classList.add("hidden");
    coverField.classList.remove("hidden");
    urlLabel.textContent = "Qo'shiq Audio Havolasi (MP3 URL) *";
  } else if (type === "photo") {
    softFields.classList.add("hidden");
    coverField.classList.add("hidden");
    urlLabel.textContent = "Rasm Havolasi (Image URL) *";
  } else if (type === "article") {
    softFields.classList.add("hidden");
    coverField.classList.remove("hidden");
    urlLabel.textContent = "Maqola Muqova Rasmi (URL) *";
  }
}

function handleStudioUploadSubmit(e) {
  e.preventDefault();
  if (!currentUser) {
    alert("Iltimos, avval tizimga kiring!");
    return;
  }

  const type = document.getElementById("studioType").value;
  const privacy = document.getElementById("studioPrivacy").value;
  const title = document.getElementById("studioTitle").value.trim();
  const mediaUrl = document.getElementById("studioMediaUrl").value.trim();
  const coverUrl = document.getElementById("studioCoverUrl") ? document.getElementById("studioCoverUrl").value.trim() : "";
  const desc = document.getElementById("studioDesc") ? document.getElementById("studioDesc").value.trim() : "";

  const id = "up_" + Date.now();

  if (type === "software") {
    const os = document.getElementById("studioSoftOs").value;
    const version = document.getElementById("studioSoftVersion").value.trim() || "v1.0.0";
    const size = document.getElementById("studioSoftSize").value.trim() || "50 MB";
    const icon = document.getElementById("studioSoftIcon").value.trim() || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&q=80";

    const newSoft = {
      id,
      title,
      os,
      version,
      size,
      category: "Kreator Dasturi",
      downloads: 1,
      icon,
      downloadUrl: mediaUrl,
      author: currentUser.name,
      authorId: currentUser.id,
      privacy,
      description: desc || "Kreator tomonidan yuklangan dastur."
    };
    softwareList.unshift(newSoft);
    setStoredData("softwareList", softwareList);
    renderSoftware();
  } else if (type === "movie") {
    const newMovie = {
      id,
      title,
      category: "premyera",
      year: 2026,
      quality: "Full HD",
      dubbing: "Kreator Video",
      rating: 9.0,
      views: 1,
      poster: coverUrl || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      backdrop: coverUrl || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80",
      videoUrl: mediaUrl,
      trailerUrl: mediaUrl,
      description: desc || "Kreator tomonidan yuklangan video.",
      country: "O'zbekiston",
      duration: "Video Media",
      author: currentUser.name,
      authorId: currentUser.id,
      privacy,
      downloadUrl: mediaUrl
    };
    movies.unshift(newMovie);
    setStoredData("movies", movies);
    renderMovies();
  } else if (type === "music") {
    const newTrack = {
      id,
      title,
      artist: currentUser.name,
      duration: "03:30",
      cover: coverUrl || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80",
      audioUrl: mediaUrl,
      author: currentUser.name,
      authorId: currentUser.id,
      privacy
    };
    tracks.unshift(newTrack);
    setStoredData("tracks", tracks);
    renderTracks();
  } else if (type === "photo") {
    const newPhoto = {
      id,
      title,
      category: "Kreator Foto",
      url: mediaUrl,
      author: currentUser.name,
      authorId: currentUser.id,
      privacy
    };
    photos.unshift(newPhoto);
    setStoredData("photos", photos);
    renderGallery();
  } else if (type === "article") {
    const newArticle = {
      id,
      title,
      category: "Kreator Blog",
      date: "Bugun",
      readTime: "3 daqiqa",
      image: coverUrl || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      content: desc || "Maqola matni",
      author: currentUser.name,
      authorId: currentUser.id,
      privacy
    };
    articles.unshift(newArticle);
    setStoredData("articles", articles);
    renderArticles();
  }

  e.target.reset();
  alert(`Muvaffaqiyatli saqlandi! Holat: ${privacy === 'private' ? '🔒 Shaxsiy Bulut (Faqat siz ko\'rasiz)' : '🌐 Ommaviy (Hamma ko\'radi)'}`);
  setStudioTab(privacy === 'private' ? 'privateVault' : 'myChannel');
}

function renderChannelStudioInfo() {
  if (!currentUser) return;
  const avatarEl = document.getElementById("myChannelAvatar");
  const nameEl = document.getElementById("myChannelName");
  const handleEl = document.getElementById("myChannelHandle");
  const bioEl = document.getElementById("myChannelBio");
  const subCountEl = document.getElementById("myChannelSubCount");

  if (avatarEl) avatarEl.src = currentUser.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80";
  if (nameEl) nameEl.textContent = currentUser.name;
  if (handleEl) handleEl.textContent = "@" + currentUser.username;
  if (bioEl) bioEl.textContent = currentUser.bio;
  if (subCountEl) subCountEl.textContent = (currentUser.subscribers || 0).toLocaleString();

  const userItems = [
    ...softwareList.filter(s => s.authorId === currentUser.id && s.privacy !== "private"),
    ...movies.filter(m => m.authorId === currentUser.id && m.privacy !== "private"),
    ...tracks.filter(t => t.authorId === currentUser.id && t.privacy !== "private"),
    ...photos.filter(p => p.authorId === currentUser.id && p.privacy !== "private"),
    ...articles.filter(a => a.authorId === currentUser.id && a.privacy !== "private")
  ];

  const uploadCountEl = document.getElementById("myChannelUploadCount");
  if (uploadCountEl) uploadCountEl.textContent = userItems.length;

  const grid = document.getElementById("myChannelItemsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  if (userItems.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-xs text-slate-500 py-6 text-center">Hali ommaviy materiallar joylanmagan.</p>`;
    return;
  }

  userItems.forEach(item => {
    const el = document.createElement("div");
    el.className = "p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs";
    el.innerHTML = `
      <div class="truncate mr-2">
        <span class="font-bold text-white truncate block">${item.title}</span>
        <span class="text-[10px] text-emerald-400 font-mono">🌐 Ommaviy</span>
      </div>
      <button onclick="deleteChannelItem('${item.id}')" class="text-rose-400 hover:text-rose-300 p-1.5 text-xs transition" title="O'chirish">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    grid.appendChild(el);
  });
}

function renderVaultItems() {
  const grid = document.getElementById("myVaultItemsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  if (!currentUser) {
    grid.innerHTML = `<p class="text-xs text-slate-500 py-6 text-center">Shaxsiy bulutni ko'rish uchun avval akkauntingizga kiring.</p>`;
    return;
  }

  const vaultItems = [
    ...softwareList.filter(s => s.authorId === currentUser.id && s.privacy === "private").map(x => ({ ...x, itemType: "software" })),
    ...movies.filter(m => m.authorId === currentUser.id && m.privacy === "private").map(x => ({ ...x, itemType: "movie" })),
    ...tracks.filter(t => t.authorId === currentUser.id && t.privacy === "private").map(x => ({ ...x, itemType: "music" })),
    ...photos.filter(p => p.authorId === currentUser.id && p.privacy === "private").map(x => ({ ...x, itemType: "photo" })),
    ...articles.filter(a => a.authorId === currentUser.id && a.privacy === "private").map(x => ({ ...x, itemType: "article" }))
  ];

  if (vaultItems.length === 0) {
    grid.innerHTML = `
      <div class="text-center py-8 text-slate-500">
        <i class="fa-solid fa-lock text-3xl mb-2 text-slate-600"></i>
        <p class="text-xs">Sizning shaxsiy maxfiy bulutingiz bo'sh.</p>
        <p class="text-[10px] text-slate-400 mt-1">"Yuklash" bo'limida "🔒 Shaxsiy Bulut"ni tanlab fayllar joylang.</p>
      </div>
    `;
    return;
  }

  vaultItems.forEach(item => {
    const el = document.createElement("div");
    el.className = "p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 text-xs";
    el.innerHTML = `
      <div class="flex items-center gap-3 truncate">
        <div class="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm">
          <i class="fa-solid fa-lock"></i>
        </div>
        <div class="truncate">
          <h5 class="font-bold text-white truncate">${item.title}</h5>
          <span class="text-[10px] text-slate-400 font-mono">${item.itemType.toUpperCase()} • Shaxsiy Bulut</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <a href="${item.downloadUrl || item.videoUrl || item.audioUrl || item.url || '#'}" target="_blank" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-200 transition">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Ochish
        </a>
        <button onclick="deleteVaultItem('${item.itemType}', '${item.id}')" class="p-1.5 text-rose-400 hover:text-rose-300 transition" title="O'chirish">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    grid.appendChild(el);
  });
}

function filterPrivateCloud() {
  if (!currentUser) {
    openAuthModal();
    return;
  }
  openCreatorStudio("privateVault");
}

function deleteVaultItem(type, id) {
  if (!confirm("Ushbu shaxsiy faylni o'chirmoqchimisiz?")) return;
  if (type === "software") {
    softwareList = softwareList.filter(x => x.id !== id);
    setStoredData("softwareList", softwareList);
    renderSoftware();
  } else if (type === "movie") {
    movies = movies.filter(x => x.id !== id);
    setStoredData("movies", movies);
    renderMovies();
  } else if (type === "music") {
    tracks = tracks.filter(x => x.id !== id);
    setStoredData("tracks", tracks);
    renderTracks();
  } else if (type === "photo") {
    photos = photos.filter(x => x.id !== id);
    setStoredData("photos", photos);
    renderGallery();
  } else if (type === "article") {
    articles = articles.filter(x => x.id !== id);
    setStoredData("articles", articles);
    renderArticles();
  }
  renderVaultItems();
}

function deleteChannelItem(id) {
  if (!confirm("Ushbu ommaviy materialni o'chirmoqchimisiz?")) return;
  softwareList = softwareList.filter(x => x.id !== id);
  movies = movies.filter(x => x.id !== id);
  tracks = tracks.filter(x => x.id !== id);
  photos = photos.filter(x => x.id !== id);
  articles = articles.filter(x => x.id !== id);

  setStoredData("softwareList", softwareList);
  setStoredData("movies", movies);
  setStoredData("tracks", tracks);
  setStoredData("photos", photos);
  setStoredData("articles", articles);

  renderSoftware();
  renderMovies();
  renderTracks();
  renderGallery();
  renderArticles();
  renderChannelStudioInfo();
}

// ==================== 9. LEGO PLATFORMA KONSTRUKTORI (LEGO BUILDER & DRAG/DROP ENGINE) ====================
let draggedLegoBlockId = null;

function applyLegoLayout() {
  const container = document.getElementById("legoMainContainer");
  if (!container) return;

  const sizeLabels = {
    quarter: "1/4",
    third: "1/3",
    half: "1/2",
    "two-thirds": "2/3",
    full: "1/1"
  };

  const heightLabels = {
    auto: "Avto",
    compact: "380px",
    medium: "520px",
    tall: "720px"
  };

  legoBlocks.forEach((block, index) => {
    let el = document.getElementById(block.id);

    // Agar foydalanuvchi yaratgan yangi kubik bo'lsa va DOM da hali yo'q bo'lsa, yaratish
    if (!el) {
      el = document.createElement("section");
      el.id = block.id;
      el.className = "p-6";
      container.appendChild(el);
    } else {
      container.appendChild(el);
    }

    el.style.display = block.visible ? "" : "none";

    // Bento grid sizing & color theme
    el.classList.add("lego-cube");
    el.classList.remove(
      "lego-size-quarter",
      "lego-size-third",
      "lego-size-half",
      "lego-size-two-thirds",
      "lego-size-full",
      "lego-height-auto",
      "lego-height-compact",
      "lego-height-medium",
      "lego-height-tall",
      "cube-color-emerald",
      "cube-color-cyan",
      "cube-color-gold",
      "cube-color-ruby",
      "cube-color-purple",
      "cube-color-blue"
    );

    el.classList.add(`lego-size-${block.size || 'full'}`);
    el.classList.add(`lego-height-${block.height || 'auto'}`);
    el.classList.add(`cube-color-${block.color || 'emerald'}`);

    // Drag & Drop xususiyatlarini ulash
    el.setAttribute("draggable", "true");
    el.dataset.blockId = block.id;

    el.ondragstart = (e) => handleCubeDragStart(e, block.id);
    el.ondragend = (e) => handleCubeDragEnd(e);
    el.ondragover = (e) => handleCubeDragOver(e);
    el.ondragleave = (e) => handleCubeDragLeave(e);
    el.ondrop = (e) => handleCubeDrop(e, block.id);

    // 3D Lego Stud Bar (Yuqori Lego nuqtalari va boshqaruv pulti)
    let studBar = el.querySelector(".lego-stud-bar");
    if (!studBar) {
      studBar = document.createElement("div");
      studBar.className = "lego-stud-bar";
      el.insertBefore(studBar, el.firstChild);
    }

    studBar.innerHTML = `
      <div class="lego-studs-group" title="Sudrash uchun ushlang (#${index + 1})">
        <div class="lego-stud"></div>
        <div class="lego-stud"></div>
        <div class="lego-stud"></div>
        <div class="lego-stud"></div>
      </div>
      <div class="lego-cube-tag">
        <i class="${block.icon || 'fa-solid fa-cube'}"></i> <span>Kubik: ${block.name}</span>
      </div>
      <div class="cube-edit-controls">
        <button onclick="cycleCubeSize('${block.id}')" class="cube-ctrl-btn" title="Kengligini o'zgartirish (Eni)">📐 ${sizeLabels[block.size || 'full']}</button>
        <button onclick="cycleCubeHeight('${block.id}')" class="cube-ctrl-btn" title="Balandligini o'zgartirish (Bo'yi)">↕️ ${heightLabels[block.height || 'auto']}</button>
        <button onclick="cycleCubeColor('${block.id}')" class="cube-ctrl-btn" title="Rangini almashtirish">🎨 Rang</button>
        <button onclick="openCubeContentModal('${block.id}')" class="cube-ctrl-btn text-amber-300 border-amber-400/50" title="Kubik ichiga xohlagan narsani joylash">✏️ Joylash</button>
        <button onclick="moveCubeUp('${block.id}')" class="cube-ctrl-btn" title="Yuqoriga surish">⬆️</button>
        <button onclick="moveCubeDown('${block.id}')" class="cube-ctrl-btn" title="Pastga surish">⬇️</button>
        <button onclick="hideCube('${block.id}')" class="cube-ctrl-btn text-rose-400" title="Yashirish">❌</button>
      </div>
    `;

    // Pastki o'ng burchakdagi interaktiv razmer tutqichi (Resize Handle)
    let resizeHandle = el.querySelector(".lego-resize-handle");
    if (!resizeHandle) {
      resizeHandle = document.createElement("div");
      resizeHandle.className = "lego-resize-handle";
      resizeHandle.title = "Razmerni o'zgartirish (1-bosishda)";
      resizeHandle.onclick = (e) => {
        e.stopPropagation();
        cycleCubeSize(block.id);
      };
      el.appendChild(resizeHandle);
    }

    // Maxsus kontent joylash (Custom Content Injector)
    renderCustomCubeContent(el, block);
  });

  setStoredData("lego_layout", legoBlocks);
}

// ==================== MAXSUS KONTENT JOYLASH VA KO'RSATISH ====================
function renderCustomCubeContent(el, block) {
  let customBody = el.querySelector(".cube-custom-body");

  // Agar maxsus kontent bo'lsa va turi "default" bo'lmasa
  if (block.customContent && block.customContent.type && block.customContent.type !== "default") {
    // Asl ichki elementlarni yashirish (studBar va resizeHandle dan tashqari)
    Array.from(el.children).forEach(child => {
      if (!child.classList.contains("lego-stud-bar") && !child.classList.contains("lego-resize-handle")) {
        if (!child.classList.contains("cube-custom-body")) {
          child.style.display = "none";
        }
      }
    });

    if (!customBody) {
      customBody = document.createElement("div");
      customBody.className = "cube-custom-body";
      el.appendChild(customBody);
    }

    const { type, text, mediaUrl, caption, embedCode, quicklinks } = block.customContent;

    if (type === "text") {
      customBody.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i class="${block.icon || 'fa-solid fa-note-sticky'} text-amber-400"></i> ${block.name}
            </h3>
            <span class="text-[10px] text-amber-400/80 font-mono">Shaxsiy Qayd</span>
          </div>
          <div class="cube-notes-display">${escapeHtml(text || "Matn kiritilmagan...")}</div>
          <div class="cube-watermark">Dasturchi: MuzaffarZed</div>
        </div>
      `;
    } else if (type === "media") {
      const isVideo = mediaUrl && (mediaUrl.endsWith(".mp4") || mediaUrl.includes("video"));
      customBody.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i class="${block.icon || 'fa-solid fa-photo-film'} text-cyan-400"></i> ${block.name}
            </h3>
            <span class="text-[10px] text-cyan-400 font-mono">Multimedia</span>
          </div>
          <div class="rounded-2xl overflow-hidden bg-black/60 border border-slate-800">
            ${isVideo 
              ? `<video src="${mediaUrl}" controls class="w-full max-h-[420px] object-contain"></video>` 
              : `<img src="${mediaUrl || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80'}" class="w-full max-h-[420px] object-cover">`
            }
          </div>
          ${caption ? `<p class="text-xs text-slate-300 italic text-center">${caption}</p>` : ''}
          <div class="cube-watermark">Dasturchi: MuzaffarZed</div>
        </div>
      `;
    } else if (type === "embed") {
      let embedHtml = embedCode || "";
      if (embedHtml.startsWith("http") && !embedHtml.includes("<iframe")) {
        // Agar to'g'ridan-to'g'ri link berilgan bo'lsa
        if (embedHtml.includes("youtube.com/watch?v=")) {
          embedHtml = embedHtml.replace("watch?v=", "embed/");
        } else if (embedHtml.includes("youtu.be/")) {
          embedHtml = embedHtml.replace("youtu.be/", "www.youtube.com/embed/");
        }
        embedHtml = `<iframe src="${embedHtml}" allowfullscreen></iframe>`;
      }
      customBody.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i class="${block.icon || 'fa-solid fa-code'} text-purple-400"></i> ${block.name}
            </h3>
            <span class="text-[10px] text-purple-400 font-mono">Web Embed</span>
          </div>
          <div class="cube-custom-embed-wrapper">${embedHtml}</div>
          <div class="cube-watermark">Dasturchi: MuzaffarZed</div>
        </div>
      `;
    } else if (type === "quicklinks") {
      const lines = (quicklinks || "").split("\n").filter(l => l.trim().length > 0);
      customBody.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i class="${block.icon || 'fa-solid fa-rocket'} text-emerald-400"></i> ${block.name}
            </h3>
            <span class="text-[10px] text-emerald-400 font-mono">Tezkor Tugmalar</span>
          </div>
          <div class="cube-quicklinks-grid">
            ${lines.map(line => {
              const parts = line.split("|");
              const title = parts[0]?.trim() || "Havola";
              const url = parts[1]?.trim() || "#";
              return `
                <a href="${url}" target="_blank" class="cube-quicklink-btn">
                  <i class="fa-solid fa-arrow-up-right-from-square text-emerald-400"></i>
                  <span>${title}</span>
                </a>
              `;
            }).join('')}
          </div>
          <div class="cube-watermark">Dasturchi: MuzaffarZed</div>
        </div>
      `;
    }
  } else {
    // Agar standart kontent bo'lsa, custom container bo'lsa olib tashlanadi va asl bolalar ko'rsatiladi
    if (customBody) {
      customBody.remove();
    }
    Array.from(el.children).forEach(child => {
      if (child.style.display === "none") {
        child.style.display = "";
      }
    });
  }
}

// Xavfsiz HTML escape
function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// ==================== SUDRAB TASHLASH (DRAG & DROP) VOQEALARI ====================
function handleCubeDragStart(e, blockId) {
  draggedLegoBlockId = blockId;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", blockId);
  e.currentTarget.classList.add("is-dragging");
}

function handleCubeDragEnd(e) {
  e.currentTarget.classList.remove("is-dragging");
  document.querySelectorAll(".lego-cube").forEach(c => c.classList.remove("drag-over"));
  draggedLegoBlockId = null;
}

function handleCubeDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  const cube = e.currentTarget.closest(".lego-cube");
  if (cube && !cube.classList.contains("is-dragging")) {
    cube.classList.add("drag-over");
  }
}

function handleCubeDragLeave(e) {
  const cube = e.currentTarget.closest(".lego-cube");
  if (cube) {
    cube.classList.remove("drag-over");
  }
}

function handleCubeDrop(e, targetBlockId) {
  e.preventDefault();
  const cube = e.currentTarget.closest(".lego-cube");
  if (cube) cube.classList.remove("drag-over");

  const sourceId = draggedLegoBlockId || e.dataTransfer.getData("text/plain");
  if (!sourceId || sourceId === targetBlockId) return;

  const fromIdx = legoBlocks.findIndex(b => b.id === sourceId);
  const toIdx = legoBlocks.findIndex(b => b.id === targetBlockId);

  if (fromIdx === -1 || toIdx === -1) return;

  // Massivda joyini almashtirish
  const [movedBlock] = legoBlocks.splice(fromIdx, 1);
  legoBlocks.splice(toIdx, 0, movedBlock);

  applyLegoLayout();
  if (document.getElementById("legoStudioModal") && document.getElementById("legoStudioModal").classList.contains("flex")) {
    renderLegoStudioList();
  }

  showLegoToast(`🧱 "${movedBlock.name}" kubigi ko'chirildi!`);
}

function showLegoToast(message) {
  let toast = document.getElementById("legoToastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "legoToastNotification";
    toast.className = "fixed top-24 right-6 z-50 bg-slate-900/95 border-2 border-amber-400 text-amber-300 font-bold px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-xl text-xs flex items-center gap-2 transform transition-all duration-300 opacity-0 translate-y-2 pointer-events-none";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-cubes text-amber-400"></i> <span>${message}</span>`;
  toast.classList.remove("opacity-0", "translate-y-2");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-2");
  }, 2200);
}

// ==================== TAHRIRLASH REJIMI VA RAZMERNI O'ZGARTIRISH ====================
function toggleLegoEditMode() {
  document.body.classList.toggle("lego-edit-mode");
  const toolbar = document.getElementById("legoLiveToolbar");
  const isEdit = document.body.classList.contains("lego-edit-mode");

  if (toolbar) {
    if (isEdit) toolbar.classList.remove("hidden");
    else toolbar.classList.add("hidden");
  }

  const btn = document.getElementById("legoModeToggleBtn");
  if (btn) {
    if (isEdit) {
      btn.classList.add("bg-amber-500", "text-black");
      btn.classList.remove("text-amber-300");
    } else {
      btn.classList.remove("bg-amber-500", "text-black");
      btn.classList.add("text-amber-300");
    }
  }

  if (isEdit) {
    showLegoToast("🧱 Lego Terish Rejimi Faol! Kubiklarni sudray olasiz.");
  }
}

function cycleCubeSize(blockId) {
  const block = legoBlocks.find(b => b.id === blockId);
  if (!block) return;
  const sizes = ["quarter", "third", "half", "two-thirds", "full"];
  const curIdx = sizes.indexOf(block.size || "full");
  block.size = sizes[(curIdx + 1) % sizes.length];
  applyLegoLayout();
  if (document.getElementById("legoStudioModal") && document.getElementById("legoStudioModal").classList.contains("flex")) {
    renderLegoStudioList();
  }
  showLegoToast(`📐 Hajm: ${block.size.toUpperCase()}`);
}

function cycleCubeHeight(blockId) {
  const block = legoBlocks.find(b => b.id === blockId);
  if (!block) return;
  const heights = ["auto", "compact", "medium", "tall"];
  const curIdx = heights.indexOf(block.height || "auto");
  block.height = heights[(curIdx + 1) % heights.length];
  applyLegoLayout();
  showLegoToast(`↕️ Bo'yi: ${block.height.toUpperCase()}`);
}

function cycleCubeColor(blockId) {
  const block = legoBlocks.find(b => b.id === blockId);
  if (!block) return;
  const colors = ["emerald", "cyan", "gold", "ruby", "purple", "blue"];
  const curIdx = colors.indexOf(block.color || "emerald");
  block.color = colors[(curIdx + 1) % colors.length];
  applyLegoLayout();
  showLegoToast(`🎨 Rang: ${block.color.toUpperCase()}`);
}

function moveCubeUp(blockId) {
  const idx = legoBlocks.findIndex(b => b.id === blockId);
  if (idx > 0) {
    moveLegoBlock(idx, -1);
  }
}

function moveCubeDown(blockId) {
  const idx = legoBlocks.findIndex(b => b.id === blockId);
  if (idx < legoBlocks.length - 1) {
    moveLegoBlock(idx, 1);
  }
}

function hideCube(blockId) {
  const idx = legoBlocks.findIndex(b => b.id === blockId);
  if (idx > -1) {
    toggleLegoBlockVisibility(idx);
  }
}

// ==================== KUBIK ICHINI JOYLASH / TAHRIRLASH MODALI ====================
function openCubeContentModal(blockId) {
  const block = legoBlocks.find(b => b.id === blockId);
  if (!block) return;

  const modal = document.getElementById("cubeContentModal");
  if (!modal) return;

  document.getElementById("editCubeId").value = block.id;
  document.getElementById("editCubeTitle").value = block.name;
  document.getElementById("editCubeIcon").value = block.icon || "fa-solid fa-cube";
  document.getElementById("editCubeSize").value = block.size || "full";
  document.getElementById("editCubeHeight").value = block.height || "auto";
  document.getElementById("editCubeColor").value = block.color || "emerald";

  const custom = block.customContent || { type: "default" };
  document.getElementById("editCubeContentType").value = custom.type || "default";

  document.getElementById("editCubeCustomText").value = custom.text || "";
  document.getElementById("editCubeMediaUrl").value = custom.mediaUrl || "";
  document.getElementById("editCubeMediaCaption").value = custom.caption || "";
  document.getElementById("editCubeEmbedCode").value = custom.embedCode || "";
  document.getElementById("editCubeQuicklinksData").value = custom.quicklinks || "";

  // O'chirish tugmasi faqat foydalanuvchi qo'shgan yangi kubiklarda chiqadi
  const delBtn = document.getElementById("deleteCustomCubeBtn");
  if (delBtn) {
    delBtn.style.display = block.id.startsWith("cube_custom_") ? "inline-flex" : "none";
  }

  onCubeContentTypeChange();

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("modal-active");
}

function closeCubeContentModal() {
  const modal = document.getElementById("cubeContentModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("modal-active");
  }
}

function onCubeContentTypeChange() {
  const type = document.getElementById("editCubeContentType").value;
  document.getElementById("fieldCubeText").classList.toggle("hidden", type !== "text");
  document.getElementById("fieldCubeMedia").classList.toggle("hidden", type !== "media");
  document.getElementById("fieldCubeEmbed").classList.toggle("hidden", type !== "embed");
  document.getElementById("fieldCubeQuicklinks").classList.toggle("hidden", type !== "quicklinks");
}

function saveCubeSettingsAndContent() {
  const id = document.getElementById("editCubeId").value;
  const block = legoBlocks.find(b => b.id === id);
  if (!block) return;

  block.name = document.getElementById("editCubeTitle").value.trim() || block.name;
  block.icon = document.getElementById("editCubeIcon").value;
  block.size = document.getElementById("editCubeSize").value;
  block.height = document.getElementById("editCubeHeight").value;
  block.color = document.getElementById("editCubeColor").value;

  const type = document.getElementById("editCubeContentType").value;
  if (type === "default") {
    block.customContent = { type: "default" };
  } else {
    block.customContent = {
      type,
      text: document.getElementById("editCubeCustomText").value,
      mediaUrl: document.getElementById("editCubeMediaUrl").value.trim(),
      caption: document.getElementById("editCubeMediaCaption").value.trim(),
      embedCode: document.getElementById("editCubeEmbedCode").value.trim(),
      quicklinks: document.getElementById("editCubeQuicklinksData").value.trim()
    };
  }

  applyLegoLayout();
  closeCubeContentModal();
  showLegoToast(`💾 "${block.name}" kubigi yangilandi!`);
}

function resetCubeCustomContent() {
  const id = document.getElementById("editCubeId").value;
  const block = legoBlocks.find(b => b.id === id);
  if (!block) return;

  block.customContent = { type: "default" };
  applyLegoLayout();
  closeCubeContentModal();
  showLegoToast(`🔄 "${block.name}" asl holatiga qaytarildi!`);
}

function deleteCurrentCustomCube() {
  const id = document.getElementById("editCubeId").value;
  if (!confirm("Ushbu kubikni butunlay o'chirmoqchimisiz?")) return;

  legoBlocks = legoBlocks.filter(b => b.id !== id);
  const el = document.getElementById(id);
  if (el) el.remove();

  applyLegoLayout();
  closeCubeContentModal();
  showLegoToast("🗑️ Kubik o'chirildi!");
}

// ==================== YANGI KUBIK YARATISH ====================
function openNewCubeModal() {
  const modal = document.getElementById("newCubeModal");
  if (!modal) return;
  document.getElementById("newCubeTitle").value = "";
  document.getElementById("newCubeContentData").value = "";
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("modal-active");
}

function closeNewCubeModal() {
  const modal = document.getElementById("newCubeModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("modal-active");
  }
}

function createNewLegoCube() {
  const title = document.getElementById("newCubeTitle").value.trim();
  if (!title) {
    alert("Iltimos, kubik nomini kiriting!");
    return;
  }

  const size = document.getElementById("newCubeSize").value;
  const color = document.getElementById("newCubeColor").value;
  const type = document.getElementById("newCubeContentType").value;
  const data = document.getElementById("newCubeContentData").value.trim();

  const newId = "cube_custom_" + Date.now();
  const iconMap = {
    text: "fa-solid fa-note-sticky",
    embed: "fa-solid fa-code",
    media: "fa-solid fa-photo-film",
    quicklinks: "fa-solid fa-rocket"
  };

  const newBlock = {
    id: newId,
    name: title,
    icon: iconMap[type] || "fa-solid fa-cube",
    visible: true,
    size: size,
    height: "auto",
    color: color,
    customContent: {
      type: type,
      text: type === "text" ? data : "",
      mediaUrl: type === "media" ? data : "",
      embedCode: type === "embed" ? data : "",
      quicklinks: type === "quicklinks" ? data : ""
    }
  };

  legoBlocks.unshift(newBlock);
  applyLegoLayout();
  closeNewCubeModal();
  showLegoToast(`🎉 Yangi "${title}" kubigi yaratildi va sahifaga qo'shildi!`);
}

// ==================== KIBER-ESLATMALAR (QUICK NOTES) ====================
function saveLegoQuickNote() {
  const area = document.getElementById("legoQuickNoteTextarea");
  if (!area) return;
  const note = area.value;
  localStorage.setItem("muzaffarzed_quick_note", note);
  const status = document.getElementById("legoNoteSavedStatus");
  if (status) {
    status.textContent = "✓ Muvaffaqiyatli saqlandi! (" + new Date().toLocaleTimeString() + ")";
    status.className = "text-emerald-400";
    setTimeout(() => {
      status.textContent = "● Xotirada saqlanadi";
      status.className = "";
    }, 2500);
  }
  showLegoToast("📝 Qayd xotirada saqlandi!");
}

function loadLegoQuickNote() {
  const area = document.getElementById("legoQuickNoteTextarea");
  if (!area) return;
  const saved = localStorage.getItem("muzaffarzed_quick_note");
  if (saved) area.value = saved;
}

// ==================== LEGO STUDIO MODAL LIST ====================
function openLegoStudio() {
  const modal = document.getElementById("legoStudioModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("modal-active");
  }
  renderLegoStudioList();
}

function closeLegoStudio() {
  const modal = document.getElementById("legoStudioModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("modal-active");
  }
}

function renderLegoStudioList() {
  const list = document.getElementById("legoBlocksList");
  if (!list) return;
  list.innerHTML = "";

  const sizeLabels = { quarter: "1/4", third: "1/3", half: "1/2", "two-thirds": "2/3", full: "1/1" };

  legoBlocks.forEach((block, index) => {
    const card = document.createElement("div");
    card.className = `lego-block-item ${block.visible ? '' : 'is-hidden'}`;

    card.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="lego-pos-badge">#${index + 1}</span>
        <div class="w-8 h-8 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center text-xs">
          <i class="${block.icon || 'fa-solid fa-cube'}"></i>
        </div>
        <div>
          <h4 class="text-xs font-bold text-white">${block.name}</h4>
          <div class="flex items-center gap-2 mt-0.5">
            <span class="text-[10px] ${block.visible ? 'text-emerald-400' : 'text-slate-500'} font-semibold">
              ${block.visible ? '● Faol' : '○ Yashirilgan'}
            </span>
            <span class="text-[9px] text-slate-400 font-mono">Eni: ${sizeLabels[block.size || 'full']}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-1.5">
        <button onclick="cycleCubeSize('${block.id}')" class="lego-btn-move text-[10px]" title="Hajmini almashtirish">
          📐
        </button>
        <button onclick="openCubeContentModal('${block.id}')" class="lego-btn-move text-[10px]" title="Ichini sozlash">
          ✏️
        </button>
        <button onclick="toggleLegoBlockVisibility(${index})" class="lego-btn-move" title="${block.visible ? 'Yashirish' : 'Ko\'rsatish'}">
          <i class="fa-solid ${block.visible ? 'fa-eye text-emerald-400' : 'fa-eye-slash text-slate-500'}"></i>
        </button>
        <button onclick="moveLegoBlock(${index}, -1)" class="lego-btn-move" ${index === 0 ? 'disabled' : ''} title="Yuqoriga surish">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
        <button onclick="moveLegoBlock(${index}, 1)" class="lego-btn-move" ${index === legoBlocks.length - 1 ? 'disabled' : ''} title="Pastga surish">
          <i class="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    `;
    list.appendChild(card);
  });
}

function moveLegoBlock(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= legoBlocks.length) return;

  const temp = legoBlocks[index];
  legoBlocks[index] = legoBlocks[targetIndex];
  legoBlocks[targetIndex] = temp;

  applyLegoLayout();
  renderLegoStudioList();
}

function toggleLegoBlockVisibility(index) {
  legoBlocks[index].visible = !legoBlocks[index].visible;
  applyLegoLayout();
  renderLegoStudioList();
}

function applyLegoPreset(preset) {
  if (preset === "all") {
    legoBlocks = JSON.parse(JSON.stringify(DEFAULT_LEGO_BLOCKS));
  } else if (preset === "cinema") {
    const order = ["lego_hero", "lego_filters", "kinolar", "kanallar", "maqolalar", "musiqa", "dasturlar", "galereya", "lego_stats", "lego_quicklinks", "lego_notes"];
    legoBlocks.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    legoBlocks.forEach(b => {
      b.visible = (b.id !== "dasturlar");
      if (b.id === "kinolar") b.size = "full";
      if (b.id === "kanallar") b.size = "half";
    });
  } else if (preset === "software") {
    const order = ["dasturlar", "lego_quicklinks", "kanallar", "maqolalar", "lego_hero", "kinolar", "musiqa", "galereya", "lego_stats", "lego_filters", "lego_notes"];
    legoBlocks.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    legoBlocks.forEach(b => { 
      b.visible = true; 
      if (b.id === "dasturlar") b.size = "two-thirds";
      if (b.id === "lego_quicklinks") b.size = "third";
    });
  } else if (preset === "music") {
    const order = ["musiqa", "galereya", "kanallar", "lego_hero", "kinolar", "dasturlar", "maqolalar", "lego_stats", "lego_quicklinks", "lego_notes", "lego_filters"];
    legoBlocks.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    legoBlocks.forEach(b => { 
      b.visible = true; 
      if (b.id === "musiqa") b.size = "two-thirds";
      if (b.id === "galereya") b.size = "third";
    });
  }

  applyLegoLayout();
  renderLegoStudioList();
  showLegoToast("🌟 Lego shabloni qo'llandi!");
}

function resetLegoLayout() {
  legoBlocks = JSON.parse(JSON.stringify(DEFAULT_LEGO_BLOCKS));
  applyLegoLayout();
  renderLegoStudioList();
  showLegoToast("🔄 Barcha kubiklar asl holatiga qaytarildi!");
}

function exportLegoSetup() {
  const data = JSON.stringify(legoBlocks, null, 2);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(data).then(() => {
      alert("Sizning shaxsiy Lego konfiguratsiyangiz nusxalandi! Uni istalgan qurilmada zaxiradan tiklashingiz mumkin.");
    }).catch(() => {
      prompt("Lego konfiguratsiyangiz:", data);
    });
  } else {
    prompt("Lego konfiguratsiyangiz:", data);
  }
}


// ==================== 10. SHAXSIY LEGO PROFIL & KREATOR SAYTI (PERSONAL LEGO MINI-SITE) ====================
let currentViewedCreator = null;

function openPersonalLegoSite(userId) {
  const user = users.find(u => u.id === userId || u.username === userId);
  if (!user) return;
  currentViewedCreator = user;

  const modal = document.getElementById("personalLegoSiteModal");
  if (!modal) return;

  document.getElementById("creatorSiteName").textContent = user.name;
  document.getElementById("creatorSiteHandle").textContent = "@" + user.username + " • Shaxsiy Kubiklar Galaktikasi";
  document.getElementById("creatorSiteAvatar").src = user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80";
  document.getElementById("creatorSiteBioTitle").textContent = user.name;
  document.getElementById("creatorSiteBio").textContent = user.bio || "Kreator kanali";
  document.getElementById("creatorSiteSubCount").textContent = (user.subscribers || 0).toLocaleString();

  // Foydalanuvchining o'z yuklagan materiallari
  const userItems = [
    ...softwareList.filter(s => s.authorId === user.id && s.privacy !== "private"),
    ...movies.filter(m => m.authorId === user.id && m.privacy !== "private"),
    ...tracks.filter(t => t.authorId === user.id && t.privacy !== "private"),
    ...photos.filter(p => p.authorId === user.id && p.privacy !== "private"),
    ...articles.filter(a => a.authorId === user.id && a.privacy !== "private")
  ];
  document.getElementById("creatorSiteUploadCount").textContent = userItems.length;

  // Egasi bo'lsa: "Saytimni Yig'ish" tugmasi
  const isOwner = currentUser && currentUser.id === user.id;
  const editBtn = document.getElementById("editMyLegoSiteBtn");
  if (editBtn) editBtn.style.display = isOwner ? "inline-flex" : "none";

  // Obuna tugmasi
  const isSubscribed = userSubscriptions.includes(user.id);
  const subBtn = document.getElementById("creatorSiteSubscribeBtn");
  if (subBtn) {
    subBtn.innerHTML = isSubscribed ? '<i class="fa-solid fa-check mr-1"></i> Obunadasiz' : '<i class="fa-solid fa-bell mr-1"></i> Obuna bo\'lish';
    subBtn.className = isSubscribed ? "px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-emerald-400 border border-emerald-500/40" : "btn-emerald px-5 py-2.5 text-xs font-bold shadow-emerald-500/30";
  }

  // Shaxsiy Lego sozlamalarini yuklash
  const siteConfig = getStoredData("user_site_" + user.id, {
    theme: "emerald",
    showMovies: true,
    showMusic: true,
    showApps: true,
    showPhotos: true,
    showArticles: true
  });

  renderCreatorSiteGrid(user, siteConfig);

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("modal-active");
}

function closePersonalLegoSite() {
  const modal = document.getElementById("personalLegoSiteModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("modal-active");
  }
}

function toggleEditMyLegoSite() {
  const panel = document.getElementById("creatorSiteEditPanel");
  if (!panel || !currentViewedCreator) return;
  panel.classList.toggle("hidden");

  const siteConfig = getStoredData("user_site_" + currentViewedCreator.id, {
    theme: "emerald",
    showMovies: true,
    showMusic: true,
    showApps: true,
    showPhotos: true,
    showArticles: true
  });

  document.getElementById("creatorSiteThemeSelect").value = siteConfig.theme || "emerald";
  document.getElementById("creatorSiteBioInput").value = currentViewedCreator.bio || "";
  document.getElementById("showCubeMovies").checked = siteConfig.showMovies !== false;
  document.getElementById("showCubeMusic").checked = siteConfig.showMusic !== false;
  document.getElementById("showCubeApps").checked = siteConfig.showApps !== false;
  document.getElementById("showCubePhotos").checked = siteConfig.showPhotos !== false;
  document.getElementById("showCubeArticles").checked = siteConfig.showArticles !== false;
}

function saveMyLegoSiteSettings() {
  if (!currentViewedCreator || !currentUser || currentUser.id !== currentViewedCreator.id) return;

  const theme = document.getElementById("creatorSiteThemeSelect").value;
  const bio = document.getElementById("creatorSiteBioInput").value.trim();
  const showMovies = document.getElementById("showCubeMovies").checked;
  const showMusic = document.getElementById("showCubeMusic").checked;
  const showApps = document.getElementById("showCubeApps").checked;
  const showPhotos = document.getElementById("showCubePhotos").checked;
  const showArticles = document.getElementById("showCubeArticles").checked;

  const config = { theme, showMovies, showMusic, showApps, showPhotos, showArticles };
  setStoredData("user_site_" + currentViewedCreator.id, config);

  if (bio) {
    currentViewedCreator.bio = bio;
    setStoredData("users", users);
    document.getElementById("creatorSiteBio").textContent = bio;
    renderUserAccount();
    renderChannels();
  }

  renderCreatorSiteGrid(currentViewedCreator, config);
  document.getElementById("creatorSiteEditPanel").classList.add("hidden");
  alert("Tabriklaymiz! Sizning shaxsiy Lego saytingiz muvaffaqiyatli saqlandi!");
}

function toggleSubscribeFromSite() {
  if (!currentViewedCreator) return;
  toggleSubscribe(currentViewedCreator.id);
  openPersonalLegoSite(currentViewedCreator.id);
}

function renderCreatorSiteGrid(user, config) {
  const grid = document.getElementById("creatorSiteLegoGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const userMovies = movies.filter(m => m.authorId === user.id && m.privacy !== "private");
  const userTracks = tracks.filter(t => t.authorId === user.id && t.privacy !== "private");
  const userApps = softwareList.filter(s => s.authorId === user.id && s.privacy !== "private");
  const userPhotos = photos.filter(p => p.authorId === user.id && p.privacy !== "private");
  const userArticles = articles.filter(a => a.authorId === user.id && a.privacy !== "private");

  let cubeCount = 0;

  // 1. Videolar Kubigi
  if (config.showMovies && userMovies.length > 0) {
    cubeCount++;
    const cube = document.createElement("div");
    cube.className = "lego-cube lego-size-half cube-color-emerald p-5";
    cube.innerHTML = `
      <div class="lego-stud-bar">
        <div class="lego-studs-group"><div class="lego-stud"></div><div class="lego-stud"></div></div>
        <div class="lego-cube-tag"><i class="fa-solid fa-film"></i> <span>Videolarim & Kinolar (${userMovies.length})</span></div>
      </div>
      <div class="space-y-3 pt-3">
        ${userMovies.map(m => `
          <div onclick="openCinemaModal('${m.id}')" class="flex items-center gap-3 p-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 cursor-pointer transition">
            <img src="${m.poster}" class="w-12 h-14 rounded-lg object-cover">
            <div class="truncate">
              <h5 class="text-xs font-bold text-white truncate">${m.title}</h5>
              <span class="text-[10px] text-emerald-400 font-mono">${m.quality} • ${m.year}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    grid.appendChild(cube);
  }

  // 2. Dasturlar & APK Kubigi
  if (config.showApps && userApps.length > 0) {
    cubeCount++;
    const cube = document.createElement("div");
    cube.className = "lego-cube lego-size-half cube-color-blue p-5";
    cube.innerHTML = `
      <div class="lego-stud-bar">
        <div class="lego-studs-group"><div class="lego-stud"></div><div class="lego-stud"></div></div>
        <div class="lego-cube-tag"><i class="fa-solid fa-cube"></i> <span>Dasturlarim (${userApps.length})</span></div>
      </div>
      <div class="space-y-3 pt-3">
        ${userApps.map(s => `
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80">
            <div class="flex items-center gap-2.5 truncate">
              <img src="${s.icon}" class="w-10 h-10 rounded-xl object-cover">
              <div class="truncate">
                <h5 class="text-xs font-bold text-white truncate">${s.title}</h5>
                <span class="text-[10px] text-slate-400 font-mono">${s.version} • ${s.size}</span>
              </div>
            </div>
            <a href="${s.downloadUrl}" target="_blank" onclick="incrementSoftwareDownloads('${s.id}')" class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-xs font-bold">
              Yuklash
            </a>
          </div>
        `).join('')}
      </div>
    `;
    grid.appendChild(cube);
  }

  // 3. Musiqalar Kubigi
  if (config.showMusic && userTracks.length > 0) {
    cubeCount++;
    const cube = document.createElement("div");
    cube.className = "lego-cube lego-size-half cube-color-cyan p-5";
    cube.innerHTML = `
      <div class="lego-stud-bar">
        <div class="lego-studs-group"><div class="lego-stud"></div><div class="lego-stud"></div></div>
        <div class="lego-cube-tag"><i class="fa-solid fa-music"></i> <span>Musiqiy Treklari (${userTracks.length})</span></div>
      </div>
      <div class="space-y-2 pt-3">
        ${userTracks.map((t, idx) => `
          <div onclick="playTrack(${tracks.indexOf(t)})" class="flex items-center justify-between p-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 cursor-pointer transition text-xs">
            <div class="flex items-center gap-2.5 truncate">
              <img src="${t.cover}" class="w-9 h-9 rounded-lg object-cover">
              <span class="font-bold text-white truncate">${t.title}</span>
            </div>
            <i class="fa-solid fa-play text-cyan-400"></i>
          </div>
        `).join('')}
      </div>
    `;
    grid.appendChild(cube);
  }

  // 4. Galereya Kubigi
  if (config.showPhotos && userPhotos.length > 0) {
    cubeCount++;
    const cube = document.createElement("div");
    cube.className = "lego-cube lego-size-half cube-color-purple p-5";
    cube.innerHTML = `
      <div class="lego-stud-bar">
        <div class="lego-studs-group"><div class="lego-stud"></div><div class="lego-stud"></div></div>
        <div class="lego-cube-tag"><i class="fa-solid fa-images"></i> <span>Fotolar (${userPhotos.length})</span></div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-3">
        ${userPhotos.slice(0, 4).map(p => `
          <img src="${p.url}" onclick="openLightbox(${JSON.stringify(p).replace(/"/g, '&quot;')})" class="w-full h-24 object-cover rounded-xl cursor-pointer hover:scale-105 transition">
        `).join('')}
      </div>
    `;
    grid.appendChild(cube);
  }

  // 5. Postlar Kubigi
  if (config.showArticles && userArticles.length > 0) {
    cubeCount++;
    const cube = document.createElement("div");
    cube.className = "lego-cube lego-size-full cube-color-gold p-5";
    cube.innerHTML = `
      <div class="lego-stud-bar">
        <div class="lego-studs-group"><div class="lego-stud"></div><div class="lego-stud"></div></div>
        <div class="lego-cube-tag"><i class="fa-solid fa-newspaper"></i> <span>Maqolalar & Postlar (${userArticles.length})</span></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
        ${userArticles.map(a => `
          <div onclick="openArticleModal(${JSON.stringify(a).replace(/"/g, '&quot;')})" class="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 cursor-pointer transition">
            <h5 class="text-xs font-bold text-white line-clamp-1">${a.title}</h5>
            <p class="text-[11px] text-slate-400 line-clamp-2 mt-1">${a.content}</p>
          </div>
        `).join('')}
      </div>
    `;
    grid.appendChild(cube);
  }

  document.getElementById("creatorSiteCubeCount").textContent = cubeCount + " ta kubik";
}




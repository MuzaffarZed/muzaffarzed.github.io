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
  renderMovies();
  renderTracks();
  renderGallery();
  renderArticles();
  updateFavBadge();
  setupAudioEvents();
  setupSearchEvents();
});

// ==================== 1. KINOLARNI CHIQARISH (RENDER MOVIES) ====================
function renderMovies() {
  const container = document.getElementById("moviesGrid");
  const countBadge = document.getElementById("moviesCount");
  container.innerHTML = "";

  let filtered = [...movies];

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

  tracks.forEach((track, index) => {
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

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
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
    nextTrack();
  });
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

  photos.forEach(photo => {
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

  articles.forEach(art => {
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
    version: "2026.1",
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

      setStoredData("movies", movies);
      setStoredData("tracks", tracks);
      setStoredData("photos", photos);
      setStoredData("articles", articles);
      setStoredData("favorites", favorites);
      setStoredData("comments", movieComments);

      renderMovies();
      renderTracks();
      renderGallery();
      renderArticles();
      updateFavBadge();
      alert("Barcha ma'lumotlar zaxiradan muvaffaqiyatli tiklandi!");
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
    movieComments = {};

    renderMovies();
    renderTracks();
    renderGallery();
    renderArticles();
    updateFavBadge();
    alert("Barcha ma'lumotlar zavod holatiga qaytarildi!");
    closeAdminModal();
  }
}

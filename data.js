// YouTube Clone Mock Database
// Dasturchi: MuzaffarZed - Universal Browser Compatible

const sampleVideos = [
  {
    id: "v-ai-agi-2026",
    title: "AGI va Sun'iy Intellektning Yangi Davri: MuzaffarZed Maxsus Arxitekturasi",
    category: "AI & Neural Networks",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    duration: "24:18",
    durationSec: 1458,
    views: "1.4M views",
    viewsCount: 1420500,
    timestamp: "2 days ago",
    publishedDate: "Oct 26, 2026",
    channel: {
      id: "ch-muzaffarzed",
      name: "MuzaffarZed Tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      subscribers: "840K subscribers",
      verified: true
    },
    likes: 85200,
    dislikes: 310,
    description: `Janob Muzaffarning maxsus masterklassi: Zamonaviy sun'iy intellekt, avtonom agentlar va AGI arxitekturasini noldan professional darajada loyihalash sirlari.

📌 Mundarija:
00:00 - Kirish va MuzaffarZed falsafasi
02:15 - AGI arxitekturasi va Multiagent tizimlar
07:40 - Kognitiv xotira va Second Brain integratsiyasi
14:20 - Real vaqtda test va Zero-Defect standarti
19:50 - Kelajak xulosalari va amaliy maslahatlar

🔗 Loyiha kodlari va manbalar: https://github.com/MuzaffarZed
#AI #AGI #MuzaffarZed #ArtificialIntelligence #Python #TechUzbekistan`,
    comments: [
      {
        id: "c-1",
        author: "Alisher_Dev",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
        text: "Muzaffar aka, bu arxitektura bo'yicha tushuntirish shunchaki daho darajasida bo'libdi! Ayniqsa kognitiv xotira qismi haqiqiy yangilik.",
        likes: 1240,
        time: "1 day ago"
      },
      {
        id: "c-2",
        author: "TechSamarkand",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
        text: "Zero-defect standarti har bir o'zbek dasturchisi o'rganishi shart bo'lgan eng oliy madaniyat!",
        likes: 580,
        time: "18 hours ago"
      },
      {
        id: "c-3",
        author: "Malika_InTech",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        text: "Keyingi videoda mobil ilovalar uchun avtonom agentlar haqida ham chiqarib bering, iltimos!",
        likes: 342,
        time: "5 hours ago"
      }
    ]
  },
  {
    id: "v-web-dev-pro",
    title: "10 daqiqada To'liq Fullstack Veb Ilova Yaratish (React 19 + Tailwind)",
    category: "Web Development",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    duration: "10:45",
    durationSec: 645,
    views: "520K views",
    viewsCount: 520000,
    timestamp: "5 days ago",
    publishedDate: "Oct 23, 2026",
    channel: {
      id: "ch-frontend-ninja",
      name: "Frontend Master Pro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      subscribers: "1.2M subscribers",
      verified: true
    },
    likes: 42100,
    dislikes: 120,
    description: `React 19 ning eng so'nggi imkoniyatlari bilan yashin tezligida ishlaydigan Single Page ilova qurish.

00:00 - Proyekt tuzilishi
03:10 - Tailwind CSS 4.0 yangiliklari
06:40 - State management va Hooklar
09:20 - Production deploy`,
    comments: [
      {
        id: "c-4",
        author: "Jasur_Coder",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
        text: "Juda lo'nda va aniq darslik bo'libdi, rahmat katta!",
        likes: 95,
        time: "3 days ago"
      }
    ]
  },
  {
    id: "v-sci-fi-cinema",
    title: "Koinot Sirlari: Qora Tuynuklar va Vaqt Nisbiyligi (4K Ultra HD)",
    category: "Science",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    duration: "18:22",
    durationSec: 1102,
    views: "2.8M views",
    viewsCount: 2800000,
    timestamp: "1 month ago",
    publishedDate: "Sep 28, 2026",
    channel: {
      id: "ch-cosmos-uz",
      name: "Cosmos & Ilm-Fan",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      subscribers: "650K subscribers",
      verified: true
    },
    likes: 195000,
    dislikes: 420,
    description: `Koinotning eng sirli hodisasi bo'lgan qora tuynuklar qa'riga virtual sayohat. Eynshteyn nazariyasidan tortib eng yangi Jeyms Uebb teleskopi kashfiyotlarigacha.`,
    comments: []
  },
  {
    id: "v-gaming-gta-pro",
    title: "GTA VI - Real Hayot Grafikasi Bilan 60 FPS Sinov va Sirli Missiyalar!",
    category: "Gaming",
    videoUrl: "https://filesamples.com/samples/video/mp4/sample_960x540.mp4",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    duration: "32:10",
    durationSec: 1930,
    views: "980K views",
    viewsCount: 980000,
    timestamp: "1 week ago",
    publishedDate: "Oct 21, 2026",
    channel: {
      id: "ch-gamezone",
      name: "CyberArena Uzbekistan",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80",
      subscribers: "410K subscribers",
      verified: true
    },
    likes: 72000,
    dislikes: 310,
    description: `Yangi avlod grafikasi va Vice City shahrining eng qiziqarli yashirin lokatsiyalarini birgalikda o'rganamiz!`,
    comments: []
  },
  {
    id: "v-uzb-nature-4k",
    title: "O'zbekistonning Sehrli Tabolati: Zomin va Chimyon Tog'lari (4K 60FPS)",
    category: "Nature",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80",
    duration: "15:40",
    durationSec: 940,
    views: "430K views",
    viewsCount: 430000,
    timestamp: "3 weeks ago",
    publishedDate: "Oct 07, 2026",
    channel: {
      id: "ch-discover-uz",
      name: "Sayyoh Uzbekistan",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      subscribers: "290K subscribers",
      verified: true
    },
    likes: 38000,
    dislikes: 80,
    description: `Dron orqali suratga olingan O'zbekiston tog'lari, soflik va tinchlik bag'ishlovchi meditatsion tabiat videoroligi.`,
    comments: []
  },
  {
    id: "v-lofi-chill-beats",
    title: "Dasturlash va Diqqatni Jamlash Uchun Lofi Hip Hop Beats [Tinchlantiruvchi Musiqa]",
    category: "Music",
    videoUrl: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
    duration: "45:00",
    durationSec: 2700,
    views: "3.2M views",
    viewsCount: 3200000,
    timestamp: "2 months ago",
    publishedDate: "Aug 29, 2026",
    channel: {
      id: "ch-lofi-station",
      name: "Tashkent Lofi Beats",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      subscribers: "1.8M subscribers",
      verified: true
    },
    likes: 210000,
    dislikes: 600,
    description: `Kod yozish, kitob o'qish va chuqur diqqatni jamlash uchun maxsus tayyorlangan tinchlantiruvchi musiqalar to'plami.`,
    comments: []
  },
  {
    id: "v-phone-review-2026",
    title: "Eng Kuchli Flagman Smartfonlar Taqqoslovi: iPhone 18 Pro Max vs Galaxy S26 Ultra",
    category: "Smartphones",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
    thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    duration: "19:12",
    durationSec: 1152,
    views: "760K views",
    viewsCount: 760000,
    timestamp: "4 days ago",
    publishedDate: "Oct 24, 2026",
    channel: {
      id: "ch-texno-sharh",
      name: "Texno Sharhlar Uz",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      subscribers: "530K subscribers",
      verified: true
    },
    likes: 54000,
    dislikes: 190,
    description: `Kamera imkoniyatlari, batareya quvvati, sun'iy intellekt chiplari va real hayotdagi qulaylik sinovi.`,
    comments: []
  },
  {
    id: "v-cyber-security-uz",
    title: "Kiberxavfsizlik Asoslari: Qanday qilib Parollar va Shaxsiy Ma'lumotlarni Himoyalash Kerak?",
    category: "Cybersecurity",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    duration: "13:50",
    durationSec: 830,
    views: "310K views",
    viewsCount: 310000,
    timestamp: "6 days ago",
    publishedDate: "Oct 22, 2026",
    channel: {
      id: "ch-muzaffarzed",
      name: "MuzaffarZed Tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      subscribers: "840K subscribers",
      verified: true
    },
    likes: 29000,
    dislikes: 45,
    description: `Kiberjinoyatchilardan himoyalanish, 2FA, apparat kalitlari va xavfsiz dasturiy arxitektura bo'yicha eng muhim qo'llanma.`,
    comments: []
  },
  {
    id: "v-podcast-it-leaders",
    title: "O'zbekiston IT Eksporti 1 Milliard Dollarga Qanday Yetadi? (Katta Podkast)",
    category: "Podcasts",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=80",
    duration: "58:34",
    durationSec: 3514,
    views: "640K views",
    viewsCount: 640000,
    timestamp: "2 weeks ago",
    publishedDate: "Oct 14, 2026",
    channel: {
      id: "ch-it-park-pod",
      name: "IT Suhbatlar",
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80",
      subscribers: "320K subscribers",
      verified: true
    },
    likes: 49000,
    dislikes: 110,
    description: `O'zbekistondagi yetakchi startap asoschilari va dasturiy ta'minot kompaniyalari rahbarlari bilan ochiq suhbat.`,
    comments: []
  }
];

const sampleShorts = [
  {
    id: "sh-1",
    title: "AI 1 soniyada butun dastur kodini tahlil qilganda! 🚀 #shorts #coding",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    channel: "MuzaffarZed Tech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    likes: "245K",
    comments: "3.2K",
    sound: "MuzaffarZed - Original Audio"
  },
  {
    id: "sh-2",
    title: "Dasturchilar hayotidan 1 kun: 10 ta xato va 1 ta nuqta-vergul 😂 #shorts",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    channel: "Frontend Master Pro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    likes: "180K",
    comments: "1.9K",
    sound: "Lofi Beats Chill - Trending"
  },
  {
    id: "sh-3",
    title: "Koinotdagi eng tez harakatlanuvchi yulduz qaysi? 🌌 #shorts #space",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
    channel: "Cosmos & Ilm-Fan",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    likes: "420K",
    comments: "5.1K",
    sound: "Hans Zimmer - Interstellar Theme"
  }
];

const categories = [
  "All",
  "AI & Neural Networks",
  "Web Development",
  "Gaming",
  "Science",
  "Music",
  "Nature",
  "Smartphones",
  "Cybersecurity",
  "Podcasts",
  "Live Now"
];

// Attach to window for universal access across module and non-module environments
window.YT_DATA = {
  sampleVideos,
  sampleShorts,
  categories
};

# 🚀 MuzaffarZed Media Portal — To'liq Qo'llanma va Bepul Serverga Yuklash

Ushbu loyiha **janob Muzaffar** uchun maxsus ishlab chiqilgan bo'lib, **Uzmovi.com** va **Aslmedia.net** standartlaridagi kinolar, musiqalar, fotogalereya va shaxsiy blog platformasidir.

---

## 1. ⚡ Mahalliy Kompyuterda Hoziroq Ishga Tushirish
Loyihani o'z kompyuteringizda darhol ko'rish uchun:
1. `C:\Users\MuzaffarZed\ai_workspace\muzaffarzed-portal` papkasiga o'ting.
2. Terminalda quyidagi buyruqni bering:
   ```bash
   python serve.py
   ```
3. Brauzerda avtomatik ravishda `http://localhost:3000` manzili ochiladi.

---

## 2. 🌐 Saytni 100% BEPUL Serverga Yuklash (Vercel yoki Cloudflare Pages)

Saytingiz butun dunyoga ko'rinishi va doimiy bepul ishlashi uchun 2 ta eng kuchli platforma mavjud:

### 1-variant: Vercel (Tavsiya etiladi — Eng tezkor va sodda)
1. **GitHub.com** saytiga kiring va yangi repository oching (masalan: `muzaffarzed-portal`).
2. Loyihani GitHub'ga yuklang:
   ```bash
   git remote add origin https://github.com/SIZNING_PROFILINGIZ/muzaffarzed-portal.git
   git push -u origin master
   ```
3. **Vercel.com** ga kirib, **"Add New Project"** orqali `muzaffarzed-portal`ni tanlang va **Deploy** tugmasini bosing!
4. Bir necha soniyada sizga `https://muzaffarzed.vercel.app` bepul xalqaro domeni beriladi.

### 2-variant: Cloudflare Pages (Cheksiz Trafik va Toshkentda yuqori tezlik)
1. **Cloudflare.com** saytiga kiring -> **Workers & Pages** -> **Create application** -> **Pages**.
2. GitHub profilingizni ulab, `muzaffarzed-portal`ni tanlang.
3. Build sozlamalari talab qilinmaydi (Build command bo'sh, Output directory: `/`).
4. **Save and Deploy** bosing — bepul `https://muzaffarzed.pages.dev` domeni tayyor bo'ladi!

---

## 3. 📱 PWA (Progressive Web App) — Mobil Ilova
* Sayt to'liq PWA standartida qurilgan.
* Telefoningizda yoki kompyuteringizda saytga kirganda brauzer menyusida yoki sarlavhada **"📱 Ilova sifatida o'rnatish"** tugmasi chiqadi.
* Bosishingiz bilan telefonga Google Play'siz mustaqil apk-dastur kabi o'rnatiladi va oflayn rejimda ham ochiladi!

---

## 4. 🎛️ Yangi Qo'shilgan Super Funksiyalar
1. **📸 Kadrdan Rasm Olish (Screenshot):** Film tomosha qilayotganda istalgan kadrni 1 bosishda toza HD rasm qilib yuklab olish.
2. **🪟 Picture-in-Picture (PiP):** Videoni kichik suzuvchi oynaga chiqarib, sayt bo'ylab musiqa yoki galereyani tomosha qilib yuraverish.
3. **⏪ 10s Orqaga / ⏩ 10s Oldinga:** Qulay vaqt o'tkazish tugmalari.
4. **⏱️ Oxirgi to'xtagan joyidan davom ettirish:** Filmni yopib qayta ochsangiz, u qayerda to'xtagan bo'lsangiz o'sha soniyadan davom etadi.
5. **🎨 5 Ta Kinematografik Mavzular:** Zumrad, Oltin VIP, Safir Moviy, Yoqut Qizil va Ametist.
6. **🎧 Ovoz Ekvayzeri (Web Audio API):** Bass Boost, Toza Vokal, Elektron 3D va Kino Zali teatrlashtirilgan ovoz rejimlari.
7. **📜 Qo'shiq Matni (Lyrics):** Qo'shiq so'zlarini tomosha qilib eshitish.
8. **📱 Mobil Smart Dock:** Telefon ekranida pastki ixcham ilova menyusi.

---

## 3. 🔍 Google Qidiruvida "MuzaffarZed" deb chiqishini faollashtirish

Saytingiz kodiga barcha zarur **Google Schema.org (JSON-LD)** va **SEO Meta teglar** kiritilgan. Uni Google qidiruviga tezlashtirib kiritish uchun:

1. **Google Search Console** (`https://search.google.com/search-console`) ga kiring.
2. Saytingiz manzilini kiriting: `https://muzaffarzed.vercel.app`.
3. HTML-tag orqali tasdiqlash kodini oling va `index.html` faylidagi ushbu qatorga qo'ying:
   ```html
   <meta name="google-site-verification" content="SIZNING_GOOGLE_KODINGIZ" />
   ```
4. **Sitemaps** bo'limiga o'tib, quyidagi manzilni kiriting:
   ```
   https://muzaffarzed.vercel.app/sitemap.xml
   ```
5. Bo'ldi! 2-4 kun ichida Google qidiruvida `MuzaffarZed` deb yozilganda sizning saytingiz rasmiy natijalar qatorida paydo bo'ladi.

---

## 4. 🎬 Katta Hajmdagi Videolarni TEKIN Joylash Sirlari (Uzmovi / Aslmedia uslubi)

Katta hajmdagi 4K va Full HD videolarni tekin saqlash uchun 3 ta eng qulay usul:

1. **Telegram CDN usuli (Eng ommabop):**
   - Videoni Telegramdagi yopiq kanalingizga yuklaysiz.
   - Maxsus bepul botlar orqali unga to'g'ridan-to'g'ri MP4 oqim havolasini olasiz va sayt Admin paneliga kiritasiz.
2. **YouTube (Unlisted / Cheklangan ro'yxat):**
   - Videoni YouTubega yuklab, kirish rejimini *"Dostup po ssylke"* qilib qo'yasiz.
   - Havolasini sayt adminiga qo'ysangiz, sayt uni to'liq reklamasiz va qulay pleyerda ochib beradi.
3. **Google Drive / Archive.org:**
   - To'g'ridan-to'g'ri tekin bulutga yuklab, to'g'ridan-to'g'ri MP4 havolasini ulashingiz mumkin.

---

## 5. 🔐 Boshqaruv Paneli (Admin CMS)
* Saytning yuqori o'ng burchagidagi **"Admin"** tugmasini bosing.
* Standart xavfsizlik paroli: **`MuzaffarZed2026`**
* Bu yerda siz:
  - Yangi Kinolar
  - Musiqalar
  - Rasmlar
  - Maqolalarni
  bir bosishda qo'shishingiz, tahrirlashingiz yoki zaxira nusxasini (JSON) yuklab olishingiz mumkin.

---
*Dasturchi: MuzaffarZed*

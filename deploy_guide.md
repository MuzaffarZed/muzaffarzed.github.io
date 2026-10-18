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

## 2. 🌐 Saytni 100% BEPUL Serverga Yuklash (Vercel yoki Cloudflare)

Saytingiz butun dunyoga ko'rinishi va doimiy bepul ishlashi uchun **Vercel** eng mukammal yechimdir:

### 1-usul: GitHub orqali (Eng qulay va avtomatik)
1. **GitHub.com** saytiga kiring va yangi repository oching (masalan: `muzaffarzed-portal`).
2. Loyihani GitHub'ga yuklang:
   ```bash
   git init
   git add .
   git commit -m "MuzaffarZed Media Portal ilk versiya"
   git branch -M main
   git remote add origin https://github.com/SIZNING_PROFILINGIZ/muzaffarzed-portal.git
   git push -u origin main
   ```
3. **Vercel.com** saytiga kirib, GitHub profilingiz orqali kiring.
4. **"Add New Project"** tugmasini bosing va `muzaffarzed-portal` repozitoriyasini tanlang.
5. **Deploy** tugmasini bosing! 15 soniyada sizga bepul havola beriladi:  
   👉 `https://muzaffarzed.vercel.app`

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

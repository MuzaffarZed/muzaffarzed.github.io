# -*- coding: utf-8 -*-
import json
import os
import re

INDEXNOW_KEY = "a89c25f7e1b4421b8d34e90812cf67a1"
WORKSPACE = r"C:\Users\MuzaffarZed\ai_workspace\youtube_clone"

# 1. Create IndexNow key file
key_file_path = os.path.join(WORKSPACE, f"{INDEXNOW_KEY}.txt")
with open(key_file_path, "w", encoding="utf-8") as f:
    f.write(INDEXNOW_KEY)
print(f"Created IndexNow key file: {key_file_path}")

# 2. Update index.html with FAQ Schema and IndexNow meta
index_path = os.path.join(WORKSPACE, "index.html")
with open(index_path, "r", encoding="utf-8") as f:
    html = f.read()

faq_schema = """
  <!-- FAQ Schema for Google Rich Snippets & People Also Ask Dominance -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "YouTube Pro nima?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YouTube Pro — MuzaffarZed tomonidan yaratilgan, 100% bepul, reklamalarsiz, 4K video, audio booster va qulay interfeysga ega zamonaviy video platforma."
        }
      },
      {
        "@type": "Question",
        "name": "YouTube Pro dasturchisi kim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YouTube Pro platformasining muallifi va bosh dasturiy arxitektori — MuzaffarZed (Muzaffar)."
        }
      },
      {
        "@type": "Question",
        "name": "YouTube Pro ilovasini qanday o'rnatish mumkin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Saytga kirib 'Ilovani o'rnatish' tugmasini yoki mobil brauzerda 'Bosh ekranga qo'shish' (Add to Home screen) tugmasini bosish orqali telefon va kompyuterga bir zumda o'rnatiladi."
        }
      },
      {
        "@type": "Question",
        "name": "YouTube Pro'da reklamalar bormi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yo'q, YouTube Pro'da hech qanday majburiy videooldi yoki video o'rtasidagi reklamalar yo'q, barchasi 100% toza va bepul."
        }
      }
    ]
  }
  </script>
  <meta name="indexnow-key" content="a89c25f7e1b4421b8d34e90812cf67a1">
  <link rel="alternate" hreflang="uz" href="https://muzaffarzed.github.io/">
  <link rel="alternate" hreflang="x-default" href="https://muzaffarzed.github.io/">
"""

if 'FAQ Schema for Google Rich Snippets' not in html:
    html = html.replace('</head>', faq_schema + '\n</head>')
    print("Added FAQ Schema and IndexNow tags to index.html")
else:
    print("FAQ Schema already present")

with open(index_path, "w", encoding="utf-8") as f:
    f.write(html)

# 3. Update README.md with high-authority backlink
readme_path = os.path.join(WORKSPACE, "README.md")
readme_content = """# 🚀 YouTube Pro — MuzaffarZed Supreme Edition (2026)

[![Live Demo](https://img.shields.io/badge/🌐_JONLI_SAYT-muzaffarzed.github.io-red?style=for-the-badge&logo=youtube)](https://muzaffarzed.github.io/)
[![Author](https://img.shields.io/badge/Dasturchi-MuzaffarZed-blue?style=for-the-badge)](https://github.com/MuzaffarZed)
[![License](https://img.shields.io/badge/Xarajat-$0_Bepul-green?style=for-the-badge)]()

> **Rasmiy Jonli Veb-Ilova:** [👉 https://muzaffarzed.github.io/](https://muzaffarzed.github.io/)  
> **Muallif va Bosh Arxitektor:** [MuzaffarZed](https://github.com/MuzaffarZed) (Muzaffar)  
> **Standart:** Zero-Defect, Zero-Beta, Mutlaq Mukammallik  

---

## 🌟 Asosiy Xususiyatlar & Ustunliklar

- 🛡️ **100% Reklamasiz (Zero Ads):** YouTube Premium darajasidagi tajriba mutlaqo bepul.
- 📱 **Telefonga Bir Zumda Ulash:** QR Kod va mDNS orqali telefon kamerasini qaratib ochish.
- 🔊 **300% Ovoz Kuchaytirgich (Audio Booster):** Past ovozli videolarda ovozni 3 baravargacha balandlatish.
- 🎬 **Kinoteatr Zoom to Fill:** 21:9 formatdagi videolarni qora chekkalarsiz ekranga to'liq moslash (`Z` tugmasi).
- ⏱️ **Uxlatish Taymeri (Sleep Timer):** 10, 15, 30, 45, 60 daqiqadan so'ng yoki video tugaganda avtomatik to'xtash.
- 📦 **PWA Ilova:** Telefon va Windows kompyuterda alohida ilova sifatida bir klikda o'rnatish.
- 🌐 **24/7 Global Uptime ($0 Xarajat):** GitHub Pages Global CDN orqali butun dunyoda uzluksiz ishlaydi.

---

## 🌐 Saytga Kirish:
Saytdan to'g'ridan-to'g'ri foydalanish uchun brauzeringizda oching:
👉 **[https://muzaffarzed.github.io/](https://muzaffarzed.github.io/)**

*Dasturchi: MuzaffarZed*
"""

with open(readme_path, "w", encoding="utf-8") as f:
    f.write(readme_content)
print("README.md updated with authoritative backlink to https://muzaffarzed.github.io/")

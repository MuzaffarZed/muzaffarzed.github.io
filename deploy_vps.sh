#!/usr/bin/env bash
# ==============================================================================
# YouTube Pro — MuzaffarZed Supreme Edition
# Linux VPS (Ubuntu / Debian) Avtomatlashtirilgan O'rnatish Skripti
# Dasturchi: MuzaffarZed
# ==============================================================================

set -e

echo "🚀 [MuzaffarZed Deploy] Tizim yangilanmoqda va zarur paketlar o'rnatilmoqda..."
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3 python3-pip python3-venv ffmpeg nginx curl git

PROJECT_DIR="/var/www/youtube_clone"
echo "📂 [MuzaffarZed Deploy] Loyiha papkasi: $PROJECT_DIR"

if [ ! -d "$PROJECT_DIR" ]; then
    sudo mkdir -p "$PROJECT_DIR"
    sudo chown -R $USER:$USER "$PROJECT_DIR"
fi

# Virtual muhit yaratish
cd "$PROJECT_DIR"
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

# Systemd Servisi yaratish (Avtomatik orqa fonda ishlash va qayta yuklanish uchun)
SERVICE_FILE="/etc/systemd/system/youtube_pro.service"
echo "⚙️ [MuzaffarZed Deploy] Systemd servisi yaratilmoqda: $SERVICE_FILE"

sudo bash -c "cat > $SERVICE_FILE" <<EOL
[Unit]
Description=YouTube Pro - MuzaffarZed Supreme Edition
After=network.target

[Service]
User=$USER
WorkingDirectory=$PROJECT_DIR
ExecStart=$PROJECT_DIR/venv/bin/python api_server.py
Restart=always
RestartSec=5
Environment=PYTHONUNBUFFERED=1

[Install]
WantedBy=multi-user.target
EOL

sudo systemctl daemon-reload
sudo systemctl enable youtube_pro
sudo systemctl restart youtube_pro

echo "✅ [MuzaffarZed Deploy] YouTube Pro xizmati muvaffaqiyatli ishga tushdi!"
echo "🌐 Mahalliy tekshirish: curl http://127.0.0.1:8000"

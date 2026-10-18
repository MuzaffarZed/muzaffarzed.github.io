#!/usr/bin/env python3
"""
MuzaffarZed Media Portal — Mustaqil Doimiy Fon Xizmati
Dasturchi: MuzaffarZed
"""

import subprocess
import time
import re
import os
import sys
import urllib.request

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
CLOUDFLARED_BIN = r"C:\Program Files (x86)\cloudflared\cloudflared.exe"
LOG_FILE = os.path.join(DIRECTORY, "cloudflared_live.log")
URL_FILE = os.path.join(DIRECTORY, "active_live_url.txt")

DETACHED_FLAGS = 0x00000008 | 0x00000200  # DETACHED_PROCESS | CREATE_NEW_PROCESS_GROUP

def is_port_listening(port):
    try:
        urllib.request.urlopen(f"http://127.0.0.1:{port}", timeout=1)
        return True
    except Exception:
        return False

def start_services():
    # 1. Mahalliy HTTP serverni tekshirish va ishga tushirish
    if not is_port_listening(PORT):
        print(f"[*] Port {PORT} bo'sh, mahalliy server ishga tushirilmoqda...")
        pythonw = os.path.join(os.path.dirname(sys.executable), "pythonw.exe")
        if not os.path.exists(pythonw):
            pythonw = sys.executable
        
        serve_script = os.path.join(DIRECTORY, "serve.py")
        subprocess.Popen(
            [pythonw, serve_script],
            cwd=DIRECTORY,
            creationflags=DETACHED_FLAGS,
            close_fds=True
        )
        time.sleep(2)
    else:
        print(f"[+] Port {PORT} allaqachon ishlab turibdi.")

    # 2. Cloudflared jarayonini tozalab, yangidan mustaqil fonda ishga tushirish
    subprocess.run(["taskkill", "/F", "/IM", "cloudflared.exe"], capture_output=True)
    time.sleep(1)

    with open(LOG_FILE, "w", encoding="utf-8") as log:
        pass

    log_writer = open(LOG_FILE, "a", encoding="utf-8")

    print("[*] Cloudflare Global Tunnel ishga tushirilmoqda...")
    cmd = [CLOUDFLARED_BIN, "tunnel", "--url", f"http://127.0.0.1:{PORT}"]
    subprocess.Popen(
        cmd,
        cwd=DIRECTORY,
        stdout=log_writer,
        stderr=log_writer,
        creationflags=DETACHED_FLAGS,
        close_fds=True
    )

    # 3. Logdan yangi URL ni o'qib olish
    tunnel_url = None
    for _ in range(30):
        time.sleep(1)
        if os.path.exists(LOG_FILE):
            with open(LOG_FILE, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
                matches = re.findall(r"https://[a-zA-Z0-9\-]+\.trycloudflare\.com", content)
                if matches:
                    tunnel_url = matches[-1]
                    break

    if tunnel_url:
        with open(URL_FILE, "w", encoding="utf-8") as f:
            f.write(tunnel_url)
        print("=" * 60)
        print("[+] JONLI HAVOLA TAYYOR!")
        print(f"[+] URL: {tunnel_url}")
        print("=" * 60)
        
        # Test HTTP
        for _ in range(10):
            try:
                req = urllib.request.Request(tunnel_url, headers={'User-Agent': 'Mozilla/5.0'})
                res = urllib.request.urlopen(req, timeout=5)
                if res.status == 200:
                    print("[+] CLOUDFLARE 200 OK! SAYT TO'LIQ ISHLAMOQDA!")
                    return tunnel_url
            except Exception as e:
                time.sleep(1)
        return tunnel_url
    else:
        print("[-] URL topilmadi!")
        return None

if __name__ == "__main__":
    start_services()

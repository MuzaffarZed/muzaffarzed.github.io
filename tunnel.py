#!/usr/bin/env python3
"""
MuzaffarZed Media Portal — Cloudflare Global Tunnel Launcher
Dasturchi: MuzaffarZed
"""

import subprocess
import re
import sys
import os

if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

CLOUDFLARED_BIN = r"C:\Program Files (x86)\cloudflared\cloudflared.exe"
PORT = 3000
URL_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public_url.txt")

def start_tunnel():
    print(f"[*] Starting Cloudflare Tunnel for http://127.0.0.1:{PORT}...")
    cmd = [CLOUDFLARED_BIN, "tunnel", "--url", f"http://127.0.0.1:{PORT}"]
    
    proc = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        bufsize=1
    )
    
    tunnel_url = None
    
    # Read stderr line by line
    for line in proc.stderr:
        print(line, end="")
        match = re.search(r"https://[a-zA-Z0-9\-]+\.trycloudflare\.com", line)
        if match:
            tunnel_url = match.group(0)
            print("\n" + "=" * 60)
            print("[+] MUZAFFARZED MEDIA PORTAL INTERNETDA JONLI ISHLAMOQDA!")
            print(f"[+] Bepul Xalqaro Havola (HTTPS): {tunnel_url}")
            print("[+] Dasturchi: MuzaffarZed")
            print("=" * 60 + "\n")
            with open(URL_FILE, "w", encoding="utf-8") as f:
                f.write(tunnel_url)
            break
            
    # Keep reading in background to keep process alive and log traffic
    for line in proc.stderr:
        pass
        
    proc.wait()

if __name__ == "__main__":
    start_tunnel()

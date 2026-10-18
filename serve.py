#!/usr/bin/env python3
"""
MuzaffarZed Media Portal — Mahalliy Server Launcher
Dasturchi: MuzaffarZed
"""

import http.server
import socketserver
import webbrowser
import os
import sys

# Windows cp1251 encoding himoyasi
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    global PORT
    for attempt in range(10):
        try:
            with socketserver.TCPServer(("", PORT), Handler) as httpd:
                url = f"http://localhost:{PORT}"
                print("=" * 60)
                print("[+] MUZAFFARZED MEDIA PORTAL ISHGA TUSHDI!")
                print(f"[+] Manzil: {url}")
                print(f"[+] Papka: {DIRECTORY}")
                print("[+] Dasturchi: MuzaffarZed")
                print("[+] To'xtatish uchun: Ctrl + C bosing")
                print("=" * 60)
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                httpd.serve_forever()
                break
        except OSError:
            PORT += 1

if __name__ == "__main__":
    run()

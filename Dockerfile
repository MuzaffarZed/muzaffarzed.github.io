# YouTube Pro - MuzaffarZed Supreme Edition Dockerfile
FROM python:3.12-slim

# Install system dependencies (ffmpeg for video/audio processing)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Expose server port
EXPOSE 8000

# Start server
CMD ["python", "api_server.py"]

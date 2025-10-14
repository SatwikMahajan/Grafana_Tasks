#  Grafana 

This document covers **two core tasks** performed during the Grafana customization and integration process:

1. **Grafana Canvas Panel Custom Animated SVG Elements**  
2. **Streaming Live Video Feeds to Grafana using go2rtc**  

---

## 🧩 Task 1: Grafana Canvas Panel Custom Animated SVG Elements

### **Procedure**

1. **Clone Repository**
   ```bash
   git clone https://github.com/grafana/grafana.git

2. **Create Your Custom SVG** 
  - Design a custom SVG with properly defined IDs for each animated part.
  - Use Figma or similar design tools.

3. **Create a React Display Component**
  - Build a React display component for the SVG animation.

4. **Save and Register**
  - Save your code as a .tsx file inside:
    ```bash
    public/app/features/canvas/elements

5. **Register it as a new advanced element in**
   ```bash 
   registry.tsx

6. **Install Dependencies**
   ```bash 
   yarn install immutable

7. **Start Frontend**
   ```bash
   yarn start

8. **Start Grafana Server**
   ```bash
   make run
   
9. **Verify**
  - The element should now appear under the Advanced Elements dropdown.
  - Elements can be customized for different parameter values.


<img width="1244" height="673" alt="Screenshot 2025-10-09 at 10 29 59 PM" src="https://github.com/user-attachments/assets/93aa62a5-7791-4769-87ae-c8de8caea297" />

## 📹 Task 2: Streaming Live Video Feeds to Grafana using go2rtc

### **Procedure**

1. **Download Docker Images**
   ```bash
   docker pull alexxit/go2rtc
   docker pull grafana/grafana

2. **Modify Configuration**
   ```bash
   go2rtc-config/go2rtc.yaml

3. **Create Dashboard File**
  - Reference the dashboard.json file (attached in repo).
  - Update the iframe section with the video stream URL from go2rtc.

4. **Create Docker Compose File**
  - Define Grafana and go2rtc as services in
    ```bash 
    docker-compose.yaml

5. **Setup Folder Structure**
  - Place both dashboard.json and docker-compose.yaml inside one folder.

6. **Run Services**
    ```bash
    docker compose up -d

7. **Access the Services**
  - Grafana → http://localhost:3000
  - go2rtc → http://localhost:1984

8. **Customize Dashboard**
  - Embed the dashboard.json file into Grafana.
  - The live stream will appear on your Grafana dashboard.


<img width="952" height="474" alt="Screenshot 2025-10-09 at 10 37 21 PM" src="https://github.com/user-attachments/assets/9d8e47e1-d102-46a3-bf96-3db1e0a2fd8a" />

  - Final Outcome of stream - 

<img width="707" height="534" alt="Screenshot 2025-10-09 at 10 37 43 PM" src="https://github.com/user-attachments/assets/42937c76-d55f-45d1-96f4-6153b829539d" />

**Reference Docs**
  - https://volkovlabs.io/blog/pizzeria-canvas-20230723
  - GitHub – AlexxIT/go2rtc : Ultimate camera streaming application with support for RTSP, RTMP, WebRTC, HLS, FFmpeg, etc.
  - GitHub – cxnturi0n/grafana-livecamera-rtsp-webrtc : Embed RTSP live camera feed into Grafana using go2rtc streaming server.


---
description: How to deploy the project for free using Vercel and Render
---

# Free Hosting Guide (Vercel + Render)

This guide explains how to host your full-stack application for **free** using Vercel (Frontend) and Render (Backend).

## Prerequisites
1.  **GitHub Repository**: Push your code to a public or private GitHub repository.

---

## Part 1: Deploy Backend to Render (Free Tier)
Render offers a free tier for Node.js web services. Note that free instances spin down after 15 minutes of inactivity and take about 30 seconds to wake up on the next request.

1.  **Sign up/Login** at [dashboard.render.com](https://dashboard.render.com/).
2.  Click **"New +"** and select **"Web Service"**.
3.  Connect your GitHub repository.
4.  **Configure the Service**:
    *   **Name**: `code-sync-backend` (or similar)
    *   **Root Directory**: `server` (Important!)
    *   **Environment**: `Node`
    *   **Build Command**: `npm install && npm run build`
        *   *Note: This runs `tsc` to compile TypeScript to JavaScript.*
    *   **Start Command**: `npm start`
    *   **Instance Type**: Free
5.  Click **"Create Web Service"**.
6.  Wait for the deployment to finish. **Copy the URL** provided (e.g., `https://code-sync-backend.onrender.com`).

---

## Part 2: Deploy Frontend to Vercel (Free Tier)
Vercel is the creators of Next.js and provides excellent, zero-config hosting for React/Vite apps.

1.  **Sign up/Login** at [vercel.com](https://vercel.com/).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository.
4.  **Configure the Project**:
    *   **Framework Preset**: Vite (should be auto-detected)
    *   **Root Directory**: Click "Edit" and select `client`.
5.  **Environment Variables**:
    *   Expand the "Environment Variables" section.
    *   **Key**: `VITE_BACKEND_URL`
    *   **Value**: Paste your Render Backend URL from Part 1 (e.g., `https://code-sync-backend.onrender.com`).
6.  Click **"Deploy"**.

---

## Part 3: Final Testing
1.  Open your **Vercel App URL**.
2.  The first time you connect, the backend might be "asleep". Give it 30-60 seconds to wake up.
3.  Once connected, you should see the room interface.
4.  Open the URL in a second tab or device to test real-time collaboration!

### Troubleshooting
*   **CORS Errors**: If the frontend cannot talk to the backend, ensure your backend `server.ts` has CORS enabled for `*` or your specific Vercel domain. (Currently, your project is set to `origin: "*"` which allows everyone, so this should work out of the box).
*   **Socket Connection**: If the socket doesn't connect, check the browser console. Use the standard HTTPS URL for the backend; Socket.io handles the protocol upgrade automatically.

# Deployment Guide

This guide explains how to deploy the **Code Sync** application with the frontend on **Netlify** and the backend on **Render**.

## Prerequisites

-   A GitHub account.
-   This project pushed to a GitHub repository.
-   Accounts on [Netlify](https://www.netlify.com/) and [Render](https://render.com/).

---

## Part 1: Deploy Backend to Render

1.  **Log in to Render** and go to your Dashboard.
2.  Click **"New +"** and select **"Web Service"**.
3.  Connect your GitHub repository.
4.  Configure the service:
    -   **Name**: `code-sync-backend` (or any name you prefer).
    -   **Region**: Choose the one closest to you.
    -   **Branch**: `main` (or your default branch).
    -   **Root Directory**: `server` (Important: Only the server code needs to be here).
    -   **Runtime**: `Node`
    -   **Build Command**: `npm install && npm run build`
    -   **Start Command**: `npm start`
    -   **Plan**: Free (or whichever you prefer).
5.  Click **"Create Web Service"**.
6.  Wait for the deployment to finish. Once done, copy the **onrender.com URL** (e.g., `https://code-sync-backend.onrender.com`). You will need this for the frontend.

---

## Part 2: Deploy Frontend to Netlify

1.  **Log in to Netlify** and go to "Sites".
2.  Click **"Add new site"** -> **"Import from existing project"**.
3.  Select **GitHub** and authorize if needed.
4.  Pick your repository.
5.  Configure the build settings:
    -   **Base directory**: `client`
    -   **Build command**: `npm run build`
    -   **Publish directory**: `client/dist` (Netlify might auto-detect `dist`, but make sure it says `client/dist`).
6.  **Environment Variables**:
    -   Click on **"Add environment variables"** (or go to Site Settings > Environment variables later).
    -   Add a new variable:
        -   **Key**: `VITE_BACKEND_URL`
        -   **Value**: The Render URL you copied earlier (e.g., `https://code-sync-backend.onrender.com`).
            -   *Note: Do not include a trailing slash `/` at the end.*
7.  Click **"Deploy code-sync-client"**.

---

## Troubleshooting

-   **CORS Issues**: If you see connection errors, ensure the Backend is running and the `VITE_BACKEND_URL` is correct. The backend is configured to accept connections from any origin (`*`).
-   **Page Not Found on Refresh**: We added a `client/public/_redirects` file to handle routing (SPA support) on Netlify. If you get 404 errors on refresh, ensure this file exists and is being deployed.
-   **Slow Backend**: The Render Free tier spins down after inactivity. It might take 50+ seconds to wake up on the first request.


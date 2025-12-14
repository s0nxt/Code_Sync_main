---
description: How to deploy the frontend to AWS
---

# Deploying Frontend to AWS

You can host your React + Vite frontend on AWS using **AWS Amplify** (easiest) or **Amazon S3 + CloudFront** (manual control).

## Option 1: AWS Amplify (Recommended)
AWS Amplify is the easiest way to deploy modern web apps. It handles CI/CD, SSL, and global CDN automatically.

1. **Push your code** to a Git repository (GitHub, GitLab, Bitbucket, or AWS CodeCommit).
2. **Log in to the AWS Console** and search for **AWS Amplify**.
3. Click **"Create new app"** -> **"Host web app"**.
4. Select your Git provider (e.g., GitHub) and authorize AWS.
5. Select your repository and branch (`main`).
6. **Build Settings**: Amplify should auto-detect the settings. Verify them:
   - **Base directory**: `client` (Important: since your frontend is in a subdirectory)
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
7. Click **"Save and Deploy"**.

Amplify will now build your app and deploy it. You will get a live URL (e.g., `https://main.d12345.amplifyapp.com`).

---

## Option 2: S3 + CloudFront (Manual Static Hosting)
Use this if you want full control over the infrastructure or want to host a static site cheaply without CI/CD.

### 1. Build the Project
Run the build command locally to generate the static files:
```bash
cd client
npm run build
```
This creates a `dist` folder in `client/dist`.

### 2. Create an S3 Bucket
1. Go to **S3** in AWS Console.
2. Click **Create bucket**.
3. Name it (e.g., `my-code-sync-app`).
4. **Uncheck "Block all public access"** (if you are NOT using CloudFront OAI, but CloudFront is recommended).
   - *Better Security*: Keep public access BLOCKED and use CloudFront to serve it.
5. Create the bucket.

### 3. Upload Files
1. Open the bucket.
2. Upload the **contents** of the `client/dist` folder (index.html, assets folder, etc.).

### 4. Set up CloudFront (CDN)
1. Go to **CloudFront**.
2. Click **Create Distribution**.
3. **Origin Domain**: Select your S3 bucket.
4. **S3 Bucket Access**: Choose "Yes use OAI (Origin Access Identity)" -> "Create new OAI" -> "Yes, update bucket policy". (This keeps your bucket private but lets the world see your site).
5. **Viewer Protocol Policy**: "Redirect HTTP to HTTPS".
6. **Default Root Object**: `index.html`.
7. **Error Pages**:
   - Create Custom Error Response.
   - HTTP Error Code: `403` and `404`.
   - Customize Error Response: "Yes".
   - Response Page Path: `/index.html`.
   - Response Code: `200`.
   - *Why?* This is significant for React Router (Single Page Apps) to handle direct links to subpages.
8. Click **Create Distribution**.

Your site will be live at the provided CloudFront domain (e.g., `d123.cloudfront.net`).

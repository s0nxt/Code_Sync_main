# Project Directory Structure and Explanation

This document provides a detailed overview of the directory structure for the **Code-Sync** project. It explains the purpose of each major directory and subdirectory to help you navigate the codebase effectively.

## Root Directory
The root directory contains the main project configuration and separates the application into two distinct parts: the client (frontend) and the server (backend).

- **`.github/`**: Contains GitHub-specific configurations, such as GitHub Actions workflows for CI/CD pipelines.
- **`.vscode/`**: Contains configuration files for Visual Studio Code, such as workspace settings or recommended extensions.
- **`client/`**: This directory houses the entire frontend application code, built with React and Vite.
- **`server/`**: This directory contains the backend server code, built with Node.js, Express, and Socket.io.

---

## Client Directory (`/client`)
The `client` folder is a standard Vite + React project structure. It handles the user interface and client-side logic.

### Core Configuration Files
- **`package.json`**: Lists frontend dependencies (like React, TailwindCSS, Socket.io-client) and scripts (dev, build, lint).
- **`vite.config.ts`**: Configuration for the Vite build tool.
- **`tsconfig.json`**: TypeScript configuration settings for the frontend.
- **`tailwind.config.ts`**: Configuration for Tailwind CSS styling.

### Source Code (`/client/src`)
This is where the actual application logic resides.

- **`api/`**: Contains functions and modules for making HTTP requests to the backend API (e.g., using Axios).
- **`assets/`**: Stores static assets such as images, icons, and global stylesheets that are imported directly into components.
- **`components/`**: Contains reusable UI components (e.g., buttons, modals, editor views) that are used across different pages. These are the building blocks of the UI.
- **`context/`**: Implements React Context API providers to manage global state (e.g., user authentication state, current file context, socket connection state) accessible throughout the app.
- **`hooks/`**: Contains custom React hooks to encapsulate reusable logic (e.g., hooks for handling socket events, form handling, or window resizing).
- **`pages/`**: Contains the main page components that correspond to different routes in the application (e.g., `Home` page, `Editor` page).
- **`resources/`**: Likely contains static data, constants, or text resources used throughout the application.
- **`styles/`**: Contains global CSS files or specific style modules if not using Tailwind exclusively.
- **`types/`**: Defines TypeScript interfaces and types to ensure type safety across the application (e.g., User types, File types, Socket event types).
- **`utils/`**: Helper functions and utility classes that perform common tasks (e.g., date formatting, string manipulation, validation logic).
- **`App.tsx`**: The main root component that sets up routing and global providers.
- **`main.tsx`**: The entry point of the React application where the App is mounted to the DOM.

---

## Server Directory (`/server`)
The `server` folder contains the backend logic, responsible for handling real-time collaboration, file operations, and API requests.

### Core Configuration Files
- **`package.json`**: Lists backend dependencies (like Express, Socket.io, Nodemon) and scripts.
- **`tsconfig.json`**: TypeScript configuration settings for the backend.

### Source Code (`/server/src`)
- **`server.ts`**: The entry point of the backend application. It initializes the Express app, sets up the Socket.io server, and listens for incoming connections. It likely handles the core logic for room management and real-time event broadcasting.
- **`types/`**: Defines TypeScript interfaces and types specific to the backend logic (e.g., Socket payloads, API response structures).

---

## Summary
- **Frontend (`client`)**: Handles what the user sees and interacts with. It communicates with the server via HTTP (for initial data) and WebSockets (for real-time updates).
- **Backend (`server`)**: Manages the "rooms" for collaboration, broadcasts code changes to other users, and keeps the state synchronized.

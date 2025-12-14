# Code Sync

A collaborative, real-time code editor where users can seamlessly code together. It provides a platform for multiple users to enter a room, share a unique room ID, and collaborate on code simultaneously.

## 🔮 Features

- 💻 **Real-time Collaboration**: Edit code together across multiple files instantly.
- 📁 **File Management**: Create, open, edit, save, delete, and organize files and folders.
- 💾 **Download Code**: Option to download the entire codebase as a zip file.
- 🚀 **Room System**: Unique room generation with room IDs for secure collaboration.
- 🌍 **Language Support**: Comprehensive support for various programming languages.
- 🌈 **Syntax Highlighting**: Auto-language detection and highlighting.
- 🚀 **Code Execution**: Execute code directly within the environment (supported languages).
- ⏱️ **Instant Sync**: Updates are synchronized across all connected users in real-time.
- 📣 **Notifications**: Alerts for user join/leave events.
- 👥 **User Presence**: See who is online and currently editing.
- 💬 **Group Chat**: Real-time chat functionality for team communication.
- 🎨 **Customization**: Multiple themes, font sizes, and font families.
- 🤖 **AI Copilot**: AI-powered assistant to generate and insert code.
- ✏️ **Collaborative Drawing**: Whiteboard feature for sketching ideas.

## 💻 Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, Socket.io
- **Tools**: Git

## ⚙️ Installation

### Prerequisites
- Node.js installed on your machine.

### Steps

1. **Clone the repository** (if you haven't already).

2. **Setup Environment Variables**

   Create a `.env` file in the `client` directory:
   ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```

   Create a `.env` file in the `server` directory:
   ```env
   PORT=3000
   ```

3. **Install Dependencies**

   Navigate to the root directory and install dependencies for the entire project:
   ```bash
   npm install
   ```

4. **Start the Application**

   Start both the Backend Server and Frontend Client with a single command:
   ```bash
   npm run dev
   ```



5. **Access the App**
   Open your browser and go to `http://localhost:5173`.

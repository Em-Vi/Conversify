# Conversify: AI Chat Application

Conversify is an AI-powered chat application built using the MERN stack (MongoDB, Express, React, Node.js). It leverages OpenAI's GPT-4 model to provide intelligent and conversational responses. The application supports user authentication using JSON Web Tokens (JWT) and features a modern user interface with Material-UI (MUI).

---

## Features

1. **AI Chat**:
   - Chat with an AI assistant named "Conversify."
   - AI responses powered by OpenAI's GPT-4 model.

2. **User Authentication**:
   - Secure signup and login functionality.
   - JWT-based authentication for secure user sessions.

3. **Chat History**:
   - Persistent chat history for each user.
   - Ability to clear chat history.

4. **Responsive UI**:
   - Built using Material-UI for a modern and responsive design.

---

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data and chat history.
- **OpenAI API**: GPT-4 model for AI responses.
- **JSON Web Tokens (JWT)**: Authentication mechanism.

### Frontend
- **React**: Library for building user interfaces.
- **Material-UI (MUI)**: Component library for a modern UI.
- **React Router**: For navigation between pages.

---

## Installation and Setup

### Prerequisites
1. Node.js and npm installed on your system.
2. MongoDB set up locally or using a cloud service like MongoDB Atlas.
3. OpenAI API key.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/conversify.git
   cd conversify
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     OPENAI_API_KEY=your_openai_api_key
     ```

4. Start the application:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

5. Open the application:
   - Visit `http://localhost:3000` in your browser.

---

## API Endpoints

### User Authentication
- **POST** `/signup`: User registration.
- **POST** `/login`: User login.
- **GET** `/verify`: Verify user token.
- **POST** `/logout`: User logout.

### Chat
- **POST** `/chat`: Send a message to the AI.
- **GET** `/chats`: Retrieve user chat history.
- **DELETE** `/chats`: Clear chat history.

---

## Folder Structure

```
conversify/
|-- backend/
|   |-- controllers/       # Business logic (Chat, User)
|   |-- models/            # Mongoose models (User)
|   |-- routes/            # API routes
|   |-- utils/             # Utility functions (JWT, OpenAI config)
|   |-- server.js          # Application entry point
|
|-- frontend/
    |-- src/
        |-- components/    # Reusable UI components
        |-- context/       # Context for Auth
        |-- pages/         # Main pages (Chat, Login, Signup)
        |-- App.js         # Main application file
```

---

## How It Works

1. **Authentication**:
   - Users sign up or log in to access the application.
   - JWTs are used to manage user sessions securely.

2. **Chat Functionality**:
   - Messages are sent to the backend and processed using OpenAI's GPT-4 model.
   - The chat history is updated on both the frontend and backend for persistence.

3. **Database**:
   - User data and chat history are stored in MongoDB.

---

## Future Enhancements

1. Integration with more AI models for diverse responses.
2. Real-time chat using WebSockets.
3. Multi-language support.
4. Dark mode for the UI.

---

## License

This project is licensed under the MIT License.

---
# Acknowledgements

I would like to thank the following organizations for their invaluable resources and support:

- OpenAI: For providing the GPT-4 API, which powers the Conversify AI chat functionality.
- FreeCodeCamp: For offering free, high-quality coding tutorials that helped in the development of this application.
- IndianCoders: For being a great community of developers from India, who share knowledge and provide support to fellow programmers.

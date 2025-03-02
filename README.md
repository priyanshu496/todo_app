# MERN Stack Todo List Application

A full-stack Todo List application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- Create, read, update, and delete todos
- Mark todos as completed
- Responsive design for mobile and desktop
- Real-time updates

## Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

## Installation & Setup

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/mern-todo-app
   PORT=5000
   ```
   
   Note: Replace the MongoDB URI with your own if using Atlas or a different port.

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

The project is organized into two main directories:

- `client`: Contains the React.js frontend application
- `server`: Contains the Express.js backend application

## API Endpoints

| Method | Endpoint      | Description          |
|--------|---------------|----------------------|
| GET    | /api/todos    | Get all todos        |
| POST   | /api/todos    | Create a new todo    |
| PATCH  | /api/todos/:id| Update a todo        |
| DELETE | /api/todos/:id| Delete a todo        |

## Technologies Used

- **MongoDB**: Document database for storing todos
- **Express.js**: Backend web application framework
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime environment
- **Axios**: Promise-based HTTP client for making API requests
- **React Icons**: Icon library for React applications
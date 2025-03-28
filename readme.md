# Node.js Authentication API with JWT and MongoDB

## Overview
This is a Node.js-based authentication API using **JWT (JSON Web Token)** for authentication, **MongoDB (Mongoose)** for database management, and **Bcrypt.js** for password hashing. It supports user registration, login, profile retrieval, and profile updates.

## Features
- User registration with hashed password storage
- JWT-based authentication
- Secure login with password validation
- Protected routes using authentication middleware
- Profile retrieval and updates
- MongoDB integration using Mongoose

## Technologies Used
- **Node.js** - Backend framework
- **Express.js** - Web framework for Node.js
- **MongoDB & Mongoose** - Database and ODM
- **JWT (jsonwebtoken)** - Authentication mechanism
- **Bcrypt.js** - Secure password hashing
- **Dotenv** - Environment variable management

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo.git
cd your-repo
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the Server
```sh
npm start
```
The API will be available at: `http://localhost:5000`

## API Endpoints

### **Public Routes**
#### **User Registration**
`POST /api/public/register`
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "address": "123 Street, City"
}
```

#### **User Login**
`POST /api/public/login`
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "token": "jwt_token_here"
}
```

### **Protected Routes** (Require JWT Token)
#### **Get User Profile**
`GET /api/protected/profile`
- **Headers:** `Authorization: jwt_token_here`

#### **Update Profile**
`PUT /api/protected/profile`
```json
{
  "name": "Updated Name",
  "address": "New Address",
  "bio": "Updated Bio",
  "profilePicture": "image_url"
}
```

## Middleware
- **authMiddleware.js**: Verifies JWT token and attaches user info to `req.user`.




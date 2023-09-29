# Blogging Platform

This is a simple Blogging Platform built using Node.js, Express, JWT for authentication, bcrypt.js for password hashing, and MongoDB with Mongoose as the database.

## Features

- User authentication using JWT
- Password hashing using bcrypt.js
- CRUD operations for blog posts
- MongoDB for data storage

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine
- MongoDB installed and running
- (Optional) Postman or any API testing tool

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blogging-platform.git

2. Install dependencies:

   ```bash
   npm install

3. Set up environment variables
   - Create a .env file in the root of the project and provide the following variables:
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your-blog
   JWT_SECRET=your-secret-key
Modify the values accordingly.

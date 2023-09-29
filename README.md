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

    ```bash
    PORT=8000
    DB_NAME=websiteLearnerTask
    DB_USERNAME= your own database access username
    DB_PASSWORD=your own database access password
    PRIVATE_KEY= jwt private key with RSA256 algorithm of 2048 bytes
    PUBLIC_KEY= jwt public key according to your private key
Modify the values accordingly.


4. Run the application

     ```bash
    npm start
The application should be running on http://localhost:3000.

5. Open the Postman extenstion or Postman desktop application 
  - create a New HTTP Request
- start typing the endpoints in the URL and type the data in the body as raw of type JSON

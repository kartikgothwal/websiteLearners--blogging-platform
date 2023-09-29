# websiteLearners-Task--blogging-platform

This is a simple Blogging Platform built using Node.js, Express, JWT for authentication, bcrypt.js for password hashing, and MongoDB with Mongoose as the database.

## Features

- User authentication using JWT
- Password hashing using bcrypt.js
- **User Authentication**
  - Register a new user
  - Authenticate and login a user

- **Blog Management**
  - Signed in users can create a new blog
  - Signed in users can access all the blogs
  - Signed in users can access your own blogs
  - Signed in users can edit a blog (own blog)
  - Signed in users can delete a blog (own blog)

- **Commenting**
  -  Signed in users can comment on any blog
  -  Signed in users can edit own comment
  -  Signed in users can access comments on the blog
  -  Signed in users can delete own comment

## Technologies Used
  - NodeJS
  - ExpressJS
  - MongoDB
  - Mongoose
  - JWT Authenticate
  - bcrypt.JS

## Tool/Software Used
  - Postman

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine
- MongoDB atlas account with database access user
- Postman or any API testing tool for request handling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/websiteLearners--blogging-platform.git

2. Install dependencies:

   ```bash
   npm install

3. Set up environment variables
- Create a .env file in the root of the project and provide the following variables:

    ```bash
    PORT=8000
    DB_NAME=websiteLearnerTask
    DB_USERNAME= your own database access username
    DB_PASSWORD= your own database access password
    PRIVATE_KEY= jwt private key with RSA256 algorithm of 2048 bytes
    PUBLIC_KEY= jwt public key according to your private key
Modify the values accordingly.

Make sure to change this URL in index.js file if needed ``mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ejahxrh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority``

4. Run the application

     ```bash
    npm start
The application should be running on http://localhost:8000.

5. Open the Postman extenstion or Postman desktop application 
  - create a New HTTP Request
- start typing the endpoints in the URL and type the data in the body as raw of type JSON

 

# API Endpoints

## User Endpoints

- ### Register a New User

    **POST /auth/user/register**

    - In the postman type this data in the body with type JSON
    Register a new user

    **Request Body:**

    ```bash
    {
     "fullname": "type_your_fullname"
     "username": "type_your_username",
     "password": "type_your_password"
    }
*You will get a token in response save that token inside the Authorization header of Postman token type - Bearer Token and then paste the token data inside the token field*
- ### Login an existing User

    **POST /auth/user/login**

    - In the postman type this raw data in the body with type JSON
    Login a user

    **Request Body:**

    ```bash
    {
     "username": "type_your_username",
     "password": "type_your_password"
    }
*You will get a token in response save that token inside the Authorization header of Postman token type - Bearer Token and then paste the token data inside the token field*

## Blog Endpoints

- ### Create a new blog
   Note- Only Signed In users can create new blogs

    **POST /blog/createblog**

    - In the postman type this raw data in the body with type JSON
    

    **Request Body:**

    ```bash
    {
     "title": "type_your_blog_title",
     "content": "type_your_blog_content"
    }

- ### Access All blogs
    Note- Only Signed In users can access the blogs

    **GET /blog/allblogs**

- ### Access your own blogs
    Note- Only Signed In users can access the blogs

    **GET /blog/myblogs**

- ### Edit your own blog
  Note- Only Signed In users can create new blogs

    **PATCH /blog/editblog/:blogId**

    - On the place of blogId type the blog Id of the blog you want to edit
    - In the postman type this raw data in the body with type JSON
    
    **Request Body:**

    ```bash
    {
      "title": "type_your_updated_blog_title",
    }
    Or 
    {
      "title": "type_your_updated_blog_title",
    }
    Or 
    {
      "title": "type_your_updated_blog_title",
      "content": "type_your_updated_blog_content"
    }

- ### Delete your own blog

    **DELETE /blog/deleteblog/:blogId**

    - On the place of blogId type the blog Id of the blog  you want to delete
    - In the postman type this raw data in the body with type JSON
    
## Blog Comments Endpoints

- ### Add a new comment on a blog

    **POST /blog/comments/addcomment/:blogId**

     - On the place of blogId type in the blog Id of the blog that you want to add a comment under
    - In the postman type this raw data in the body with type JSON
    
    **Request Body:**

    ```bash
    {
     "text": "type_your_comment_here",
    }
- ### Edit your own comment on a blog

    **PATCH /blog/comments/editcomment/:blogId/:commentId**

     - Replace the blogID and commentId with the blog Id and the commentId of the blog and the comment that you want to edit 
    - In the postman type this raw data in the body with type JSON
    
    **Request Body:**

    ```bash
    {
     "text": "type_your_updated__comment_here",
    }

- ### Delete your own comment on a blog

    **DELETE /blog/comments/deletecomment/:blogId/:commentId**

     - Replace the blogID and commentId with the blog Id and the commentId of the blog and the comment that you want to delete 
    
# Contributing
  If you'd like to contribute, please fork the repository and     create a pull request. You can also create issues for bug reports or feature requests.

# License
  This project is licensed under the MIT License - see the LICENSE file for details.
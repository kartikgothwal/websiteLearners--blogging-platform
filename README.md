# websiteLearners-Task--blogging-platform

This is a simple Blogging Platform built using Node.js, Express, JWT for authentication, bcrypt.js for password hashing, and MongoDB with Mongoose as the database.

## Features

- User authentication using JWT
- Password hashing using bcrypt.js
- **User Authentication**
  - Register a new user
  - Authenticate and login a user

- **Blog Management**
  - Create a new blog
  - Access all the blogs
  - Access your own blogs
  - Edit a blog (own blog)
  - Delete a blog (own blog)

- **Commenting**
  - Comment on any blog
  - Edit own comment
  - Access comments on the blog
  - Delete own comment

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine
- MongoDB atlas account with database access user
- Postman or any API testing tool

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
    DB_PASSWORD= your own database access password
    PRIVATE_KEY= jwt private key with RSA256 algorithm of 2048 bytes
    PUBLIC_KEY= jwt public key according to your private key
Modify the values accordingly.


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
*You will get a token in response save that token inside the Authorization header of token type- Bearer Token and then paste the token data inside the token field*
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
*You will get a token in response save that token inside the Authorization header of token type- Bearer Token and then paste the token data inside the token field*

## Blog Endpoints

- ### Create a new blog

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

    **PATCH /blog/editblog/:blogId**

    - On the place of blogID type in the blog Id you want to edit
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

    - On the place of blogID type in the blog Id you want to delete
    - In the postman type this raw data in the body with type JSON
    
## Blog Comments Endpoints

- ### Add a new comment on a blog

    **POST /blog/comments/addcomment/:blogId**

     - On the place of blogID type in the blog Id you want to add a comment under
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

     - Replace the blogID and commentId with the blog Id and the commentId of the blog and the comment that you want to edit 
    - In the postman type this raw data in the body with type JSON
    
    **Request Body:**

    ```bash
    {
     "text": "type_your_updated__comment_here",
    }

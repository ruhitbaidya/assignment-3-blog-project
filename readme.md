# Blog Project - Backend

## Overview

This is a backend for a blogging platform that allows users to write, update, and delete their blogs, with role-based access control. It includes two main roles:

- **Admin**: Can manage users and blogs, including deleting blogs and blocking users.
- **User**: Can create, update, and delete their own blogs.

The backend features secure authentication with JWT, role-based authorization, and a public API to view blogs with search, sort, and filter functionalities.

## Technologies Used

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)

## Features and Requirements

### 1. User Roles

#### Admin

- Admins are manually created in the database with predefined credentials.
- Can delete any blog.
- Can block users by updating the `isBlocked` field.
- Cannot update any blog.

#### User

- Can register and log in.
- Can create blogs (only when logged in).
- Can update and delete their own blogs.
- Cannot perform admin actions.

### 2. Authentication & Authorization

#### Authentication

- Users must log in to perform write, update, and delete operations.

#### Authorization

- The system distinguishes between **Admin** and **User** roles, with different permissions for each role.

### 3. Blog API

#### Public API for Reading Blogs

- Fetches blogs with options to search by title or content, sort by specific fields, and filter by author ID.

#### Blog Model

- **title**: The title of the blog post.
- **content**: The main body or content of the blog post.
- **author**: Reference to the user (author) of the blog post.
- **isPublished**: A flag indicating whether the blog post is published. Defaults to true.
- **createdAt**: Timestamp when the blog was created.
- **updatedAt**: Timestamp of the last update to the blog.

#### User Model

- **name**: The full name of the user.
- **email**: The email address for authentication.
- **password**: Securely stored password.
- **role**: The user's role, either "admin" or "user". Default is "user".
- **isBlocked**: A flag indicating if the user is blocked. Defaults to `false`.
- **createdAt**: Timestamp when the user was created.
- **updatedAt**: Timestamp of the last update to the user.

### 4. API Endpoints

#### Authentication Endpoints

Admin Information

```
{
"email": "john@example3.com",
"password": "securepassword"
}
```

# Blog Project Backend

## Project Overview

The Blog Project Backend is a full-fledged API designed for a blogging platform. The platform allows users to create, read, update, and delete their own blogs, while administrators have special privileges for managing users and blogs.

### Key Features:

1. **User Authentication & Authorization**:

   - **User Registration**: Users can register with a name, email, and password.
   - **User Login**: Once registered, users can log in to the platform using their credentials. On successful login, a JWT token is generated for authentication in subsequent API calls.
   - **Role-Based Access Control**: There are two types of users in the system:
     - **Admin**: Admins have elevated privileges. They can block users, delete any blog, and manage other users' blogs.
     - **User**: Regular users can only create, update, and delete their own blogs. They have no administrative privileges.

2. **Blog Management**:

   - Users can create new blogs with a title and content.
   - Users can update their existing blogs and delete blogs they created.
   - Admins can delete any blog or block users as needed.

3. **Search, Filter, and Sort Blogs**:

   - **Search**: Users can search blogs by title or content.
   - **Sort**: Blogs can be sorted by fields like `createdAt` or `title` (ascending or descending).
   - **Filter**: Users can filter blogs by the author's ID.

4. **Admin Privileges**:
   - Admins have the ability to block users and delete any blog, even if it was created by another user.

### Technologies Used:

- **Node.js**: JavaScript runtime used for server-side development.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database to store user and blog data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Token)**: Secure method for authenticating users.
- **Bcrypt.js**: Library used to hash passwords and securely compare passwords.

### Project Structure:

- **models**: Contains the database schemas for users and blogs.
- **routes**: Defines the API routes for user and blog operations.
- **controllers**: Contains the logic for handling user and blog CRUD operations.
- **middleware**: Includes middleware for authentication, authorization, and input validation.
- **utils**: Utility functions, such as error handling.

### How It Works:

1. **User Authentication**: When a user registers, their details are saved in the database. During login, their credentials are validated, and a JWT token is generated for further requests.
2. **Blog Operations**: Users can create, update, and delete their own blogs. Admins have the ability to manage all blogs and block users.
3. **Filtering and Sorting**: Users can search blogs based on a search term, sort them by created date or title, and filter by author.
4. **Admin Actions**: Admins can block a user and delete any blog post.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/ruhitbaidya/assignment-3-blog-project.git

```

### Admin Information

```
{
"email": "john@example3.com",
"password": "securepassword"
}
```

# Simple Node.js PostgreSQL CRUD API

This project is a basic API built with **Node.js** and **Express.js** that performs **Create, Read, Update, and Delete (CRUD)** operations using a **PostgreSQL** database. It's designed to be a straightforward example of a backend service. The project was developed to gain a deeper understanding of microservices architecture, focusing on building modular and scalable backend components.

# Usage

The API provides endpoints for managing `users` data. You can interact with it using tools like Postman:

* `GET /users` - Retrieve all users.
* `GET /users/:id` - Retrieve a single user by ID.
* `POST /users` - Create a new user (requires JSON body with user details).
* `PUT /users/:id` - Update an existing user by ID (requires JSON body).
* `DELETE /users/:id` - Delete a user by ID.

# Features

- Create, read, update, and delete user records in a PostgreSQL database.
- RESTful API design with Express.js.
- Basic error handling and input validation.
- Modular structure to explore microservices concepts.

# Technologies

- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Web framework for building the API.
- **PostgreSQL**: Relational database for data storage.
# Task Management API

This is a simple Task Management REST API built using **Node.js**, **Express**, and **MongoDB**.

## Features
- Create a new task
- Get all tasks
- Get a task by ID
- Update task details
- Delete a task
- Basic error handling

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)

---

## Setup and Installation

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (Locally or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Steps to Run the API

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/task-management-api.git
   
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI = mongodb://localhost:27017/taskDB  # Change this for MongoDB Atlas
   ```

4. **Run the Server**
   ```sh
   npm run dev 
   ```
   The API will be running on `http://localhost:3000`

---


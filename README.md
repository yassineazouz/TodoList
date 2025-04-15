![image](https://github.com/user-attachments/assets/02412f4b-8800-4eff-845c-4b5af1037831)


Hosted : https://yassine-todo-list.netlify.app/
# ✅ Task Management Web Application

## 📝 Project Description

This is a **web-based task management application** that allows users to **create, organize, and track their daily tasks** efficiently. The goal is to enhance productivity with a clean and intuitive interface for managing both personal and professional to-do items.

### Key Features:
- ➕ Create tasks  
- 🗂️ Organize tasks by status (To Do, In Progress, Done)  
- ✏️ Update tasks  
- 🗑️ Delete tasks  
- 📆 Track task progress  

---

## 🧰 Technologies Used

### Backend:
- **Java**
- **Spring Boot**
- **Spring Data JPA**
- **REST API**

### Frontend:
- **React.js**

---

## 🚀 Getting Started

### Prerequisites
Make sure the following tools are installed:
- Java 17+
- Node.js + npm
- Maven

---

## ⚙️ Setup Instructions

### Backend (Spring Boot)
1. Clone the repository.
2. Configure your database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/your_db_name
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```
3. Run the backend:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend (React)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
├── backend
│   └── src/main/java/... (Spring Boot App)
├── frontend
│   └── src/... (React App)
```

---

## 📬 API Endpoints

Here are some sample REST API endpoints:

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | /api/tasks       | Get all tasks         |
| POST   | /api/tasks       | Create a new task     |
| PUT    | /api/tasks/{id}  | Update an existing task |
| DELETE | /api/tasks/{id}  | Delete a task         |

---

## 📌 Features

- Task creation, update, and deletion
- Organized task view by status
- RESTful API integration
- Clean separation of backend and frontend

---

## 🛠 Future Improvements

- User authentication and roles
- Notifications and reminders
- Multiple project/task list support
- Responsive/mobile-friendly UI

---

## 👨‍💻 Author

- Developed by Me

---

# Full Stack User Management Web Application

A simple React + Spring Boot + MySQL CRUD application with authentication and search functionality.

# ADMIN L0gin Credentials :
      
      Username : admin
      Password : admin123

# Demo video 
  
  The output Demo video is Available in the Zip file.

# output Image

![output](./Demo%20Output.png)


## 🛠 Prerequisites

Before running this project, make sure you have:

- [Node.js]    ---->        (https://nodejs.org/) (v16 or higher)
- [Java JDK]   ---->        (https://adoptium.net/) (v17 recommended)
- [Maven]      ---->        (https://maven.apache.org/) (v3.8+)
- [MySQL]      ---->        (https://dev.mysql.com/downloads/)
- [IntelliJ IDEA]  ---->    (https://www.jetbrains.com/idea/) (for backend)
- [Visual Studio Code] ---->(https://code.visualstudio.com/) (for frontend)

---

## ⚙️ Backend Setup (Spring Boot + MySQL)

1. **Create MySQL Database**
  
   CREATE DATABASE userdb;

2. **Configure Database in application.properties Open**:

backend/src/main/resources/application.properties

Update:

spring.datasource.url=jdbc:mysql://localhost:3306/userdb
spring.datasource.username=YOUR_MYSQL_USERNAME
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

---

🏃‍♂️ **Running Backend in IntelliJ IDEA 0r (Eclipse can be Used)**

1. Open IntelliJ IDEA.


2. Go to File → Open and select the backend folder.


3. IntelliJ will detect it as a Maven project; wait for dependencies to load.


4. Open src/main/java/.../BackendApplication.java (main Spring Boot class).


5. Click the green play button (▶) next to the main method or on top right.

6. Backend will start on:

http://localhost:8081

---

💻 **Frontend Setup (React) in VS Code**

1. Open Visual Studio Code.


2. Go to File → Open Folder and select the frontend folder.


3. Open the integrated terminal (Ctrl+`).


4. Install dependencies:

npm install


5. Configure API URL in:

frontend/src/config.js

Example:

export const API_URL = "http://localhost:8081/api";


6. Start frontend:

npm start


7. App will run at:

http://localhost:3000

---

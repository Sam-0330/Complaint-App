Got it — you want a **single clean README file** (without my extra commentary), structured for GitHub so other users can understand **what this project is, how to configure and run it, and who developed it**.

Here’s the final version you can copy-paste directly into your repository as `README.md`:


# Complaint Management System

## 1. Description
The Complaint Management System is a mini-project developed using **Spring Boot**, **MySQL**, and a simple **HTML/CSS/JavaScript** frontend.  
It allows students to submit complaints and track their status, while an admin can view all complaints and update their resolution status.

This project demonstrates:
- Layered architecture (Controller → Service → Repository → Database)  
- Dependency Injection in Spring Boot  
- RESTful API development  
- Session-based authentication  

---

## 2. Software Technologies Used
- **Backend:** Spring Boot (Java), Spring Data JPA, Hibernate  
- **Frontend:** HTML, CSS, JavaScript (Vanilla JS)  
- **Database:** MySQL  
- **Build Tool:** Maven  
- **Server:** Embedded Apache Tomcat (via Spring Boot)  

---

## 3. Database Configuration

1. Create a MySQL database:
```sql
CREATE DATABASE complaintsdb;
````

2. Update your `src/main/resources/application.properties` file:

```properties
spring.application.name=complaintsApp

spring.datasource.url=jdbc:mysql://localhost:3306/complaintsdb
spring.datasource.username=root
spring.datasource.password=your_mysql_password

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect

server.port=8081
```

---

## 4. How to Set Up and Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/complaint-management-system.git
cd complaint-management-system
```

### Step 2: Configure the Database

Ensure you have created the MySQL database as shown above and updated the `application.properties` file with your own username and password.

### Step 3: Run the Backend

Use Maven to build and run the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend will now be available at:

```
http://localhost:8081
```

### Step 4: Run the Frontend

1. Navigate to the frontend folder.
2. Open `index.html` directly in your browser **OR** use a local server (e.g., Live Server in VSCode).
3. The frontend will connect to the backend running at `http://localhost:8081`.

---

## 5. Developer Details

**Name:** Shamita Babukumar
**Phone:** 9840025309
**Email:** [shamitab0330@gmail.com](mailto:shamitab0330@gmail.com)



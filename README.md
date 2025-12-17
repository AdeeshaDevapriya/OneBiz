# Student API - Spring Boot (Simple CRUD)

## Overview
Simple Spring Boot project with REST endpoints for Student CRUD operations.
Uses Spring Data JPA and PostgreSQL.

## Quick start
1. Install JDK 17
2. Create PostgreSQL database `studentdb`
3. Update `src/main/resources/application.properties` with your DB password
4. Build and run:
   - `mvn clean package`
   - `mvn spring-boot:run`
5. Test endpoints on `http://localhost:8080/students`

## Endpoints
- POST /students
- GET /students
- GET /students/{id}
- PUT /students/{id}
- DELETE /students/{id}

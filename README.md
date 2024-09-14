# Virtual Classroom

This is a web application for managing virtual classrooms where instructors can manage classes and students can access course materials.

## Features

- Admin/Instructor can manage classes.
- Each class can have multiple units and sessions.
- Users can access course materials in sessions.
- Discussion feature for lectures with nested comments.
- Only enrolled students can join classes.

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your machine.

### Running the Application

1. Clone this repository:
   
2. Build and run the application using Docker Compose:
   3. Access the frontend at http://localhost:3000 and the backend at http://localhost:5000.

## API Endpoints

### User Endpoints

- **POST /api/users/register** - Register a new user.
- **POST /api/users/login** - Authenticate a user.

### Class Endpoints

- **POST /api/classes** - Create a new class.
- **GET /api/classes** - Get all classes.
- **POST /api/classes/:classId/enroll** - Enroll a student in a class.

### Lecture Endpoints

- **POST /api/lectures** - Create a new lecture.
- **POST /api/lectures/:lectureId/comments** - Add a comment to a lecture.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

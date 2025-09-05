# Programming Roadmaps Hub

A comprehensive web application featuring detailed roadmaps for C Programming, Python, and Java with user authentication and database integration.

## Features

- **Interactive Roadmaps**: Detailed learning paths for C, Python, and Java programming languages
- **User Authentication**: Secure login and signup functionality with JWT tokens
- **Responsive Design**: Modern, mobile-friendly interface
- **Database Integration**: SQLite database for user management
- **Beautiful UI**: Clean, professional design with smooth animations

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Authentication**: JWT (JSON Web Tokens), bcrypt for password hashing
- **Styling**: Custom CSS with Font Awesome icons

## Installation

1. **Clone or download the project files**

2. **Install Node.js dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```
   
   For development with auto-restart:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
programming-roadmaps-hub/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # Frontend JavaScript
├── server.js           # Backend server
├── package.json        # Node.js dependencies
├── README.md           # This file
└── users.db           # SQLite database (created automatically)
```

## API Endpoints

- `POST /api/signup` - User registration
- `POST /api/login` - User login
- `GET /api/profile` - Get user profile (protected)
- `PUT /api/profile` - Update user profile (protected)
- `GET /api/users` - Get all users (protected)
- `GET /api/health` - Health check

## Programming Roadmaps

### C Programming (8-12 weeks)
- Basics & Setup
- Control Structures
- Functions & Arrays
- Pointers & Memory Management
- Advanced Topics
- Projects & Practice

### Python (10-16 weeks)
- Python Fundamentals
- Control Flow & Functions
- Data Structures
- Object-Oriented Programming
- Modules & Libraries
- Web Development Basics
- Advanced Topics & Projects

### Java (12-20 weeks)
- Java Fundamentals
- Control Structures & Methods
- Object-Oriented Programming
- Advanced OOP & Arrays
- Exception Handling & Collections
- File I/O & Multithreading
- Advanced Java & Frameworks
- Enterprise Development

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Input validation and sanitization
- SQL injection prevention
- CORS protection

## Usage

1. **Browse Roadmaps**: Click on any programming language card to view its detailed roadmap
2. **Create Account**: Click "Sign Up" to create a new account
3. **Login**: Use your credentials to access personalized features
4. **Navigate**: Use the navigation bar to switch between different roadmaps

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Environment Variables

For production deployment, set these environment variables:

- `PORT`: Server port (default: 3000)
- `JWT_SECRET`: Secret key for JWT tokens (change from default)

## License

MIT License - feel free to use this project for learning and development.

## Support

If you encounter any issues or have questions, please check the console logs for error messages and ensure all dependencies are properly installed.

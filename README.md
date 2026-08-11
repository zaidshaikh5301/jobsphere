# JobSphere

A modern full-stack job portal built with React, Vite, Node.js, Express, MongoDB, and JWT authentication. JobSphere connects candidates and recruiters through job discovery, applications, recruiter job management, and dashboard workflows.

## Overview

JobSphere is designed as a practical MERN-style application with separate candidate and recruiter experiences. Candidates can discover and apply for jobs, while recruiters can create and manage job postings and review applications.

## Features

### Authentication

- User registration and login
- JWT authentication
- Protected routes
- Role-aware candidate and recruiter workflows

### Candidate

- Browse available jobs
- Search jobs
- Filter jobs
- View detailed job information
- Save jobs
- Apply for jobs
- Manage candidate profile
- Track applications

### Recruiter

- Recruiter dashboard
- Create job postings
- Edit job postings
- Delete job postings
- Manage job status
- Review applications
- View candidate information
- Recruiter profile/settings workflows

### General

- Responsive UI
- React Router navigation
- Context-based application state
- Axios REST API integration
- Toast notifications
- Animated UI elements
- Dashboard data visualization

## Tech Stack

### Frontend

- React 19
- JavaScript
- Vite
- React Router
- Tailwind CSS
- Axios
- Framer Motion
- Lucide React / React Icons
- Recharts
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv
- Validator

## Architecture

JobSphere is organized as a client/server application.

```text
                 JobSphere
                     |
          +----------+----------+
          |                     |
       Frontend               Backend
          |                     |
        React                Express
          |                     |
   +------+------+         +----+-----+
   |             |         |          |
 Pages       Context      Routes   Controllers
   |             |         |          |
 Components     |         |       Models
   |             |         |          |
   +------+------+         +----+-----+
          |                     |
        Axios  ------------> REST API
                                |
                                v
                             MongoDB
```

### Frontend responsibilities

- Render candidate and recruiter interfaces
- Manage navigation and protected routes
- Maintain shared application state
- Validate and submit user actions
- Communicate with backend APIs through Axios

### Backend responsibilities

- Authenticate users
- Authorize protected resources
- Validate requests
- Manage jobs and applications
- Persist data through MongoDB/Mongoose
- Return REST API responses

## API

The backend is located in the `server/` directory and runs as an Express API.

### Authentication

```text
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
```

### Jobs

```text
POST   /api/jobs
GET    /api/jobs
GET    /api/jobs/:id
PATCH  /api/jobs/:id
DELETE /api/jobs/:id
```

### Applications

```text
POST   /api/applications
GET    /api/applications
PATCH  /api/applications/:id
DELETE /api/applications/:id
```

> The exact route contract should be kept synchronized with the Express route files in `server/`. Do not publish undocumented endpoints or secrets.

## Installation

### Prerequisites

- Node.js 18+
- npm
- MongoDB

### 1. Clone the repository

```bash
git clone https://github.com/zaidshaikh5301/jobsphere.git
cd jobsphere
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Configure environment variables

Create a `.env` file inside `server/` with the database connection string, JWT configuration, port, and other server-side secrets required by the application.

Example structure:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Use your actual variable names from the server configuration and never commit the `.env` file.

### 5. Start the backend

```bash
npm run dev
```

### 6. Start the frontend

From the project root:

```bash
npm run dev
```

## Screenshots

Add project screenshots to `docs/screenshots/` and showcase the most important candidate and recruiter workflows here.

Recommended screenshots:

- Home page
- Jobs listing/search
- Job details
- Candidate dashboard
- Apply job form
- Recruiter dashboard
- Manage jobs
- Applications/candidate management
- Profile/settings
- Mobile responsive layout

## Live Demo

No verified production deployment URL is currently configured in the repository. Add separate verified frontend and backend deployment URLs after deployment.

## Project Structure

```text
jobsphere/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   └── utils/
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── package.json
└── README.md
```

## Security Notes

- Store JWT secrets and MongoDB credentials in environment variables.
- Do not commit `.env` files.
- Validate and sanitize user-controlled data.
- Use secure production CORS and cookie/token settings before deployment.

## Future Improvements

- Email notifications
- Resume upload and document management
- Interview scheduling
- Advanced recruiter analytics
- Admin moderation panel
- Saved-search alerts
- Automated tests and CI/CD

## Author

**Zaid Shaikh**

- GitHub: https://github.com/zaidshaikh5301
- LinkedIn: https://linkedin.com/in/zaid-shaikh-823961345

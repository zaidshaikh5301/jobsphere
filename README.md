# 💼 JobSphere

A full-stack job portal built with React, Vite, Node.js, Express and MongoDB. Candidates can discover and apply for jobs, while recruiters can post jobs and manage applications from a dashboard.

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

## ✨ Features

### Authentication
- Register and login with JWT
- Protected routes
- Separate candidate and recruiter experiences

### Candidate
- Browse, search and filter jobs
- Job detail pages
- Save jobs
- Apply for jobs
- Profile management
- Track applications

### Recruiter
- Recruiter dashboard with charts
- Create, edit and delete job postings
- Manage job status
- Review applications and candidate details
- Profile and settings

### General
- Responsive UI
- Toast notifications and animations
- Context-based state management

## 🛠️ Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 19, Vite, React Router, Tailwind CSS, Axios, Framer Motion, Recharts, React Toastify |
| Backend | Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, CORS, dotenv |

## 🏗️ Architecture

```
React (pages, components, context)
        │  Axios
        ▼
Express REST API (routes → controllers → models)
        │
        ▼
     MongoDB
```

## 📌 API Overview

```
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/logout

POST   /api/jobs
GET    /api/jobs
GET    /api/jobs/:id
PATCH  /api/jobs/:id
DELETE /api/jobs/:id

POST   /api/applications
GET    /api/applications
PATCH  /api/applications/:id
DELETE /api/applications/:id
```

## 📁 Project Structure

```
jobsphere/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   └── utils/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── package.json
```

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/zaidshaikh5301/jobsphere.git
cd jobsphere

# frontend
npm install

# backend
cd server
npm install
```

### Environment variables

Create `server/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run

```bash
# backend (inside /server)
npm run dev

# frontend (from project root)
npm run dev
```

## 🔒 Security Notes

- Keep secrets in `.env` and never commit it
- Use strict CORS and secure token settings in production

## 🔮 Roadmap

- [ ] Resume upload
- [ ] Email notifications
- [ ] Interview scheduling
- [ ] Admin moderation panel
- [ ] Automated tests and CI/CD

## 👨‍💻 Author

**Zaid Shaikh**

[GitHub](https://github.com/zaidshaikh5301) · [LinkedIn](https://www.linkedin.com/in/zaid-shaikh-823961345/)

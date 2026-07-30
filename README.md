# 💼 JobSphere – Job Portal

JobSphere is a modern **full-stack Job Portal** that connects **job seekers** with **recruiters** through an intuitive and responsive platform. The application enables candidates to search and apply for jobs, while recruiters can post and manage job listings efficiently.

---

## 🚀 Features

### 👨‍💼 Candidate Features
- User Registration & Login
- Secure Authentication
- Browse Available Jobs
- Search Jobs by Title, Company, or Skills
- Filter Jobs by Location, Category, and Job Type
- View Detailed Job Information
- Apply for Jobs
- Save Favorite Jobs
- Track Applied Jobs
- Update Personal Profile

### 🏢 Recruiter Features
- Recruiter Registration & Login
- Recruiter Dashboard
- Post New Jobs
- Edit Job Listings
- Delete Job Listings
- Activate/Deactivate Job Posts
- View Applications
- Manage Candidate Profiles
- Update Recruiter Profile

### 📊 Dashboard
- Job Statistics
- Active Job Listings
- Total Applications
- Saved Jobs Overview
- User Profile Management

### 🎨 UI/UX
- Responsive Design
- Modern Dashboard
- Clean Navigation
- Interactive Cards
- Toast Notifications
- Loading Indicators
- Form Validation

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Context API
- Axios
- React Toastify
- CSS3

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JSON Web Token (JWT)
- bcrypt.js

---

# 📂 Project Structure

```
JobSphere/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── axios.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── jobs/
│   │   ├── recruiter/
│   │   └── candidate/
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── JobContext.jsx
│   │   ├── RecruiterContext.jsx
│   │   └── ApplicationContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Jobs.jsx
│   │   ├── JobDetails.jsx
│   │   ├── ApplyJob.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Recruiter/
│   │   └── Candidate/
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

# ✨ Key Modules

## 👤 Authentication
- Register
- Login
- Logout
- Protected Routes
- JWT Authentication

## 💼 Job Management
- Create Job
- Read Jobs
- Update Job
- Delete Job
- Search Jobs
- Filter Jobs
- Save Jobs

## 📄 Job Applications
- Apply for Jobs
- View Applications
- Manage Applications
- Application Status Tracking

## 👥 Recruiter Dashboard
- Post Jobs
- Manage Jobs
- View Candidates
- Recruiter Profile
- Dashboard Analytics

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/jobsphere.git
```

Move into project directory

```bash
cd jobsphere
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 📸 Screenshots

```
screenshots/
│
├── home.png
├── jobs.png
├── job-details.png
├── recruiter-dashboard.png
├── candidate-dashboard.png
├── login.png
└── register.png
```

---

# 📌 Available Scripts

Run development server

```bash
npm run dev
```

Build project

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# 🔄 Workflow

### Candidate

```
Register/Login
      │
      ▼
Browse Jobs
      │
      ▼
View Job Details
      │
      ▼
Apply for Job
      │
      ▼
Track Application Status
```

### Recruiter

```
Login
      │
      ▼
Recruiter Dashboard
      │
      ▼
Post Job
      │
      ▼
Manage Job Listings
      │
      ▼
Review Applications
      │
      ▼
Hire Candidates
```

---

# 📌 Future Enhancements

- Resume Upload
- Company Profiles
- AI Resume Screening
- AI Job Recommendations
- Email Notifications
- Interview Scheduling
- Chat Between Recruiter & Candidate
- Dark Mode
- Advanced Search Filters
- Admin Panel
- Job Bookmark Synchronization
- Real-Time Notifications

---

# 🎯 Learning Outcomes

This project demonstrates practical knowledge of:

- React.js
- React Router
- Context API
- State Management
- REST APIs
- JWT Authentication
- CRUD Operations
- Responsive UI Design
- MongoDB Integration
- Express.js
- Node.js

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push the branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

```

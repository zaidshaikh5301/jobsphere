const jobs = [
  {
    id: 1,
    title: "Frontend React Developer",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Bangalore",
    salary: "₹12 - 18 LPA",
    type: "Full Time",
    experience: "2-4 Years",
    description:
      "Build modern and responsive web applications using React.js and Tailwind CSS.",
    responsibilities: [
      "Develop responsive user interfaces",
      "Collaborate with backend developers",
      "Optimize application performance",
      "Write reusable React components",
    ],
    requirements: [
      "Bachelor's Degree",
      "2+ years React experience",
      "Good JavaScript knowledge",
    ],
    skills: ["React", "JavaScript", "Tailwind", "Git"],
  },

  {
    id: 2,
    title: "Backend Node.js Developer",
    company: "Microsoft",
    location: "Hyderabad",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    salary: "₹14 - 20 LPA",
    type: "Full Time",
    experience: "2-5 Years",
    description:
      "Develop REST APIs using Node.js, Express and MongoDB.",
    responsibilities: [
      "Develop APIs",
      "Maintain MongoDB database",
      "Authentication using JWT",
      "Deploy backend services",
    ],
    requirements: [
      "Node.js",
      "Express",
      "MongoDB",
    ],
    skills: ["Node.js", "Express", "MongoDB", "JWT"],
  },

  {
    id: 3,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Mumbai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
    salary: "₹8 - 14 LPA",
    type: "Hybrid",
    experience: "1-3 Years",
    description:
      "Design beautiful user experiences for web and mobile applications.",
    responsibilities: [
      "Create wireframes",
      "Design UI",
      "Prototype in Figma",
    ],
    requirements: [
      "Figma",
      "Adobe XD",
    ],
    skills: ["Figma", "UI", "UX", "Adobe XD"],
  },

  {
    id: 4,
    title: "Software Engineer",
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    location: "Chennai",
    salary: "₹18 - 28 LPA",
    type: "Full Time",
    experience: "3-6 Years",
    description:
      "Develop scalable software solutions for millions of users.",
    responsibilities: [
      "Coding",
      "Testing",
      "Code Reviews",
    ],
    requirements: [
      "Java",
      "DSA",
      "System Design",
    ],
    skills: ["Java", "Spring Boot", "AWS", "Git"],
  },

  {
    id: 5,
    title: "Full Stack Developer",
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    location: "Remote",
    salary: "₹16 - 24 LPA",
    type: "Remote",
    experience: "2-5 Years",
    description:
      "Work across frontend and backend technologies to build scalable applications.",
    responsibilities: [
      "Develop frontend",
      "Develop backend",
      "Database design",
    ],
    requirements: [
      "React",
      "Node",
      "MongoDB",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },

  {
    id: 6,
    title: "Android Developer",
    company: "Samsung",
    logo: "https://cdn.worldvectorlogo.com/logos/samsung-8.svg",
    location: "Noida",
    salary: "₹10 - 15 LPA",
    type: "Full Time",
    experience: "2 Years",
    description:
      "Develop Android applications using Kotlin.",
    responsibilities: [
      "Develop Android Apps",
      "Fix bugs",
      "Improve performance",
    ],
    requirements: [
      "Kotlin",
      "Android Studio",
    ],
    skills: ["Kotlin", "Android", "Firebase"],
  },

  {
    id: 7,
    title: "Python Developer",
    company: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    location: "Pune",
    salary: "₹8 - 12 LPA",
    type: "Hybrid",
    experience: "1-3 Years",
    description:
      "Develop backend services using Python and Django.",
    responsibilities: [
      "API Development",
      "Database Management",
      "Testing",
    ],
    requirements: [
      "Python",
      "Django",
    ],
    skills: ["Python", "Django", "REST API"],
  },

  {
    id: 8,
    title: "DevOps Engineer",
    company: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    location: "Remote",
    salary: "₹15 - 22 LPA",
    type: "Remote",
    experience: "3 Years",
    description:
      "Manage cloud infrastructure and CI/CD pipelines.",
    responsibilities: [
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    requirements: [
      "Linux",
      "Docker",
    ],
    skills: ["Docker", "AWS", "CI/CD"],
  },

  {
    id: 9,
    title: "Data Analyst",
    company: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    location: "Gurgaon",
    salary: "₹9 - 14 LPA",
    type: "Full Time",
    experience: "2 Years",
    description:
      "Analyze business data to generate actionable insights.",
    responsibilities: [
      "SQL Queries",
      "Dashboards",
      "Reporting",
    ],
    requirements: [
      "SQL",
      "Excel",
    ],
    skills: ["SQL", "Power BI", "Excel"],
  },

  {
    id: 10,
    title: "Machine Learning Engineer",
    company: "NVIDIA",
    location: "Bangalore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    salary: "₹20 - 35 LPA",
    type: "Full Time",
    experience: "3-5 Years",
    description:
      "Build machine learning models and AI solutions.",
    responsibilities: [
      "Model Training",
      "Deployment",
      "Optimization",
    ],
    requirements: [
      "Python",
      "TensorFlow",
    ],
    skills: ["Python", "TensorFlow", "PyTorch"],
  },

  {
    id: 11,
    title: "Cyber Security Analyst",
    company: "Cisco",
    location: "Hyderabad",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    salary: "₹14 - 20 LPA",
    type: "Full Time",
    experience: "2 Years",
    description:
      "Monitor systems and protect applications from security threats.",
    responsibilities: [
      "Security Monitoring",
      "Threat Analysis",
    ],
    requirements: [
      "Networking",
      "Security",
    ],
    skills: ["Cyber Security", "Networking", "Linux"],
  },

  {
    id: 12,
    title: "Cloud Engineer",
    company: "Oracle",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    salary: "₹16 - 25 LPA",
    type: "Remote",
    experience: "2-5 Years",
    description:
      "Manage cloud infrastructure and scalable deployments.",
    responsibilities: [
      "Cloud Deployment",
      "Infrastructure",
    ],
    requirements: [
      "AWS",
      "Azure",
    ],
    skills: ["AWS", "Azure", "Docker"],
  },
];

export default jobs;
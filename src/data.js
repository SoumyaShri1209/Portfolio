
export const personalInfo = {
  name: "Soumya Shri",
  taglines: [
    "Full Stack Developer",
    "React.js Enthusiast",
    "Node.js Developer",
    "Next.js Builder",
    "Open Source Contributor",
  ],
  bio: "I'm a passionate Computer Science student at Dronacharya College of Engineering, building scalable full-stack applications with modern web technologies. I love creating clean, performant, and user-friendly experiences.",
  location: "Gurgaon, India",
  email: "soumyashri1209@gmail.com",
  linkedin: "https://www.linkedin.com/in/soumya-shri-42ab5228b/",
  github: "https://github.com/SoumyaShri1209",
  // 👇 Add your photo path here: place your photo in /src/assets/photo.jpg
  photo: "photo4.jpg", 
  resumeLink: "https://drive.google.com/file/d/1iM8XUH1Ca8rjeQHXLaAHRgmmrNTbcSnR/view?usp=sharing", // 👈 Add your resume download link here
};

export const projects = [
  {
    id: 1,
    title: "ShareLane",
    description:
      "A full-stack blogging platform with secure JWT authentication, smooth post management, and a clean responsive UI. Features server-side rendering for high-performance page loads.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "JWT"],
    sourceCode: "https://github.com/SoumyaShri1209/ShareLane", // 👈 Update with actual repo link
    liveDemo: "https://share-lane-upy2.vercel.app", // 👈 Add deployed URL here
    color: "#00f5ff",
    icon: "✍️",
    featured: true,
  },
  {
    id: 2,
    title: "AI Code Reviewer",
    description:
      "An AI-powered code review web app that analyzes source code and delivers concise, senior-level feedback focused on correctness, performance, readability, and best practices.",
    tags: ["React", "Node.js", "Express", "Gemini API"],
    sourceCode: "https://github.com/SoumyaShri1209/Code-Reviewer",
    liveDemo: "https://code-reviewer-zytp.vercel.app",
    color: "#7c3aed",
    icon: "🤖",
    featured: true,
  },
  {
    id: 3,
    title: "VideoTube",
    description:
      "A scalable RESTful backend API for a video sharing platform handling video upload, user authentication, subscriptions, and profile management with JWT-based auth.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    sourceCode: "https://github.com/SoumyaShri1209/videotube-backend",
    color: "#f472b6",
    icon: "🎬",
    featured: false,
  },
  {
    id: 4,
    title: "Restaurant-Application-Form",
    description:
      "Restaurant Reservation Application A full-stack restaurant reservation system built with React + Vite and Node.js / Express, connected to MongoDB Atlas.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    sourceCode: "https://github.com/SoumyaShri1209/Restaurant-Application-Form",
    liveDemo: "https://restaurant-application-form.vercel.app/",
    color: "#10b981",
    icon: "🍔",
    featured: false,
  },
  {
    id: 5,
    title: "NoteEase",
    description:
      "A full-stack note-taking app with real-time updates, secure login, and features for creating, editing, pinning, and deleting notes. Redux for global state, MongoDB for storage.",
    tags: ["Next.js", "Redux", "MongoDB"],
    sourceCode: "https://github.com/SoumyaShri1209/note-taking-app",
    liveDemo: "https://note-taking-app-nine-hazel.vercel.app/login",
    color: "#f59e0b",
    icon: "📝",
    featured: false,
  },
];

export const skills = {
  Languages: ["Java", "JavaScript","C++", "HTML5", "CSS3"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "Responsive Design"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Mongoose"],
  Databases: ["MongoDB"],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "Vite", "VS Code", "IntelliJ IDEA"],
};

export const skillIcons = {
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
};

export const achievements = [
  {
    title: "Y Combinator — Software Engineer Simulation",
    org: "Forage",
    year: "2025",
    description: "Gained hands-on experience in full-stack development, data analysis, and product thinking in a startup environment.",
    icon: "🚀",
  },
  {
    title: "Datacom Software Development Simulation",
    org: "Forage",
    year: "2025",
    description: "Reviewed a production web application, identified bugs, and planned targeted improvements to enhance functionality.",
    icon: "🔍",
  },
  {
    title: "Complete Web Development Course",
    org: "Udemy",
    year: "2023",
    description: "Comprehensive full-stack web development course covering modern technologies and best practices.",
    icon: "🌐",
  },
 
  {
    title: "C Programming Certification",
    org: "IIT Bombay",
    year: "2023",
    description: "Certified in C Programming by the prestigious Indian Institute of Technology Bombay.",
    icon: "🏛️",
  },
  {
    title: "Introduction to Generative AI",
    org: "Infosys",
    year: "2024",
    description: "Certification covering generative AI fundamentals, LLMs, and practical AI applications.",
    icon: "🤖",
  },
  {
    title: "AI for Web Developers",
    org: "Simplilearn",
    year: "2024",
    description: "Certification focused on integrating AI capabilities into modern web applications.",
    icon: "💡",
  },
];

export const education = {
  institution: "Dronacharya College of Engineering",
  university: "Gurugram University",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  gpa: "8.0/10.0",
  duration: "Aug 2023 – Aug 2027 (Expected)",
  location: "Gurgaon, India",
  coursework: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Operating Systems"],
};

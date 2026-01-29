export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  category: string;
  problem: string;
  solution: string;
  results: string;
}

export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  offerLetter?: string;
  completionCertificate?: string;
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  cgpa: number;
  percentage?: number;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
  proof?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number; // 0-100
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  description: string;
  credential?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Kalyani",
  about: "B.Tech in AI & Data Science @STLW'26 || Google Girl Hackathon 2025 Participant ||Data Structures & Algorithms Enthusiast || AI Animation Creator || Web Developer",
  location: "Hyderabad, INDIA",
  email: "kalyani.vadakala@gmail.com",
  github: "https://github.com/Kalyani0131",
  linkedin: "https://www.linkedin.com/in/vadakala-kalyani",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Browser Automation Using AI Agent",
    description: "An AI-powered system enabling browser automation through natural language using LLMs, LangChain, and Playwright.",
    image: "images/AI_agent.png",
    technologies: ["Python", "LangChain", "Playwright", "GPT-4o", "Gemini", "Gradio"],
    github: "https://github.com/Kalyani0131/AI-Agent-project", 
    demo: "https://drive.google.com/file/d/1w5j6fB9o64P1950PnXwyDr3sIt2xXDeD/view?usp=sharing", 
    category: "AI & Automation",
    problem: "Traditional web automation tools require scripting knowledge and struggle with dynamic websites and user-specific customization.",
    solution: "Built a no-code AI automation system that uses natural language, intelligent planning, and real-time browser control with LLMs and Playwright.",
    results: "Reduced manual browser effort by 70%, improved automation success rate on dynamic pages by 60%, and made automation accessible to non-programmers."
  },
 
  {
    id: 2,
    title: "Yoga Poses Recommender App",
    description: "A contextual Yoga poses recommender app powered by Firestore, Vector Search, and Gemini 2.0 for generating Yoga pose descriptions, images, and audio.",
    image: "images/yoga.jpg", 
    technologies: ["Firestore", "Vector Search", "Gemini 2.0", "Java", "Google Cloud", "Text-to-Speech", "Google Imagen"],
    github: "https://codelabs.developers.google.com/codelabs/smart-yoga-pose-search-firestore", 
    demo: "https://drive.google.com/file/d/1_7MHjZMJiEoiUocWb0gwyWASOG9PL33m/view?usp=sharing", 
    category: "AI & Wellness",
    problem: "Users struggle to find the right Yoga poses based on specific needs, such as improving balance or flexibility, due to limitations in traditional search systems.",
    solution: "Developed a Yoga poses recommender app using Firestore for dynamic data storage, Vector Search for contextual matching, and Gemini 2.0 for generating detailed descriptions, images, and audio.",
    results: "Enhanced user experience by providing contextually relevant Yoga pose suggestions, improving user engagement by 50%, and promoting personalized Yoga practice."
  },
  {
    id: 3,
    title: "Toy Store Search App",
    description: "A personalized toy store search app using AI, Cloud Databases, and serverless runtimes, enabling contextual searches and custom toy creation based on user inputs.",
    image: "images/Toystore.png", 
    technologies: ["AlloyDB", "pgvector", "Gemini 2.0", "Imagen 3", "Cloud Run", "Gen AI Toolbox", "Generative AI", "Python"],
    github: "https://codelabs.developers.google.com/toy-store-app", 
    demo: "https://drive.google.com/file/d/10ipapyHgmawwjD0pJXa8qDAMKUUT54ed/view?usp=sharing", 
    category: "AI & E-Commerce",
    problem: "Traditional toy stores and e-commerce platforms often fail to deliver a personalized shopping experience, making it difficult for users to find the perfect toy based on context or imagination.",
    solution: "Built a toy store search app that uses AI for contextual search, real-time similarity matching with embeddings, custom toy creation, and price prediction, all powered by cloud technologies and serverless runtimes.",
    results: "Reduced user frustration by 60%, enhanced engagement with personalized toy recommendations, and streamlined custom toy creation, boosting user satisfaction and sales."
  },  
  {
    id: 4,
    title: "Number-Plate-Vision-App",
    description: "A web-based application built with Streamlit that uses computer vision and OCR to detect and extract text from vehicle number plates. This app is ideal for vehicle identification, parking management, and security monitoring.",
    image: "images/number-plate-vision-app.png", 
    technologies: ["Streamlit", "OpenCV", "Tesseract OCR", "Python"],
    github: "https://github.com/Kalyani0131/Number-plate-vision-app", 
    demo: "https://drive.google.com/file/d/12kzthkIM5AZaY16f9PEE_-6RUm8O4kZu/view?usp=sharing", 
    category: "Computer Vision & Web Applications",
    problem: "Manual vehicle identification and parking management can be time-consuming and prone to errors, especially in high-traffic areas.",
    solution: "Developed a web-based app that automates the detection and extraction of license plate numbers from vehicle images using computer vision and OCR, reducing errors and improving efficiency in vehicle identification and parking management.",
    results: "Improved vehicle identification accuracy by 85%, automated parking management tasks, and provided a scalable solution for security monitoring."
  },  
];
export const experience: ExperienceItem[] = [
  {
    id: 1,
    company: "DRDO (Defence Research and Development Organisation)",
    position: "Intern",
    duration: "Jun 2025 - Jul 2025",
    description: [
      "Completed an on-site internship at DRDO CAS, Hyderabad, working on secure document automation solutions.",
      "Developed a Python-based GUI tool for secure audit document editing with approximately 98% formatting preservation accuracy.",
      "Implemented efficient text and numeric replacement features while maintaining document layout integrity.",
      "Enabled offline, user-friendly table data updates in compliance with DRDO security and audit standards.",
      "Reduced manual document processing time by nearly 60% through automation and optimized workflows."
    ],
    technologies: [
      "Python",
      "Tkinter Canvas",
      "GUI Design",
      "File Handling",
      "Document Layout Preservation",
      "Offline Desktop Applications",
      "Secure Document Processing"
    ],
    offerLetter: "https://drive.google.com/file/d/1uddMDu7x7teLpWLqz7e_Qf4HP3dZiIRB/view?usp=sharing",
    completionCertificate: "https://drive.google.com/file/d/1YQJ2k3DYf6RMnlE4qmBIE0wgAEmWxLG9/view?usp=sharing"
  },
  {
    id: 2,
    company: "InternPe",
    position: "ML Intern",
    duration: "Jul 2024 - Aug 2024",
    description: [
      "Completed a 4-week intensive ML internship focused on real-world machine learning applications.",
      "Developed a Diabetes Prediction model using classification algorithms and patient data analysis.",
      "Built a Car Price Prediction system leveraging regression techniques and data preprocessing.",
      "Created an IPL Winning Team Predictor using ensemble models based on historical IPL datasets.",
      "Implemented a Breast Cancer Detection model with high accuracy using supervised learning."
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    offerLetter: "https://drive.google.com/file/d/1H02My1_SIccok78lB09NfO6allKZ4Ttc/view?usp=sharing",
    completionCertificate: "https://drive.google.com/file/d/1seQBQ-jozDRmatevdnlmSffYjJHaHwKT/view?usp=sharing"
  }
];


export const education: EducationItem[] = [
  {
    id: 1,
    institution: "Stanley College of Engineering and Technology for Women | Hyderabad,Telanagana",
    degree: "Bachelor of Engineering",
    duration: "2022 - 2026",
    cgpa: 9.0,
    percentage:90,
    description: "Artificial Intelligence & Data Science",
},
  {
    id: 2,
    institution: "Sri Chaitanya Junior Kalasala, | ECIL,Hyderabad,Telanagana",
    degree: "Intermediate",
    duration: "2020 - 2022",
    cgpa:8.9,
    percentage:89.1,
    description: "Mathematics, Physics, and Chemistry (MPC) ",
},
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Code Vipassana Season-9",
    description: "Awarded for exceptional performance in Season 9: Agentic Apps with Cloud Databases, Serverless and Open Source Integrations conducted by Google Developer Groups Cloud Kochi. Recognized for extraordinary mastery, dedication, and skill in hands-on learning of Google Cloud.",
    date: "April 2025",
    image:  "achievements/code-vipasana certification.jpg",
    proof: "https://www.linkedin.com/posts/vadakala-kalyani_googlecloud-codevipassana-ai-activity-7312696532909146112-1-tK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhwQuMBHWIzLH_F8s7fVNgQS7gh5vAQjqM"
  },  
  {
    id: 2,
    title: "Standard Milestone Achiever - Google Cloud Arcade",
    description: "Reached the Standard Milestone with 16 Arcade Points in the Google Cloud Arcade journey. The experience was filled with hands-on learning, exciting challenges, and valuable collaboration. Received exclusive Google Cloud swag, making the achievement even more memorable. Grateful to the Google Cloud team for the continuous motivation and support.",
    date: "April 2025",
    image:"achievements/google-swag.jpg",
    proof: "https://www.linkedin.com/posts/vadakala-kalyani_googlecloud-cloudarcade-learning-activity-7308489196158029825-Gwwh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhwQuMBHWIzLH_F8s7fVNgQS7gh5vAQjqM" 
  },
];

export const skills: Skill[] = [
  { id: 1, name: "JavaScript", category: "Frontend", level: 95 },
  { id: 2, name: "React", category: "Frontend", level: 90 },
  { id: 3, name: "TypeScript", category: "Frontend", level: 85 },
  { id: 4, name: "HTML/CSS", category: "Frontend", level: 95 },
  { id: 5, name: "Node.js", category: "Backend", level: 80 },
  { id: 6, name: "Python", category: "Backend", level: 75 },
  { id: 7, name: "MongoDB", category: "Database", level: 70 },
  { id: 8, name: "SQL", category: "Database", level: 75 },
  { id: 9, name: "Git/GitHub", category: "Tools", level: 90 },
  { id: 10, name: "Docker", category: "DevOps", level: 65 },
  { id: 11, name: "AWS", category: "Cloud", level: 60 },
  { id: 12, name: "TensorFlow", category: "AI/ML", level: 70 },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google via Coursera",
    date: "May 13, 2024",
    image: "certification/coursera.jpg",
    description: "Demonstrated skills in data preparation, processing, analysis, and visualization using tools like spreadsheets, SQL, R, and Tableau.",
    credential: "https://drive.google.com/file/d/1l07FhnAx6_NGwL0Em0qUGt5giW4w8uWW/view?usp=sharing",
  }, 
  {
    id: 2,
    title: "GDSC WoW Hyderabad 2024",
    issuer: "Google Developer Student Clubs, Hyderabad",
    date: "April 21, 2024",
    image: "certification/GDSC.jpg", 
    description: "Participated in the GDSC WoW Hyderabad 2024, a nationwide conference focused on technology and innovation, organized at MLR Institute of Technology.",
    credential: "https://drive.google.com/file/d/1yG1veDpFjUJmviaJ0Q4PVEaZAwl9oX-2/view?usp=sharing", 
  },  
  {
    id: 3,
    title: "OOPs in Java",
    issuer: "Great Learning Academy",
    date: "November 2023",
    image: "certification/Greatlearn.jpg", 
    description: "Successfully completed an online course on Object-Oriented Programming (OOP) concepts in Java, covering classes, objects, inheritance, polymorphism, and encapsulation.",
    credential: "https://drive.google.com/file/d/1tRMJP82K_5ej3r3wWucWz_VIc020gXCo/view?usp=sharing",
  },
  {
    id: 4,
    title: "Summer Of AI Internship Program",
    issuer: "Swecha",
    date: "May 14, 2024 – June 21, 2024",
    image: "certification/swecha.jpg", 
    description: "Participated in the Summer Of AI Internship Program at Swecha, contributing towards building AI solutions for preserving culture and language advancement.",
    credential: "https://drive.google.com/file/d/1Jf6o9NVtfydT2lFznAnedz6fktqYu9I2/view?usp=sharing", 
  },
  {
    id: 5,
    title: "Microsoft Learn Student Ambassador Workshop - Python",
    issuer: "Microsoft Learn Student Ambassadors",
    date: "2024", 
    image: "certification/python.jpg", 
    description: "Completed the Microsoft Learn Student Ambassadors workshop focused on Python, hosted by Chamarthi G S Satwika.",
    credential: "https://drive.google.com/file/d/1-ZSRUqeGGQDQI7fK1y1JpDIY5TsczOLu/view?usp=sharing", 
  },
  {
    id: 6,
    title: "Stanley Code-A-Thon 2K24 - Participation",
    issuer: "Stanley College of Engineering and Technology for Women",
    date: "13 December 2024",
    image: "certification/code-a-thon.jpg", 
    description: "Participated in the CODE-A-THON event organized by the Department of AI&DS and Department of Computer Engineering at Stanley College of Engineering and Technology for Women, Hyderabad.",
    credential: "https://drive.google.com/file/d/19DVeXvE6j5W9d8CXqJr91TfUpMPopfxb/view?usp=sharing", 
  },
  {
    id: 7,
    title: "Ideathon 2.0 - Participation",
    issuer: "Stanley College of Engineering and Technology for Women",
    date: "19 April 2024",
    image: "certification/ideathon.jpg", 
    description: "Participated in Ideathon 2.0 organized by Stanley College of Engineering and Technology for Women in association with WE-HUB, aimed at promoting innovation and startup ideas.",
    credential: "https://drive.google.com/file/d/1EcX3TmY_bZDklJt9nHR5Hy0-ur3E5tlF/view?usp=sharing" ,
  },  
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/username",
    icon: "Github",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "Linkedin",
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:kalyani@example.com",
    icon: "Mail",
  },
];

import ecommerceImage from "@/assets/img/projectsSection/ecommerce.avif";
import chatappImage from "@/assets/img/projectsSection/chatapp.webp";
import personalPortfolioImage from "@/assets/img/projectsSection/personalPortfolio.webp";

export const portfolioData = {
    skills: {
      frontend: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "React.js & Redux",
        "Next.js, Angular, Gatsby",
        "TypeScript",
        "Tailwind CSS, SASS, Styled Components",
        "Responsive Web Design",
        "Material UI",
        "Jest & Puppeteer for testing"
      ],
      backend: [
        "Node.js, Express.js, NestJS, TypeScript",
        "MongoDB, PostgreSQL",
        "REST API Development",
        "GraphQL",
        "Authentication & Authorization"
      ],
      devops: [
        "Git, GitHub/GitLab",
        "Docker",
        "Vercel",
        "Webpack, Babel",
        "npm/yarn"
      ],
      soft: [
        "Agile/Scrum Methodology",
        "Problem Solving",
        "Team Collaboration",
        "Technical Documentation",
        "Project Management",
        "Time Management"
      ]
    },
    projects: [
      {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product search, shopping cart, and delivery status.",
        image: ecommerceImage,
        tags: ["React", "Nest JS", "MongoDB", "Redux"],
        demoLink: "https://ecomm-frontend-bharatsarda18s-projects.vercel.app/login",
        repoLink: "https://github.com/BharatSarda18/ecomm-frontend"
      },
      {
        title: "Chat App",
        description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
        image: chatappImage,
        tags: ["React", "Nest JS", "MongoDB", "Redux","Material UI"],
        demoLink: "https://chat-app-frontend-khaki.vercel.app/",
        repoLink: "https://github.com/BharatSarda18/chat-app-frontend"
      },
      {
        title: "Personal Portfolio Website",
        description: "A responsive portfolio site to showcase my projects, skills, and experience. Includes animations and resume download option.",
        image: personalPortfolioImage,
        tags: ["Next.js", "Tailwind CSS"],
        demoLink: "https://my-portfolio-git-main-bharatsarda18s-projects.vercel.app/",
        repoLink: "https://github.com/BharatSarda18/my-portfolio"
      }
    ],
    experiences: [
      {
        title: "Full Stack Developer",
        company: "Lumiq.ai",
        companywebsite:"https://lumiq.ai/",
        period: "2022 - Present",
        description: "Worked on multiple end-to-end web applications including MDM, APT, IPT, LaunchNav, and BDA. Developed dynamic dashboards, RESTful APIs, built authentication systems, and implemented responsive UIs using modern technologies like React.js, NestJS, PostgreSQL, and MongoDB.",
        technologies: ["JavaScript","React.js","Angular","NestJS","Next.js","MongoDB","PostgreSQL","Express.js", "Node.js", "TypeORM", "Material UI", "TypeScript", "Docker","Tailwind CSS", "Jest", "Redux", "puppeteer"]
      }
    ],
    education: [
      {
        degree: "Bachelor of Technology",
        institution: "Punjab Engineering College, Chandigarh",
        period: "2018-2022",
        description: "Completed a rigorous academic program with a strong foundation in problem-solving and analytical thinking. Continuously upskilled in Software Engineering and Web Development through personal projects, online courses, and real-world experience."
      }
    ],
    certifications: [
      {
        name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        issuer: "Udemy",
        year: "2022"
      },
      {
        name: "Node JS, Express JS - The Complete Guide",
        issuer: "Udemy",
        year: "2022"
      },
      {
        name: "Nest JS - The Complete Guide",
        issuer: "Udemy",
        year: "2022"
      },
      {
        name: "Tailwind CSS - From Beginner to Pro",
        issuer: "Udemy",
        year: "2022"
      }
    ]
  };

export const RESUME_DATA = {
  name: "Harshita Kanal",
  initials: "HK",
  location: "Bangalore, IN",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  about:
    "Senior Software Engineer focused on building products with extra attention to detail",
  summary:
    "Senior Software Engineer at HackerRank, built AI-powered products from scratch. I love building beautiful interfaces, AI-first experiences and ensuring high-quality engineering practices.",
  avatarUrl: "",
  personalWebsiteUrl: "https://harshitakanal.com",
  contact: {
    email: "harshita.kgv@gmail.com", // Placeholder based on username
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/harshita-kanal", // Inferred
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harshita-kanal-400563166/", // Inferred
        icon: "linkedin",
      },
      {
        name: "Twitter",
        url: "https://x.com/harshita_kanal",
        icon: "twitter",
      },
      {
        name: "Substack",
        url: "https://pixelsandechoes.substack.com/", // Placeholder
        icon: "substack",
      },
    ],
  },
  education: [
    {
      school: "Vivekanand Education Society’s Institute of Technology",
      degree: "Bachelor of Engineering, Computer Engineering",
      start: "2018",
      end: "2022",
      grade: "CGPA: 9.39",
    },
  ],
  work: [
    {
      company: "HackerRank",
      link: "https://hackerrank.com",
      badges: [],
      title: "Senior Software Engineer",
      start: "Feb 2025",
      end: "Present",
      description:
        "Owned and Developed from scratch, a new product line - AI Interviews in React, Next.js and Nest.js. Built real-time voice agents using WebRTC. Migrated a legacy repository to Typescript from Flow types (1500+ files).",
    },
    {
      company: "HackerRank",
      link: "https://hackerrank.com",
      badges: [],
      title: "Software Development Engineer - II",
      start: "July 2023",
      end: "Jan 2025",
      description:
        "Added support for Code Repository questions on the platform, laid the foundation of Next-gen hiring product which eventually became the OKR #1 for the company.",
    },
    {
      company: "HackerRank",
      link: "https://hackerrank.com",
      badges: [],
      title: "Software Development Engineer",
      start: "Jun 2022",
      end: "July 2023",
      description:
        "Added support for Database Schema type Questions. Integrated Terminal and Console for running test cases in HackerRank Interviews.",
    },
    {
      company: "HackerRank",
      link: "https://hackerrank.com",
      badges: [],
      title: "Software Engineer Intern",
      start: "Jan 2022",
      end: "Jun 2022",
      description:
        "Developed web components in React.js with end-to-end test coverage. Translated design wireframes into high-quality reusable code.",
    },
    {
      company: "Economize Inc.",
      link: "https://www.economize.cloud/",
      badges: [],
      title: "Software Engineer Intern",
      start: "June 2021",
      end: "Dec 2021",
      description:
        "Built pixel-perfect, responsive web interfaces in JavaScript and Vue.js. Increased application test coverage from 20% to 80%. Developed cloud functions in Go. Built a dashboard using Nuxt.js & Tailwind CSS. Migrated the main website code to Vue.js and Strapi headless CMS.",
    },
    {
      company: "CNCF - Buildpacks",
      link: "https://buildpacks.io/",
      badges: ["LFX Mentorship"],
      title: "Open Source Developer",
      start: "Aug 2021",
      end: "Oct 2021",
      description:
        "Worked on web redesign of features section. Analyzed several build tools including Paketo Buildpacks, Dockerfiles, Kaniko, Source2Image, Jib.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Tailwind CSS",
    "PostgreSQL",
    "WebRTC",
    "Docker",
    "Kubernetes",
    "AWS",
    "Google Cloud",
    "Python",
    "Java",
    "C++",
  ],
  projects: [
    {
      title: "Job Board",
      techStack: ["React.js", "Express.js", "Node.js", "Redis"],
      description:
        "Built a Live updating Job Board to fetch latest New-Grad Job openings. Optimized REST API calls by 50% using Redis caching.",
      link: {
        label: "GitHub",
        href: "#",
      },
    },
    {
      title: "MedEasy",
      techStack: ["MySQL", "HTML", "CSS", "JavaScript"],
      description:
        "Built features like ordering of medicines, searching products, order history, and admin panel.",
      link: {
        label: "GitHub",
        href: "#",
      },
    },
  ],
  talks: [
    {
      title: "Improving Navigation Performance in Webapps",
      conference: "ReactPlay Meetup",
      date: "June 2025",
      link: "https://x.com/ReactPlayIO/status/1933843442754613311",
      slides: "https://performace-talk-reactplay.vercel.app/",
    },
    {
      title: "Web Accessibility - A developer’s perspective",
      conference: "FOSS United Meetup",
      date: "May 2023",
      link: "https://x.com/MumbaiFOSS/status/1661361301640323072",
      slides: "https://docs.google.com/presentation/d/1h10tA5qvmlXienbExZwmu_mt8nUekyRwRlxpEI3oP2g/edit?usp=sharing&pli=1&authuser=0"
    },
  ],
} as const;

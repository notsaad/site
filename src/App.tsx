import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import Background from "./components/Background";
import { SaadGPT } from "./components/saadgpt";
import Resume from "./components/Resume";

const projects = [
  {
    title: "Research Paper: HABO Framework for Hyperparameter Optimization",
    description:
      "A research paper in the field of reinforcement learning. Supervised by Dr. Tom Cesari at the University of Ottawa, EECS Department.",
    link: "https://arxiv.org/abs/2503.10282",
  },
  {
    title: "Custom Interpreter",
    description:
      "A lightweight interpreter from scratch for a custom programming language, supporting basic arithmetic operations, control flow, and data types.",
    link: "https://github.com/notsaad/interpreter",
  },
  {
    title: "Sustain App",
    description:
      "React Native mobile app for the uOttaHack 6 Hackathon that calculates clothing items' environmental impact through quantitative analysis based on clothing tag information.",
    link: "https://github.com/notsaad/uOttaHack2024",
  },
];

const contactLinks = [
  {
    href: "mailto:saadmazhar@me.com",
    text: "Email Me",
  },
  {
    href: "https://www.github.com/notsaad",
    text: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/notsaad",
    text: "LinkedIn",
    external: true,
  },
];

const education = [
  {
    institution: "University of Ottawa",
    degree: "Honors BS in Computer Science, Minor in Philosophy",
    period: "September 2021 - April 2026",
  },
];

const experiences = [
  {
    company: "Tesla",
    title: "Software Engineer Intern",
    location: "Palo Alto, California",
    period: "May 2025 - August 2025",
    description: [
      "Deployed an internal AI Agent with multi-tool calling capabilities.",
      "Engineered AI LLM integrations and tooling into existing internal workflows.",
      "Presented project at Department All Hands (800+ engineers) and received maximum possible performance review.",
    ],
  },
  {
    company: "Tesla",
    title: "Software Engineer Intern",
    location: "Palo Alto, California",
    period: "January 2025 - April 2025",
    description: [
      "Worked full-stack on Tesla’s electrical distribution management system servicing 10,000+ engineers worldwide using Go, React TypeScript, GraphQL and Kubernetes.",
      "Leveraged goroutines and channels to implement concurrent data processing pipelines, significantly improving the throughput and responsiveness of backend services.",
      "Wrote efficient GraphQL queries to return data from a MySQL database with millions of records.",
    ],
  },
  {
    company: "Nokia",
    title: "Software Engineer Intern",
    location: "Ottawa, Ontario",
    period: "May 2024 - August 2024",
    description: [
      "Created Go based CLI tools for network configuration management that automated previously manual processes.",
      "Helped maintain and improve network testbed infrastructure.",
    ],
  },
  {
    company: "Nokia",
    title: "Software Engineer Intern",
    location: "Ottawa, Ontario",
    period: "September 2023 - December 2023",
    description: [
      "Developed Go automation scripts to eliminate redundant In-Service-Software-Upgrade (ISSU) functions and structures.",
      "Streamlined codebase maintenance by automating the identification and removal of obsolete code structures.",
    ],
  },
  {
    company: "Diffraction Limited",
    title: "Software Engineer Intern",
    location: "Ottawa, Ontario",
    period: "May 2023 - August 2023",
    description: [
      "Designed and implemented a robust C++ enumeration system to efficiently translate hex codes into corresponding error messages, reducing error interpretation time by 90%.",
      "Optimized SQL database schema for parsed log data, resulting in a 50% improvement in query response times.",
      "Created a RESTful API using Node.js to serve parsed error data to a Vue.js frontend, enabling real-time error monitoring and analysis.",
    ],
  },
];

const HomePage = () => {
  return (
    <Layout>
      <ThemeToggle />
      <Header
        name="SAAD MAZHAR"
        email="saadmazhar@me.com"
        bio="CS at uOttawa, graduating in April 2026. Looking for New Grad Engineering Roles."
      />
      <Education education={education} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact links={contactLinks} />
    </Layout>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Background />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/saadgpt" element={<SaadGPT />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

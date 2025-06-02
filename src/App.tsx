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
import {SaadGPT} from "./components/saadgpt";


const projects = [
  {
    title: "Research Paper: HABO Framework for Hyperparameter Optimization",
    description:
      "A research paper in the field of reinforcment learning. Supervised by Dr. Tom Cesari at the University of Ottawa, EECS department.",
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
      "React Native mobile app for the uOttaHack 6 Hackathon calculating clothing items’ environmental impact via quantitative analysis based on a clothing tag’s information",
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
    period: "January 2025 - August 2025",
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
      "Developed Python automation scripts to eliminate redundant In-Service Software Upgrade (ISSU) functions and structures in a large legacy C codebase, reducing manual effort by approximately 92%.",
      "Streamlined codebase maintenance by automating the identification and removal of obsolete ISSU components, processing over 100,000 lines of code.",
      "Optimized test suite performance by removing redundant ISSU functions and structures, reducing overall test execution time by 3% and enabling more frequent integration testing cycles and CI/CD Pipelines.",
    ],
  },
  {
    company: "Nokia",
    title: "Software Engineer Intern",
    location: "Ottawa, Ontario",
    period: "September 2023 - December 2023",
    description: [
      "Built and maintained an internal order tracking system using Vue.js, MySQL, Node.js, Express.",
      "Implemented efficient API calls using Axios to interact with a MySQL database hosted on MariaDB, optimizing query performance and reducing backend response time by 30%",
      "Authored Bash scripts that automatically configured accurate IP/TCP protocols for newly updated beds.",
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
        bio="CS at uOttawa, Graduating April 2026. Looking for New Grad SWE/ML Roles."
      />
      <Education education={education} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact links={contactLinks} />
    </Layout>
  );
};

const ResumePage = () => {
  return (
    <Layout>
      <ThemeToggle />
      <div>
        <h1>Resume</h1>
        <p>My resume will be available here soon.</p>
      </div>
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
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

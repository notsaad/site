import Layout from './components/Layout';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';

// TODO: fix padding and margins
const projects = [
  {
    title: "HABO Framework for Hyperparameter Optimization - Research Paper",
    description: "A research paper in the field of reinforcment learning. Supervised by Dr. Tom Cesari at the University of Ottawa, EECS department.",
    link: "https://arxiv.org/abs/2503.10282"
  },
  {
    title: "Sustain App",
    description: "An e-commerce platform with modern design patterns and seamless user experience.",
    link: "https://github.com/notsaad/project-two"
  }
];

const contactLinks = [
  {
    href: "mailto:saadmazhar@me.com",
    text: "Email Me"
  },
  {
    href: "https://www.github.com/notsaad",
    text: "GitHub",
    external: true
  },
  {
    href: "https://www.linkedin.com/in/notsaad",
    text: "LinkedIn",
    external: true
  },
];

const education = [
  {
    institution: "University of Ottawa",
    degree: "Honours Bachelors in Computer Science",
    period: "September 2021 - December 2025"
  }
];

const experiences = [
  {
    company: "Tesla",
    title: "Software Engineer Intern",
    location: "Palo Alto, California",
    period: "January 2025 - August 2025",
    description: 'test',
  },
  {
    company: "Nokia",
    title: "Software Engineer Intern",
    location: "Ottawa, Ontario",
    period: "May 2024 - August 2024",
    description: 'test',
  },
  {
    company: "Nokia",
    title: "Software Engineer Intern",
    location: "Ottawa, Ontario",
    period: "September 2023 - December 2023",
    description: 'test',
  },
  {
    company: "Diffraction Limited",
    title: "Software Engineer Intern",
    location: "Ottawa, Ontario",
    period: "May 2023 - August 2023",
    description: 'test',
  }

];

// TODO: add an education and experience section
function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ThemeToggle />
        <Header
          name="SAAD MAZHAR"
          email="saadmazhar@me.com"
          bio="CS at uOttawa, Graduating December 2025. Looking for New Grad SWE/ML Roles."
        />
        <Education education={education} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Contact links={contactLinks} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
import Layout from './components/Layout';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';

const projects = [
  {
    title: "Project One",
    description: "A web application built with React and TypeScript, focusing on performance and accessibility."
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with modern design patterns and seamless user experience."
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
    degree: "Joint Honours Computer Science and Mathematics",
    period: "Expected April 2026"
  }
];

const experiences = [
  {
    company: "Tesla",
    title: "Software Engineer Intern",
    location: "Palo Alto, California, USA",
    period: "January 2025 - August 2025",
  },
  {
    company: "Nokia",
    title: "Embedded Software Engineer Intern",
    location: "Ottawa, Ontario, Canada",
    period: "May 2024 - August 2024",
  },
  {
    company: "Nokia",
    title: "Software Engineer Intern",
    location: "Ottawa, Ontario, Canada",
    period: "September 2023 - Decemeber 2023",
  },
  {
    company: "Diffraction Limited",
    title: "Software Engineer Intern",
    location: "Ottawa, Ontario, Canada",
    period: "May 2023 - August 2023",
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
          bio="Software engineer,
              Currently focused on creating accessible, 
              user-centered products."
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
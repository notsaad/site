import Layout from './components/Layout';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
        <Projects projects={projects} />
        <Contact links={contactLinks} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
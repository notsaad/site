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
    href: "mailto:your.email@example.com",
    text: "Email Me"
  },
  {
    href: "https://github.com/notsaad",
    text: "GitHub",
    external: true
  }
];

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ThemeToggle />
        <Header
          name="SAAD MAZHAR"
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
import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
    href: "https://github.com/yourusername",
    text: "GitHub",
    external: true
  }
];

function App() {
  return (
    <Layout>
      <Header
        name="Saad Mazhar"
        bio="Frontend developer specializing in building exceptional digital experiences. Currently focused on creating accessible, user-centered products."
      />
      <Projects projects={projects} />
      <Contact links={contactLinks} />
    </Layout>
  );
}

export default App;
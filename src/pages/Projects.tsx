import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  codeLink?: string;
}

const Projects: React.FC = () => {
  // Example projects - replace with your own
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and checkout functionality.',
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400?text=E-commerce+Project',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/username/project',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application that helps users organize and track their daily tasks and projects.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Styled Components'],
      image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/username/project',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions and forecasts based on user location.',
      technologies: ['JavaScript', 'React', 'OpenWeather API', 'CSS3'],
      image: 'https://via.placeholder.com/600x400?text=Weather+Dashboard',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/username/project',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my projects and skills.',
      technologies: ['React', 'TypeScript', 'Styled Components'],
      image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com/username/project',
    },
  ];

  return (
    <Section title="Projects" subtitle="Check out some of the projects I've worked on">
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default Projects;
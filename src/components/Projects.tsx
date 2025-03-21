import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from './Section';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.a`
  padding: 1.5rem;
  border: 1px solid #444444;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    border-color: #cccccc;
    transform: translateY(-2px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section>
      <SectionTitle>Selected Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default Projects; 
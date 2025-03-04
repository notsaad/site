import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  codeLink?: string;
}

const ProjectCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  padding: 0;
`;

const ProjectImage = styled.div<{ image: string }>`
  height: 200px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.lg};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => `${theme.colors.accent}33`};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  liveLink,
  codeLink,
}) => {
  return (
    <ProjectCardContainer hoverable>
      <ProjectImage image={image} />
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <TechStack>
          {technologies.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechStack>
        <ProjectLinks>
          {liveLink && (
            <Button as="a" href={liveLink} target="_blank" small>
              View Demo
            </Button>
          )}
          {codeLink && (
            <Button as="a" href={codeLink} target="_blank" primary={false} small>
              View Code
            </Button>
          )}
        </ProjectLinks>
      </ProjectContent>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
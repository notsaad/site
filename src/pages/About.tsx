import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BioParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    z-index: -1;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  position: relative;
`;

const SkillsContainer = styled.div`
  margin-top: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SkillTag = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'Node.js',
    'GraphQL', 'Styled Components', 'Redux', 'Git', 'Figma', 'Responsive Design'
  ];

  return (
    <AboutContainer>
      <Section title="About Me" subtitle="Here's a bit about who I am and what I do">
        <AboutContent>
          <BioContainer>
            <BioParagraph>
              Hello! I'm John, a frontend developer with a passion for creating engaging and intuitive user interfaces. 
              I have a background in computer science and over 3 years of experience building web applications.
            </BioParagraph>
            <BioParagraph>
              My journey in web development began when I built my first personal website during college. Since then, 
              I've worked on a variety of projects ranging from small business websites to large-scale web applications.
            </BioParagraph>
            <BioParagraph>
              I'm particularly interested in the intersection of design and development, and I believe that 
              great software should not only function well but also look great and provide an exceptional user experience.
            </BioParagraph>
            <BioParagraph>
              When I'm not coding, you can find me exploring new coffee shops, reading science fiction, 
              or hiking in the mountains.
            </BioParagraph>
            
            <SkillsContainer>
              <h3>Skills & Technologies</h3>
              <SkillsGrid>
                {skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillsGrid>
            </SkillsContainer>
          </BioContainer>
          
          <ProfileImageContainer>
            <ProfileImage />
          </ProfileImageContainer>
        </AboutContent>
      </Section>
    </AboutContainer>
  );
};

export default About;
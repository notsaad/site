import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from './Section';

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const EducationItem = styled.div`
  padding: 1.5rem;
  border: 1px solid #444444;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #cccccc;
  }
`;

const Institution = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Degree = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
`;

const Period = styled.p`
  color: #888;
  font-size: 0.85rem;
`;

interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

interface EducationProps {
  education: EducationEntry[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      <EducationList>
        {education.map((entry, index) => (
          <EducationItem key={index}>
            <Institution>{entry.institution}</Institution>
            <Degree>{entry.degree}</Degree>
            <Period>{entry.period}</Period>
          </EducationItem>
        ))}
      </EducationList>
    </Section>
  );
};

export default Education; 
import React, { useState } from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from './Section';

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ExperienceItem = styled.div`
  padding: 0 1rem 0.5rem 1rem;
  border: 1px solid #444444;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #cccccc;
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const CompanyName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h4`
  font-size: 1.1rem;
  line-height: 0;
  color: #999;
  margin-bottom: 0rem;
`;

const LocationAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #888;
`;

const Location = styled.span``;

const Period = styled.span``;

const Description = styled.ul`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;

interface ExperienceEntry {
  company: string;
  title: string;
  location: string;
  period: string;
  description: string[];
}

interface ExperienceProps {
  experiences: ExperienceEntry[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [selectedItem, setSelectedItem] = useState<number|null>(null);

  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      <ExperienceList>
        {experiences.map((entry, index) => (
          <ExperienceItem 
            key={index}
            onClick={(e) => {
                if (e.defaultPrevented){
                  return;
                }
                if (index === selectedItem){
                  setSelectedItem(null);
                } else {
                  setSelectedItem(index);
                }
              }
            }
          >
            <CompanyName>{entry.company}</CompanyName>
            <JobTitle>{entry.title}</JobTitle>
            {selectedItem === index && (
              <Description>
                {entry.description.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      margin: '0.5rem 1rem',
                    }}
                  >
                    {point}
                  </li>
                ))}
              </Description>
            )}
            <LocationAndDate>
              <Location>{entry.location}</Location>
              <Period>{entry.period}</Period>
            </LocationAndDate>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </Section>
  );
};

export default Experience; 
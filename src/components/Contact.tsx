import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from './Section';
import { Bio } from './Header';

const ContactSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Link = styled.a`
  color: #000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

interface ContactLink {
  href: string;
  text: string;
  external?: boolean;
}

interface ContactProps {
  links: ContactLink[];
}

const Contact: React.FC<ContactProps> = ({ links }) => {
  return (
    <Section>
      <SectionTitle>Get in Touch</SectionTitle>
      <Bio>
        I'm always interested in hearing about new projects and opportunities.
      </Bio>
      <ContactSection>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer"
            })}
          >
            {link.text}
          </Link>
        ))}
      </ContactSection>
    </Section>
  );
};

export default Contact; 
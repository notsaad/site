import React, { useState } from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "./Section";
import { Bio } from "./Header";

const ContactSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  position: relative;
`;

const PopupNotification = styled.div<{ show: boolean }>`
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: translateY(${(props) => (props.show ? 0 : 10)}px);
  transition: all 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;
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

const Button = styled.button`
  color: #000;
  background: none;
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.2s ease;
  cursor: pointer;

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
  const [buttonText, setButtonText] = useState<String>("Email Me!");
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseClick = () => {
    setButtonText("saadmazhar@me.com");
    copyEmail();
  };

  const handleMouseLeave = () => {
    setButtonText("Email Me!");
    setShowPopup(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("saadmazhar@me.com");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      console.log("Email copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy email to clipboard:", err);
    }
  };

  return (
    <Section>
      <SectionTitle>Get in Touch</SectionTitle>
      <Bio>
        I'm always interested in hearing about new projects and opportunities.
      </Bio>
      <ContactSection>
        <PopupNotification show={showPopup}>
          Copied to clipboard!
        </PopupNotification>
        <Button
          onClick={handleMouseClick}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </Button>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer",
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

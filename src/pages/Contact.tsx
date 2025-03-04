import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactDetailsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => `${theme.colors.primary}20`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const ContactText = styled.div``;

const ContactTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const ContactValue = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.cardBg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: rgba(25, 135, 84, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: rgb(25, 135, 84);
  margin-bottom: 1rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate success
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <Section title="Contact" subtitle="Get in touch with me">
      <ContactContainer>
        <ContactInfo>
          <p>
            I'm interested in freelance opportunities – especially ambitious or large projects. 
            However, if you have other request or question, don't hesitate to use the form.
          </p>
          
          <ContactDetailsCard>
            <ContactMethod>
              <ContactIcon>📧</ContactIcon>
              <ContactText>
                <ContactTitle>Email</ContactTitle>
                <ContactValue href="mailto:john.doe@example.com">saadmazhar@me.com</ContactValue>
              </ContactText>
            </ContactMethod>
            
            <ContactMethod>
              <ContactIcon>📱</ContactIcon>
              <ContactText>
                <ContactTitle>Phone</ContactTitle>
                <ContactValue href="tel:+11234567890">+1 (613) 854-8618</ContactValue>
              </ContactText>
            </ContactMethod>
            
            <ContactMethod>
              <ContactIcon>📍</ContactIcon>
              <ContactText>
                <ContactTitle>Location</ContactTitle>
                <ContactValue as="p">San Francisco, CA</ContactValue>
              </ContactText>
            </ContactMethod>
          </ContactDetailsCard>
          
          <div>
            <h3>Follow Me</h3>
            <SocialLinks>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">GH</SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LI</SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</SocialLink>
              <SocialLink href="https://dribbble.com" target="_blank" rel="noopener noreferrer">DR</SocialLink>
            </SocialLinks>
          </div>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          {isSubmitted && (
            <SuccessMessage>
              Your message has been sent successfully! I'll get back to you soon.
            </SuccessMessage>
          )}
          
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
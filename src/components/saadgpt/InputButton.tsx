import React from "react";
import { SendButton } from "./styled";

interface InputButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColour?: string;
}

export const InputButton: React.FC<InputButtonProps> = ({backgroundColour = "#303030"}) => {
  return (
    <SendButton 
      aria-label="Send message"
      style={{ backgroundColor: backgroundColour }}
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 4L12 20" 
          stroke="#303030"
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <path 
          d="M6 10L12 4L18 10" 
          stroke="#303030"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </SendButton>
  );
};

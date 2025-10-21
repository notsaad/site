import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

const MoonIcon: React.FC = () => (
  <Icon viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path
      d="M21 14.5A9 9 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
      fill="currentColor"
    />
  </Icon>
);

export default MoonIcon;

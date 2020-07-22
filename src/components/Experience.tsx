import React from "react";
import styled from "styled-components";
import { media } from "./styles/Theme";

const StyledExperience = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 2 / span 2;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.tan};
  margin-bottom: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  h2 {
    font-family: ${(props) => props.theme.fonts.hdr};
    text-decoration: underline;
    text-decoration-style: wavy;
  }
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
    width: auto;
  }
`;

const Content = styled.div`
  margin: 10% 10%;
  font-size: ${(props) => props.theme.fontSize.med};
`;

const StyledIcons = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Icons = () => {
  return <StyledIcons></StyledIcons>;
};

const Experience = () => {
  return (
    <StyledExperience>
      <Content>
        <h2>Experience</h2>
        <img src="../icons/js.png" alt="" />
        <Icons />
      </Content>
    </StyledExperience>
  );
};

export default Experience;

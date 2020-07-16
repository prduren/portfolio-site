import React from "react";
import styled from "styled-components";

const StyledExperience = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 2 / span 2;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 2rem;
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Content = styled.div`
  margin: 10% 10%;
  font-size: ${(props) => props.theme.fontSize.med};
`;

const Experience = () => {
  return (
    <StyledExperience>
      <Content>
        <h2>Experience</h2>
      </Content>
    </StyledExperience>
  );
};

export default Experience;

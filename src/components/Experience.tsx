import React from "react";
import styled from "styled-components";

const StyledExperience = styled.div`
  background: pink;
  grid-column: 2 / span 2;
  margin: 2rem 2rem;
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Experience = () => {
  return <StyledExperience>exp</StyledExperience>;
};

export default Experience;

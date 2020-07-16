import React from "react";
import styled from "styled-components";

const StyledPortfolio = styled.div`
  background: green;
  grid-column: 2 / span 2;
  margin: 2rem 2rem;
  height: 100%;
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Portfolio = () => {
  return <StyledPortfolio>port</StyledPortfolio>;
};

export default Portfolio;

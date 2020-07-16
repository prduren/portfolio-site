import React from "react";
import styled from "styled-components";

const StyledPortfolio = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 2 / span 2;
  margin: 2rem 2rem;
  height: 100%;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Content = styled.div`
  margin: 10% 10%;
  font-size: ${(props) => props.theme.fontSize.med};
`;

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Content>
        <h2>Portfolio</h2>
      </Content>
    </StyledPortfolio>
  );
};

export default Portfolio;

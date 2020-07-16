import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 1;
  grid-row: 1 / span 3;
  margin: 2rem 2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Content = styled.div`
  margin: 10% 10%;
  h1 {
    font-size: ${(props) => props.theme.fontSize.lrg};
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <Content>
        <h1>Parker Duren</h1>
      </Content>
    </StyledMain>
  );
};

export default Main;

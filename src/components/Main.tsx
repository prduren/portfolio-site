import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  background: blue;
  grid-column: 1;
  grid-row: 1 / span 3;
  margin: 2rem 2rem;
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Main = () => {
  return <StyledMain>main</StyledMain>;
};

export default Main;

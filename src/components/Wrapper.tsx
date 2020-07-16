import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Main from "./Main";
import Posts from "./Posts";
import Experience from "./Experience";

const StyledWrapper = styled.div`
  display: grid;
  width: 95vw;
  height: 95vh;
  background: orange;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 2rem auto;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 100%;
  }
`;

const Wrapper = (_props: any) => {
  return (
    <StyledWrapper>
      <Main />
      <Portfolio />
      <Posts />
      <Experience />
    </StyledWrapper>
  );
};

export default Wrapper;

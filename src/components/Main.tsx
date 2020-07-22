import React from "react";
import styled from "styled-components";
import MainLinks from "./MainLinks";

const StyledMain = styled.div`
  position: relative;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 1;
  grid-row: 1 / span 3;
  margin: 2rem 2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.tan};
  height: 90%;
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
    height: auto;
  }
`;

const Content = styled.div`
  margin: 10% 10%;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSize.med};
  h1 {
    font-size: ${(props) => props.theme.fontSize.lrg};
    font-family: ${(props) => props.theme.fonts.hdr};
  }
  p {
    margin-top: 4rem;
    margin-bottom: 20rem;
    line-height: 4rem;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <Content>
        <h1>Parker Duren</h1>
        <p>
          I'm a developer with 4 years of experience creating crisp & clean
          websites & applications.
        </p>
        <p>I 💜 JavaSript, language, humans, & ferrets. </p>
        <MainLinks />
      </Content>
    </StyledMain>
  );
};

export default Main;

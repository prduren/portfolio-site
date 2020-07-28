import React from 'react';
import styled from 'styled-components';
import MainLinks from './MainLinks';
import { fancyHr } from './styles/Keyframes';

const StyledMain = styled.aside`
  position: sticky;
  top: 0;
  grid-column: 1;
  grid-row: 1 / span 3;
  margin: 0rem 2rem;
  height: 90vh;
  @media screen and (max-width: 900px) {
    margin-top: 2rem;
    position: static;
    grid-column: auto;
    grid-row: auto;
    height: auto;
    border-radius: 0.8rem;
    background-color: ${props => props.theme.colors.tan};
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  }
  animation: ${fancyHr};
`;

const Content = styled.div`
  margin: 10% 10%;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSize.med};
  h1 {
    font-size: ${props => props.theme.fontSize.lrg};
    font-family: ${props => props.theme.fonts.hdr};
  }
  p {
    margin-top: 4rem;
    margin-bottom: 5rem;
    line-height: 4rem;
  }
  hr {
    height: 5px;
    width: 90%;
    transform: skew(-30deg);
    border: none;
    float: left;
    background: linear-gradient(-45deg, #160f29, #ddbea8, #160f29, #ddbea8);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <Content>
        <h1>Parker Duren</h1>
        <hr />
        <br />
        <p>
          I am a developer with 4 years of experience creating crisp & clean websites &
          applications.
        </p>
        <hr />
        <br />
        <p>I love JavaSript, language, humans, ferrets, and Japanese stuff. </p>
        <hr />
        <br />
        <MainLinks />
      </Content>
    </StyledMain>
  );
};

export default Main;

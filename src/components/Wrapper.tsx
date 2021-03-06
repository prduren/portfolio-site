import React from 'react';
import styled from 'styled-components';
import Portfolio from './Portfolio';
import Main from './Main';
import Posts from './Posts';
import Experience from './Experience';

const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  width: 95vw;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px;
  margin: auto;
  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
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

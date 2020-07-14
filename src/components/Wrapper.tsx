import React from 'react';
import styled from 'styled-components';
import Portfolio from './Portfolio';
import Main from './Main';
import Posts from './Posts';
import Experience from './Experience';

const StyledWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  background: orange;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
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

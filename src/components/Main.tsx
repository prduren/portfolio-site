import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  background: blue;
  grid-column: 1;
  grid-row: 1 / span 3;
`;

const Main = () => {
  return <StyledMain>main</StyledMain>;
};

export default Main;

import React from 'react';
import styled from 'styled-components';

const StyledPosts = styled.div`
  background: red;
  grid-column: 2 / span 2;
`;

const Posts = () => {
  return <StyledPosts>posts</StyledPosts>;
};

export default Posts;

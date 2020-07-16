import React from "react";
import styled from "styled-components";

const StyledPosts = styled.div`
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

const Posts = () => {
  return <StyledPosts>posts</StyledPosts>;
};

export default Posts;

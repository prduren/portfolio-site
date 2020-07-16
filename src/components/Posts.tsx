import React from "react";
import styled from "styled-components";

const StyledPosts = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 2 / span 2;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.med};
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Content = styled.div`
  margin: 10% 10%;
  font-size: ${(props) => props.theme.fontSize.med};
`;

const Posts = () => {
  return (
    <StyledPosts>
      <Content>
        <h2>Posts</h2>
      </Content>
    </StyledPosts>
  );
};

export default Posts;

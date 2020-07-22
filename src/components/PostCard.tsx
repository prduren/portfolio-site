import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.med};
  width: 100%;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple};
    font-size: ${(props) => props.theme.fontSize.sml};
  }
`;

function PostCard() {
  return (
    <StyledCard>
      <img src="https://picsum.photos/200/300" alt="placeholder" />
      <p>this is a post that I probably should write soon</p>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        source code
      </a>
    </StyledCard>
  );
}

export default PostCard;

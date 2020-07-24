import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

const StyledCard = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.med};
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple};
    font-size: ${(props) => props.theme.fontSize.sml};
  }
  .item {
    line-height: 4rem;
  }
`;

function PostCard() {
  return (
    <StyledCard>
      <img src="https://picsum.photos/300/200" alt="placeholder" />
      <h5>A Title</h5>
      <p>this is a description of the post</p>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="item" icon={faMedium} />
      </a>
    </StyledCard>
  );
}

export default PostCard;

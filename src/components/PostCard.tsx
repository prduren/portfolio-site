import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

const StyledCard = styled.div`
  font-size: ${(props) => props.theme.fontSize.med};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 40%;
  img {
    height: auto;
    width: 300px;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple};
    font-size: ${(props) => props.theme.fontSize.sml};
  }
  h5 {
    float: left;
    width: 100%;
  }
  p {
    float: left;
    font-size: ${(props) => props.theme.fontSize.sml};
    width: 100%;
  }
  .item {
    line-height: 4rem;
    font-size: 3rem;
    display: block;
    margin-left: 1rem;
  }
  .break {
    flex-basis: 100%;
    height: 0;
  }
  @media screen and (max-width: 1300px) {
    width: 80%;
  }
`;

function PostCard() {
  return (
    <StyledCard>
      <div>
        <h5>
          <strong>A Title</strong>
        </h5>
        <p>this is a description of the post</p>
        <img src="https://picsum.photos/300/200" alt="placeholder" />
        <div className="break"></div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="item" icon={faMedium} />
        </a>
      </div>
    </StyledCard>
  );
}

export default PostCard;

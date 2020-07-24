import React from "react";
import styled from "styled-components";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "@brainhubeu/react-carousel";
import PostCard from "./PostCard";

const StyledPosts = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 2 / span 2;
  border-radius: 0.8rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.tan};
  font-size: ${(props) => props.theme.fontSize.med};
  margin-left: 2rem;
  margin-right: 2rem;
  .header-div {
    h2 {
      font-family: ${(props) => props.theme.fonts.hdr};
      margin-bottom: 1rem;
    }
    .underline {
      height: 4px;
      width: 20rem;
      background-color: black;
      margin-bottom: 2rem;
      transform: skew(-30deg);
      background: linear-gradient(
        to right,
        ${(props) => props.theme.colors.brown},
        ${(props) => props.theme.colors.green}
      );
    }
  }
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
    width: auto;
  }
`;

const Content = styled.div`
  margin: 5% 5%;
  font-size: ${(props) => props.theme.fontSize.med};
  .BrainhubCarousel__arrowLeft {
    display: none;
  }
  .BrainhubCarousel__arrows {
    background-color: ${(props) => props.theme.colors.blue};
    margin: 0.5rem;
    &:hover {
      background-color: ${(props) => props.theme.colors.green};
    }
  }
`;

const Posts = () => {
  return (
    <StyledPosts>
      <Content>
        <div className="header-div">
          <h2>Posts</h2>
          <div className="underline"></div>
        </div>
        <Carousel infinite arrows>
          <PostCard />
          <PostCard />
          <PostCard />
        </Carousel>
      </Content>
    </StyledPosts>
  );
};

export default Posts;

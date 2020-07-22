import React from "react";
import styled from "styled-components";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import PostCard from "./PostCard";

const StyledPosts = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 2 / span 2;
  border-radius: 0.8rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.tan};
  font-size: ${(props) => props.theme.fontSize.med};
  h2 {
    font-family: ${(props) => props.theme.fonts.hdr};
    text-decoration: underline;
    text-decoration-style: wavy;
  }
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Content = styled.div`
  margin: 5% 5%;
  font-size: ${(props) => props.theme.fontSize.med};
  .BrainhubCarousel__arrows {
    background-color: ${(props) => props.theme.colors.blue};
    &:hover {
      background-color: ${(props) => props.theme.colors.green};
    }
  }
`;

const Posts = () => {
  return (
    <StyledPosts>
      <Content>
        <h2>Posts</h2>
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

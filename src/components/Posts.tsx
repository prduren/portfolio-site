import React from 'react';
import styled from 'styled-components';
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel from '@brainhubeu/react-carousel';
import PostCard from './PostCard';
import { fancyHr } from './styles/Keyframes';

const StyledPosts = styled.div`
  grid-column: 2 / span 2;
  width: 100%;
  background-color: ${props => props.theme.colors.tan};
  font-size: ${props => props.theme.fontSize.med};
  margin-left: 2rem;
  margin-right: 2rem;
  .header-div {
    h2 {
      font-family: ${props => props.theme.fonts.hdr};
      margin-bottom: 1rem;
    }
    .underline {
      height: 4px;
      width: 20rem;
      margin-bottom: 2rem;
      transform: skew(-30deg);
      background: linear-gradient(-45deg, #368f8b, #ddbea8, #246173, #ddbea8);
      background-size: 400% 400%;
      animation: gradient 5s ease infinite, ${fancyHr};
    }
  }
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
    width: auto;
    border-radius: 0.8rem;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin: 2rem 2rem;
  }
`;

const Content = styled.div`
  margin: 5% 5%;
  font-size: ${props => props.theme.fontSize.med};
  p,
  h5,
  a {
    font-family: ${props => props.theme.fonts.main};
  }
  .BrainhubCarousel__arrowLeft {
    display: none;
  }
  .BrainhubCarousel__arrows {
    background-color: ${props => props.theme.colors.purple};
    margin: 0.5rem;
    &:hover {
      background-color: #49425c;
    }
  }
`;

const Posts = () => {
  return (
    <StyledPosts>
      <Content>
        <div className="header-div">
          <h2>Posts</h2>
          <div className="underline" />
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

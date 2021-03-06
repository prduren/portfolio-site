import React from 'react';
import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import PortCard from './PortCard';
import { fancyHr } from './styles/Keyframes';

const StyledPortfolio = styled.div`
  grid-column: 2 / span 2;
  margin-left: 2rem;
  margin-right: 2rem;
  width: 100%;
  background-color: ${props => props.theme.colors.tan};
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
      animation: gradient 10s ease infinite, ${fancyHr};
    }
  }
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
    width: auto;
    border-radius: 0.8rem;
    margin-top: 2rem;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
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
    background-color: ${props => props.theme.colors.blue};
    margin: 0.5rem;
    &:hover {
      background-color: ${props => props.theme.colors.green};
    }
  }
`;

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Content>
        <div className="header-div">
          <h2>Portfolio</h2>
          <div className="underline" />
        </div>
        <div className="carousel-wrapper">
          <Carousel arrows infinite>
            <PortCard
              title="YES"
              pText="THE PROPS WORKED"
              image="https://via.placeholder.com/150"
              sc="https://github/.com"
              live="https://github.com"
            />
            <PortCard />
            <PortCard />
          </Carousel>
        </div>
      </Content>
    </StyledPortfolio>
  );
};

export default Portfolio;

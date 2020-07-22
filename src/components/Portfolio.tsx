import React from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import PortCard from "./PortCard";

const StyledPortfolio = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 2 / span 2;
  border-radius: 0.8rem;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.tan};
  h2 {
    font-family: ${(props) => props.theme.fonts.hdr};
    text-decoration: underline;
    text-decoration-style: wavy;
    margin-bottom: 1rem;
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
  .BrainhubCarousel__arrows {
    background-color: ${(props) => props.theme.colors.blue};
    margin: 0.5rem;
    &:hover {
      background-color: ${(props) => props.theme.colors.green};
    }
  }
`;

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Content>
        <h2>Portfolio</h2>
        <div className="carousel-wrapper">
          <Carousel arrows infinite>
            <PortCard />
            <PortCard />
            <PortCard />
          </Carousel>
        </div>
      </Content>
    </StyledPortfolio>
  );
};

export default Portfolio;

import React from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const StyledPortfolio = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 2 / span 2;
  border-radius: 0.8rem;
  margin-top: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  h2 {
    font-family: ${(props) => props.theme.fonts.hdr};
  }
  @media screen and (max-width: 900px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const Content = styled.div`
  margin: 10% 10%;
  font-size: ${(props) => props.theme.fontSize.med};

  .carousel-wrapper {
    width: 100%;
  }
`;

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Content>
        <h2>Portfolio</h2>
        <div className="carousel-wrapper">
          <Carousel arrows dots>
            <img src="https://www.placecage.com/200/300" alt="" />
            <img src="https://www.placecage.com/200/300" alt="" />
            <img src="https://www.placecage.com/200/300" alt="" />
          </Carousel>
        </div>
      </Content>
    </StyledPortfolio>
  );
};

export default Portfolio;

import React from "react";
import styled from "styled-components";
import { media } from "./styles/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faCss3,
  faHtml5,
  faGit,
  faGithub,
  faFirefoxBrowser,
  faChrome,
  faLess,
  faSass,
  faStripe,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

const StyledExperience = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  grid-column: 2 / span 2;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.tan};
  margin-bottom: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  width: 100%;
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
`;

const StyledIcons = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  .item {
    height: auto;
    width: 3rem;
  }
`;

const Icons = () => {
  return (
    <StyledIcons>
      <FontAwesomeIcon className="item" icon={faJsSquare} />
      <FontAwesomeIcon className="item" icon={faReact} />
      <FontAwesomeIcon className="item" icon={faCss3} />
      <FontAwesomeIcon className="item" icon={faHtml5} />
      <FontAwesomeIcon className="item" icon={faGit} />
      <FontAwesomeIcon className="item" icon={faGithub} />
      <FontAwesomeIcon className="item" icon={faFirefoxBrowser} />
      <FontAwesomeIcon className="item" icon={faChrome} />
      <FontAwesomeIcon className="item" icon={faWindows} />
      <FontAwesomeIcon className="item" icon={faStripe} />
      <FontAwesomeIcon className="item" icon={faSass} />
      <FontAwesomeIcon className="item" icon={faLess} />
    </StyledIcons>
  );
};

const Experience = () => {
  return (
    <StyledExperience>
      <Content>
        <div className="header-div">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <img src="../icons/js.png" alt="" />
        <Icons />
      </Content>
    </StyledExperience>
  );
};

export default Experience;

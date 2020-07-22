import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.med};
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple};
    font-size: ${(props) => props.theme.fontSize.sml};
  }
`;

function PortCard() {
  return (
    <StyledCard>
      <img src="https://picsum.photos/300/200" alt="placeholder" />
      <p>this is a project that I need to add some text for</p>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        source code
      </a>
      {"  ///  "}
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        live
      </a>
    </StyledCard>
  );
}

export default PortCard;

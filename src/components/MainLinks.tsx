import React from "react";
import styled from "styled-components";

const StyledMainLinks = styled.div`
  bottom: 4rem;
  left: 4rem;
  position: absolute;
  float: bottom;
  width: 30%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
`;

function MainLinks() {
  return (
    <StyledMainLinks>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/prduren"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        </svg>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/parker-duren/"
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 500 500"
          strokeWidth="1.5"
          stroke="black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            fill="black"
            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
          />
        </svg>
      </a>
    </StyledMainLinks>
  );
}

export default MainLinks;

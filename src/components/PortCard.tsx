import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  font-size: ${props => props.theme.fontSize.med};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 40%;
  img {
    height: auto;
    width: 300px;
  }
  h5,
  p {
    width: 100%;
    float: left;
  }
  p {
    font-size: ${props => props.theme.fontSize.sml};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.purple};
    font-size: ${props => props.theme.fontSize.sml};
    width: 100%;
    line-height: 2.5rem;
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

const PortCard = () => {
  return (
    <StyledCard>
      <div>
        <h5>
          <strong>A Title</strong>
        </h5>
        <p>this is a project that I need to add some text for</p>
        <img src="https://picsum.photos/300/200" alt="placeholder" />
        <div className="break" />
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          / source code
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          / live
        </a>
      </div>
    </StyledCard>
  );
};

export default PortCard;

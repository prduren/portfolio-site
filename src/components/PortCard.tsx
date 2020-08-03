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

export interface PortCardProps {
  title: string;
  pText: string;
  image: string;
  sc: string;
  live: string;
}

const PortCard: React.FC<PortCardProps> = props => {
  return (
    <StyledCard>
      <div>
        <h5>
          <strong>{props.title}</strong>
        </h5>
        <p>{props.pText}</p>
        <img src={props.image} alt="placeholder" />
        <div className="break" />
        <a href={props.sc} target="_blank" rel="noopener noreferrer">
          / source code
        </a>
        <a href={props.live} target="_blank" rel="noopener noreferrer">
          / live
        </a>
      </div>
    </StyledCard>
  );
};

export default PortCard;

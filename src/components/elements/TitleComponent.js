import React from 'react'
import { styled } from 'styled-components';

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const TitleComponent = (props) => {
  return (
    <Title>
      {props.children}
    </Title>
  )
}

export default TitleComponent
import React from 'react'
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  //margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: start;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;

const ContainerComponent = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default ContainerComponent
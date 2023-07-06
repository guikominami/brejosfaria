import React from 'react'

import { styled } from 'styled-components';

const BoxLeft = styled.div`
  width: 50%;

  margin-left: 4rem;
  margin-right: 4rem;

  @media (max-width: 64em) {
    margin-left: 2rem;
    margin-right: 2rem;

    width: 100%;
    align-self: center;
    flex-direction: column;
  }
`;

const BoxLeftComponent = (props) => {
  return (
    <BoxLeft>
      {props.children}
    </BoxLeft>
  )
}

export default BoxLeftComponent

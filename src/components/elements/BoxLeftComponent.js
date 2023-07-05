import React from 'react'

import { styled } from 'styled-components';

const BoxLeft = styled.div`
  width: 50%;

  margin-left: 4rem;
  margin-right: 4rem;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }

  @media (max-width: 48em) {
    width: 90%;
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

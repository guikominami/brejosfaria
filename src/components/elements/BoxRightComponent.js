import React from 'react'

import { styled } from 'styled-components';

const BoxRight = styled.div`
  width: 50%;

  margin-right: 2rem;

  @media (max-width: 64em) {
    width: 100%;
    align-self: center;
    margin-left: 1rem;
    margin-right: 1rem;    
  }

`;

const BoxRightComponent = (props) => {
  return (
    <BoxRight>
      {props.children}
    </BoxRight>
  )
}

export default BoxRightComponent

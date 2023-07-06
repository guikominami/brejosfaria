import React from 'react'

import { styled } from 'styled-components';

const BoxRight = styled.div`
  width: 50%;

  margin-right: 2rem;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
    margin-left: 3rem;
    margin-right: 3rem;    
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

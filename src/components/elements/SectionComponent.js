import React from 'react'

import { styled } from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: 0.125rem 0.125rem 0.25rem 0.25rem rgb(0 0 0 / 10%);  
`;

const SectionComponent = (props) => {
  return (
    <Section id={props.id}>
      {props.children}
    </Section>
  )
}

export default SectionComponent

import React, { useState } from "react";
import styled from "styled-components";
import { Minus } from '../assets/icons/Minus';
import { Plus } from '../assets/icons/Plus';

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 1rem 0;

  @media (max-width: 48em){
    margin: 1rem 0;
  }
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontxl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.text}, 0.6)`};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  line-height: 1.2rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`

const Indicator = styled.span`
  font-size: ${props => props.theme.fontxxl};

  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.carouselColor};
  }

  @media (max-width: 48em){
    margin-left: 1rem;
    font-size: ${props => props.theme.fontxl};
  }  
`

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {
          collapse ?
          <Indicator>
            <Minus />
          </Indicator> : 
          <Indicator>
            <Plus />
          </Indicator>
        }
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;

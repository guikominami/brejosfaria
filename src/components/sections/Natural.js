import React, { useEffect } from "react";
import { styled } from "styled-components";

import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import TitleComponent from "../elements/TitleComponent";
import Carousel from "../Carousel";

import { NATURAL } from "../../assets/data/imagesInfo";

const Box = styled.div`
  width: 80%;

  margin-left: 4rem;
  margin-right: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 64em) {
    width: 100%;
    align-self: center;
    flex-direction: column;    
  }
`;

const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 75%;
  margin: 0.5rem auto;

  @media (max-width: 64em) {
    width: 100%;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 75%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
  }

`;

const Natural = () => {
  return (
    <SectionComponent id="natural">
      <br></br>      
      <TitleComponent>Natural</TitleComponent>
      <br></br>
      <ContainerComponent>
        <Box>
          <SubTitle>
            Alimentação, solos, água, energia, animais, biodiversidade,
            agrofloresta (montado).
          </SubTitle>
          <SubText>
            Na visão de estilo de vida em cohousing, a alimentação, os solos, a
            água, a energia, os animais, a biodiversidade e a agrofloresta
            desempenham papéis fundamentais:
          </SubText>
          <Carousel 
            imagesCarousel={NATURAL} 
            disableAutoplay={true} 
            enableNavigation={true}
            enablePagination={true}
            bigSize={true}
          />
          <SubText>
            Estes elementos trabalham em conjunto para promover a
            autossuficiência, a resiliência e a regeneração ambiental no
            cohousing. Ao adotar práticas sustentáveis em relação à alimentação,
            solos, água, energia, animais, biodiversidade e agrofloresta, a
            comunidade torna-se um exemplo inspirador de vida em harmonia com a
            natureza.
          </SubText>
        </Box>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default Natural;

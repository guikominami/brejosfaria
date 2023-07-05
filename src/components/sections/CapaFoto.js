import React from "react";
import { styled } from "styled-components";

import imagemCapaDesktop from "../../assets/fotos/capa.jpg"
import imagemCapaMobile from "../../assets/fotos/capaMobile.jpg"

const Section = styled.section`
  min-height: ${(props) => `calc(110vh - ${props.theme.navHeight})`};
  width: 100vw;
  //height: 110vh;
  position: relative;
  background-color: ${(props) => props.theme.text};
`;

const Container = styled.div`
  width: 85%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img{
    width: 100%;
  }

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const ImageMobile = styled.div`
  display: none;

  @media (max-width: 48em) {
    display: flex;
  }  
`

const ImageDesktop = styled.div`
  display: flex;

  @media (max-width: 48em) {
    display: none;
  }    
`

const CapaFoto = () => {
  return (
    <Section id="capa-foto">
      <Container>
        <ImageDesktop>
          <img src={imagemCapaDesktop} alt="Imagem de capa"/>
        </ImageDesktop>
        <ImageMobile>
          <img src={imagemCapaMobile} alt="Imagem de capa"/>
        </ImageMobile>
      </Container>
    </Section>
  );
};

export default CapaFoto;

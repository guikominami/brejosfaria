import React from "react";
import { styled } from "styled-components";

import Carousel from "../Carousel";
import Button from "../Button";

import { CAPA } from "../../assets/data/imagesInfo";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};

  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 85%;
  min-height: 80vh;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    justify-content: center;

    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const BoxLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  @media (max-width: 48em) {
    width: 90%;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 80%;
    text-align: left;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Subtitle = styled.div`
  width: 80%;
  margin: 1rem auto;
  color: ${(props) => props.theme.text};
  justify-content: start;
  align-items: start;
`;

const Capa = () => {
  return (
    <Section id="capa">
      <Container>
        <BoxLeft>
          <Title>
            Bem vindo(a) ao <br /> Brejos Faria.
          </Title>
          <SubText>
            Somos uma cooperativa de habitação em modelo de direito de uso no
            bairro brejos faria, em Alhos Vedros, na Moita, que pretende ser uma
            alternativa ao mercado imobiliário especulativo. Estamos a criar uma
            comunidade regenerativa, auto-organizada e participativa de vizinhos
            que em colaboração com outras entidades, projetos e iniciativas
            existentes promovam o tecido social do bairro, a economia solidária
            e a natureza, num ambiente construído sustentável.
          </SubText>
          <Subtitle>
            <Button
              text="Localização"
              link="https://goo.gl/maps/CNNzt7SzE4LVFc7w6"
            />
          </Subtitle>
        </BoxLeft>
        <BoxRight>
          <Carousel
            imagesCarousel={CAPA}
            disableAutoplay={true}
            enableNavigation={true}
            enablePagination={true}
          />
        </BoxRight>
      </Container>
    </Section>
  );
};

export default Capa;

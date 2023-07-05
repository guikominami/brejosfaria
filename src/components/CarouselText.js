import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";

import Arrow from "../assets/icons/Arrow.svg";

import img1 from "../assets/Fotos/alem1.jpeg";
import img2 from "../assets/Fotos/alem2.jpeg";
import img3 from "../assets/Fotos/alem3.jpeg";
import img4 from "../assets/Fotos/alem4.jpeg";

const Container = styled.div`
  width: 90%;
  height: 70vh;

  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 100%;
    width: 100%;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    top: 60%;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    top: 60%;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const BoxLeft = styled.div`
  width: 60%;
  height: 100%;

  margin-left: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 40em) {
    width: 80%;
    margin-left: 0;

    margin-right: 2rem;

    background-color: aliceblue;
  }
`;

const BoxRight = styled.div`
  width: 40%;
  height: 100%;

  margin-right: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 40em) {
    display: none;
    margin-right: 0;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};

  width: 80%;
  margin-left: 40px;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    margin-left: 0;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.text};

  width: 80%;
  margin-left: 40px;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
    margin-left: 2rem;
    text-align: left;
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BoxLeft>
            <Title>Integração no bairro</Title>
            <SubText>

            </SubText>
          </BoxLeft>
          <BoxRight>
            <img src={img1} alt="The Weirdos" />
          </BoxRight>
        </SwiperSlide>
        <SwiperSlide>
          <BoxLeft>
            <Title>
              Relações com o mundo cooperativo (economia regenerativa).
            </Title>
            <SubText>
              TasdfsdafdsafasEse safasfsafassdfa TasdfsdafdsafasEse
              safasfsafassdfa safasfsafassdfa TasdfsdafdsafasEse safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa TasdfsdafdsafasEse
              safasfsafassdfa safasfsafassdfa TasdfsdafdsafasEse safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa TasdfsdafdsafasEse
              safasfsafassdfa safasfsafassdfa TasdfsdafdsafasEse safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa safasfsafassdfa
            </SubText>
          </BoxLeft>
          <BoxRight>
            <img src={img2} alt="The Weirdos" />
          </BoxRight>
        </SwiperSlide>
        <SwiperSlide>
          <BoxLeft>
            <Title>Redes conectadas</Title>
            <SubText>
              TasdfsdafdsafasEse safasfsafassdfa TasdfsdafdsafasEse
              safasfsafassdfa safasfsafassdfa TasdfsdafdsafasEse safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa TasdfsdafdsafasEse
              safasfsafassdfa safasfsafassdfa TasdfsdafdsafasEse safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa TasdfsdafdsafasEse
              safasfsafassdfa safasfsafassdfa TasdfsdafdsafasEse safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa safasfsafassdfa
            </SubText>
          </BoxLeft>
          <BoxRight>
            <img src={img3} alt="The Weirdos" />
          </BoxRight>
        </SwiperSlide>
        <SwiperSlide>
          <BoxLeft>
            <Title>
              Teoria de mudança (bioregiões, a parte num todo). Brejos Faria no
              contexto da região.
            </Title>
            <SubText>
              TasdfsdafdsafasEse safasfsafassdfa TasdfsdafdsafasEse
              safasfsafassdfa safasfsafassdfa TasdfsdafdsafasEse safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa TasdfsdafdsafasEse
              safasfsafassdfa safasfsafassdfa TasdfsdafdsafasEse safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa TasdfsdafdsafasEse
              safasfsafassdfa safasfsafassdfa TasdfsdafdsafasEse safasfsafassdfa
              TasdfsdafdsafasEse safasfsafassdfa safasfsafassdfa
            </SubText>
          </BoxLeft>
          <BoxRight>
            <img src={img4} alt="The Weirdos" />
          </BoxRight>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;

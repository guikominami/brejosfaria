import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";

import arrow from "../assets/icons/arrow.svg";

const Container = styled.div`

  width:${props => props.isBigSize ? "60vw": "40vw"};
  height:${props => props.isBigSize ? "85vh" : "62vh"};

  @media (max-width: 64em) {
    width:${props => props.isBigSize ? "90vw": "90vw"};
    height:${props => props.isBigSize ? "65vh" : "35vh"};
    
    margin-bottom:${props => props.isBigSize ? "2rem": "0rem"};
  }

  .swiper {
    width: 100%;
    height: 100%;

    flex-direction: column;
  }

  .swiper-slide {
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;

      box-shadow: 0 0.25rem 0.25rem 0 rgb(0 0 0 / 61%);
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.body};
    left: 0;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
    top: 50%;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;

      top:${props => props.isBigSize ? "25%": "40%"};
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.body};
    right: 0;
    width: 4rem;
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
    top: 50%;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
      top:${props => props.isBigSize ? "25%": "40%"};
    }
  }
`;

const TextContainer = styled.div`
  font-size: ${(props) => props.theme.fontlg};

  margin-bottom: 3rem;
`;

const Carousel = ({
  imagesCarousel,
  disableAutoplay,
  enableNavigation,
  enablePagination,
  bigSize
}) => {

  return (
    <Container isBigSize={bigSize}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: disableAutoplay,
        }}
        pagination={{
          enabled: enablePagination,
          clickable: enablePagination,
        }}
        navigation={enableNavigation}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {imagesCarousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <img src={item.image} />
              <br></br>
              <TextContainer>
                {item.text}
              </TextContainer>              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;

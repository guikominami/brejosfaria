import React from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
  font-size: ${props => props.theme.fontxl};
  text-transform: none;
  width: 100%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  span{
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
    color: green;
  }
  .text-2{
    color: orange;
  }
  .text-3{
    color: red;
  }
  
  @media (max-width: 70em){
    font-size: ${(props) => props.theme.fontxl};
  }
  
  @media (max-width: 48em){
    align-self: center;
    text-align: center;
  }  

  @media (max-width: 40em){
    width: 90%;
  }    
`

const Subtitle = styled.h3`
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.text}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontmd};  
  }

  @media (max-width: 48em){
    align-self: center;
    text-align: center;
  }  
`

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Tecnologia e Educação para Transformação Social por meio de 
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">Soluções para desafios</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">Cursos e workshops</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3">Protótipos</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
    </>
  );
}

export default TypeWriterText;
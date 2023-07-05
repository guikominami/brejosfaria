import React from "react";
import styled from "styled-components";
import Instagram from "../assets/icons/Instagram";
import Linkedin from "../assets/icons/LinkedIn";
import logo from "../assets/icons/logo_branco.png";

const Section = styled.section`
  height: 10rem;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Container = styled.div`
  width: 90%;
  display: flex;
  //flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;  
  }
`;

const IconList = styled.div`
  display: flex;
  justify-content: end;

  width: 20%;
  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  } 
`;

const Logo = styled.div`
  width: 40%;
  img {
    width: 40%;
  }

  @media (max-width: 48em) {
    width: 50%;
    img {
      width: 60%;
    }    
  } 
`;

const Text = styled.div`
  width: 90%;
  display: flex;

  align-items: center;
  justify-content: center;
`

const Footer = () => {
  const scrolTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <Container>
        <Logo>
          <img src={logo} />
        </Logo>      
        <IconList>
          <a href="https://www.instagram.com/labmudalab" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        </IconList>       
      </Container>
      <Text>
        &copy; {new Date().getFullYear()} Muda Lab. All rights reserved.
      </Text>        
    </Section>
  );
};

export default Footer;

import React, { useState, useLayoutEffect } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useWindowScroll } from 'react-use';
import logo_branco from "../assets/icons/logo_branco.png";
import logo_preto from "../assets/icons/logo_preto.png";

const Section = styled.section`
  width: 100vw;
  background-color: ${props => props.background};
  box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 31%);
  
  position: fixed;

  z-index: 2;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  //background-color: aliceblue;

  //border-bottom: 2px solid ${props => props.theme.text};
  //box-shadow: 10px 10px black;

  .mobile{
    display: none;
  }

  @media (max-width: 64em){
    .desktop{
      display: none;
    }
    .mobile{
      display: inline-block;
    }    
  }  
`;

const Logo = styled.div`
  margin-left: 1rem;
  img{
    width: 40%;
    height: auto;
  }

/*   @media (max-width: 64em){
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
    width: 90%; 
  }

  @media (max-width: 48em){
    right: 1rem;
    margin-left: 0; 
  } */
`;

const Menu = styled.ul`
  display: flex;
  //justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-right: 1rem;
  color: ${(props) => props.colorItem};

  @media (max-width: 64em){
    /* 1024 px  */
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 10;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);

    transform: ${props => props.click ? 'translateY(0)' : 'translateY(1000%)'};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }   
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  //color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 500;
  text-transform: uppercase;

  cursor: pointer;
  //para evitar de quebrar a palavra Quem Somos
  width: auto;

  &::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after{
    width: 100%;
  }
  
  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after{
      display: none;
    }
  }  
`;

const HamburgerMenu = styled.span`
  width: ${props => props.click ? '2rem' : '1.5rem'};
  height: 2px;
  background: ${props => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 90%;
  transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em){
    /* 1024 px  */
    display: flex;
  }

  &::after, &::before{
    content: " ";
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${props => props.click ? '-2px' : '0'};
    background: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after{
    top: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(-48deg)' : 'rotate(0)'};
  }

  &::before{
    bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(48deg)' : 'rotate(0)'};    
  }  
`;

const Navigation = () => {

  const [click, setClick] = useState(false);
  const [transparent, setTransparent] = useState("transparent");
  const [menuColor, setMenuColor] = useState("#FFFFFF");
  const [logo, setLogo] = useState(logo_branco)

  const {y} = useWindowScroll();  

  const scrolTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  useLayoutEffect(() => {
    if (y > 200){
      setTransparent("#FFFFFF");
      setMenuColor("#000000")
      setLogo(logo_preto);
      //roxo: #562999
    }
    else{
      setTransparent("transparent");
      setMenuColor("#FFFFFF")
      setLogo(logo_branco);
    }
  }, [y])    

  return (

    <Section id="navigation" background={transparent}>
      <NavBar>
        <Logo>
          <img src={logo} alt="logo com descrição MudaLab" />
          <Link to="/" />        
        </Logo>
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>        
        <Menu click={click} colorItem={menuColor}>
          <MenuItem onClick={() => scrolTo("capa-foto")}>Home</MenuItem>
          <MenuItem onClick={() => scrolTo("capa")}>Nós</MenuItem>
          <MenuItem onClick={() => scrolTo("coabitacao")}>Habitação colaborativa</MenuItem>
          <MenuItem onClick={() => scrolTo("pessoas")}>PESSOAS</MenuItem>
          <MenuItem onClick={() => scrolTo("alem")}>Comunidade</MenuItem>
          <MenuItem onClick={() => scrolTo("ambiente")}>AMBIENTE</MenuItem>
          <MenuItem onClick={() => scrolTo("natural")}>NATURAL</MenuItem>
        </Menu>
      </NavBar>
    </Section>    
  );
};

export default Navigation;


/*     
    Esquema de link por páginas
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem><Link to="/">HOME</Link></MenuItem>
          <MenuItem><Link to="/">SOBRE</Link></MenuItem>
          <MenuItem>PROJETOS</MenuItem>
          <MenuItem>EQUIPE</MenuItem>
          <MenuItem><Link to="/tutoriais">TUTORIAIS</Link></MenuItem>
        </Menu>
      </NavBar>
    </Section> */
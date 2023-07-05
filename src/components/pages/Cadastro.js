import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import { styled } from "styled-components";

import db from "../../assets/data/firebase.config";
import { collection, getDocs } from "firebase/firestore"; 

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};

  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  flex-direction: column;
`;

const NavBar = styled.div`
  background-color: blue;
  color: white;
  width: 80%;
  height: 20vh;
`;

const Container = styled.div`
  background-color: aliceblue;
  width: 80%;
`;

const Cadastro = () => {

  const [ textData, setTextData ] = useState([]);

  useEffect(() => {
    fetchText();
  }, [])    

  const fetchText = async() => {
    const response = collection(db, 'natureza');
    const data = await getDocs(response);

    data.docs.forEach(item=>{
      setTextData(textData => [...textData, item.data()]);
    })    

    console.log(textData);

  }

  return (
    <Section>
      <Outlet />
      <NavBar>
        <Link to="/">HOME</Link>
      </NavBar>
      <Container>
      {
        textData && textData.map(item=>{
          return(
            <div key={item.text}>
              <h4>{item.text}</h4>
            </div>
          )
        })
      }
      </Container>
    </Section>
  );
};

export default Cadastro;

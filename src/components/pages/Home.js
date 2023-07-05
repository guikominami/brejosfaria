import React from "react";

//import db from "../../assets/data/firebase.config";

import Navigation from "../Navigation";
import Capa from "../sections/Capa";
import CapaFoto from "../sections/CapaFoto";
import Coabitacao from "../sections/Coabitacao";
import Pessoas from "../sections/Pessoas";
import Alem from "../sections/Alem";
import Ambiente from "../sections/Ambiente";
import Natural from "../sections/Natural";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const Home = () => {
  
/*   //receber dados do Firebase
  const [dataNatureza, setDataNatureza] = useState([]);
  const [dataCoabitacao, setDataCoabitacao] = useState([]);

  useEffect(() => {
    fetchText();
  }, []);

  const fetchText = async () => { 

    db.collection("conteudo_site").doc("natureza").collection("dados")
    .get()
    .then((result) => {
      result.docs.forEach((textItem) => {
        setDataNatureza(dataNatureza => [...dataNatureza, textItem.data()]);
      })
    });   

    db.collection("conteudo_site").doc("coabitacao").collection("dados")
    .get()
    .then((result) => {
      result.docs.forEach((textItem) => {
        setDataCoabitacao(dataCoabitacao => [...dataCoabitacao, textItem.data()]);
      })
    });  

    //console.log(dataNatureza);

  }; */

  return (
    <>
      <Navigation />
      <CapaFoto />
      <Capa />
      <Coabitacao />
      <Pessoas />
      <Alem />
      <Ambiente />
      <Natural />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;

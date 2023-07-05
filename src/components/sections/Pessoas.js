import React from "react";
import { styled } from "styled-components";
import ReactPlayer from "react-player";

import Accordion from "../Accordion";

import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import TitleComponent from "../elements/TitleComponent";
import BoxLeftComponent from "../elements/BoxLeftComponent";
import BoxRightComponent from "../elements/BoxRightComponent";

import video_pessoas from "../../assets/fotos/pessoas.mp4";

const BoxLeft = styled.div`
  width: 50%;

  margin-left: 4rem;
  margin-right: 4rem;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }
`;

const BoxRight = styled.div`
  width: 50%;

  margin-top: 1rem;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }

  @media (max-width: 48em) {
    width: 100%;
    align-self: center;
    margin-left: 3rem;
  }
`;

const Pessoas = () => {
  return (
    <SectionComponent id="pessoas">
      <TitleComponent>Pessoas</TitleComponent>
      <ContainerComponent>
        <BoxLeftComponent>
          <Accordion title="Eu (propósito e visão).">
            Ao considerares o teu propósito e visão para um projeto de
            cohousing, é importante refletires sobre o que desejas alcançar e
            como gostarias que a comunidade se desenvolvesse. Aqui estão algumas
            ideias para ajudar a formular o teu propósito e visão em relação ao
            cohousing.
          </Accordion>
          <Accordion title="Propósito">
            Pergunta-te porque estás interessado em criar ou participar numa
            comunidade de cohousing. Quais são os teus principais valores e
            objetivos? Alguns exemplos de propósitos podem incluir:
            <br></br>
            <br></br>
            <li>Criar um ambiente de convivência cooperativa e solidária.</li>
            <br></br>
            <li>
              Fomentar a sustentabilidade ambiental e o estilo de vida
              consciente.
            </li>
            <br></br>
            <li>
              Promover a intergeracionalidade e o apoio mútuo entre os
              moradores.
            </li>
            <br></br>
            <li>
              Buscar uma forma alternativa de moradia que seja acessível e
              inclusiva.
            </li>
            <br></br>
            <li>
              Estabelecer uma comunidade baseada na participação ativa e na
              tomada de decisões coletiva
            </li>
          </Accordion>
          <Accordion title="Visão">
            A visão descreve como imaginas a comunidade de cohousing no futuro.
            Pensa em como gostarias que a comunidade fosse estruturada, como
            seria o ambiente físico e social, e o tipo de experiência que
            esperas vivenciar. Alguns aspectos para considerar:
            <br></br>
            <br></br>
            <li>
              Arquitetura e design: Como seria a distribuição dos espaços
              privados e comuns? Que tipo de áreas comuns seriam prioritárias
              (por exemplo, jardins, cozinhas compartilhadas, espaços de lazer)?
            </li>
            <br></br>
            <li>
              Convivência e relacionamentos: Como os moradores interagiriam
              entre si? Que tipos de atividades e eventos seriam promovidos para
              fortalecer os laços comunitários?
            </li>
            <br></br>
            <li>
              Valores e cultura: Quais seriam os valores fundamentais da
              comunidade? Como imaginas que a cultura da comunidade seria
              desenvolvida e mantida?
            </li>
            <br></br>
            <li>
              Sustentabilidade: Como a comunidade poderia promover a
              sustentabilidade ambiental e a utilização consciente dos recursos?
            </li>
          </Accordion>
          <Accordion
            title="Eu e a comunidade (construção comunitária – cultura 
            de vizinhança e entreajuda; intergeracionalidade)."
          >
            Quando se trata da construção comunitária em um projeto de
            cohousing, é essencial promover uma cultura de vizinhança e
            entreajuda, bem como fomentar a intergeracionalidade. Aqui estão
            algumas ideias sobre como tu e a comunidade podem trabalhar juntos
            para alcançar esses objetivos:
            <br></br>
            <br></br>
            <b>1. Cultura de vizinhança: </b>Estabelece uma cultura que valorize
            a proximidade, a colaboração e o respeito entre os moradores.
            Algumas sugestões incluem:
            <br></br>
            <br></br>
            <li>
              Promover a comunicação aberta e a participação ativa de todos os
              membros;
            </li>
            <br></br>
            <li>
              Organizar eventos e atividades comunitárias regulares para
              incentivar a interação entre os vizinhos;
            </li>
            <br></br>
            <li>
              Criar espaços de convivência, como áreas de lazer, jardins
              compartilhados ou cozinhas comunitárias, que facilitem o encontro
              e o compartilhamento de experiências;
            </li>
            <br></br>
            <li>
              Estabelecer normas de convivência claras e incentivar a resolução
              pacífica de conflitos.
            </li>
            <br></br>
            <br></br>
            <b>2. Entreajuda: </b>Incentiva a entreajuda e a cooperação entre os
            moradores, promovendo a ideia de que todos têm habilidades /
            competências, conhecimentos e recursos valiosos para compartilhar.
            Algumas sugestões incluem:
            <br></br>
            <br></br>
            <li>
              Estabelecer um sistema de apoio mútuo para auxiliar em tarefas
              domésticas, cuidado de crianças, cuidado de idosos ou outros
              serviços dentro da comunidade;
            </li>
            <br></br>
            <li>
              Criar grupos de interesse ou grupos temáticos nos quais os
              moradores possam contribuir com suas habilidades e conhecimentos
              específicos;
            </li>
            <br></br>
            <li>
              Organizar projetos comunitários, como hortas compartilhadas,
              programas de reciclagem, compartilhamento de ferramentas ou
              boleias solidárias.
            </li>
            <br></br>
            <b>3. Intergeracionalidade: </b>
            Valoriza e promova a interação entre pessoas de diferentes faixas
            etárias na comunidade. Isso pode ser benéfico para todas as
            gerações, pois proporciona oportunidades de aprendizagem, troca de
            experiências e apoio mútuo. Algumas sugestões incluem:
            <br></br>
            <br></br>
            <li>
              Planear atividades intergeracionais, como jogos, eventos
              culturais, projetos de arte, grupos de leitura ou oficinas, nos
              quais as pessoas de diferentes idades possam participar juntas;
            </li>
            <br></br>
            <li>
              Estabelecer um sistema de mentoria, onde os membros mais
              experientes possam compartilhar os seus conhecimentos e
              experiências com os mais jovens;
            </li>
            <br></br>
            <li>
              Incluir espaços e recursos adequados para crianças, jovens e
              idosos na comunidade, considerando as suas necessidades
              específicas.
            </li>
            <br></br>
            <br></br>É importante criar oportunidades para que os moradores se
            envolvam ativamente na construção da cultura comunitária e na
            promoção da entreajuda e da intergeracionalidade.
            <br></br>
            <br></br>
            Lembra-te de que a construção de uma comunidade forte e coesa é um
            processo contínuo. É necessário que todos os moradores estejam
            dispostos a contribuir, colaborar e manter um espírito de respeito e
            empatia em relação aos outros membros. Ao cultivar uma cultura de
            vizinhança e entreajuda, e valorizar a intergeracionalidade, estarás
            criando uma base sólida para uma comunidade de cohousing, saudável e
            vibrante.
          </Accordion>
          <Accordion title="A comunidade (capacitação, aprendizagem continua).">
            Para fortalecer a comunidade num projeto de cohousing, é importante
            promover a capacitação e a aprendizagem contínua dos moradores. Isso
            pode ser feito de várias maneiras:
            <br></br>
            <br></br>
            <b>1. Workshops e palestras: </b>Organização de workshops e
            palestras sobre temas relevantes para a comunidade, como
            competências de comunicação, resolução de conflitos, tomada de
            decisões participativas, cooperativismo, sustentabilidade, entre
            outros. Trazr especialistas ou membros da comunidade que possam
            partilhar os seus conhecimentos e experiências;
            <br></br>
            <br></br>
            <b>2. Grupos de estudo: </b>Criar grupos de estudo ou de
            aprendizagem em que os moradores possam reunir-se regularmente para
            explorar temas de interesse comum. Os grupos podem escolher livros,
            artigos ou vídeos para discutir e aprofundar o seu conhecimento;
            <br></br>
            <br></br>
            <b>3. Troca de habilidades / competências: </b>Incentivar os
            moradores a partilhar as suas habilidades e conhecimentos uns com os
            outros. Por exemplo, podemos organizar sessões em que os moradores
            ensinam habilidades específicas, como culinária, jardinagem,
            costura, carpintaria, ou qualquer outra aptidão que possa beneficiar
            a comunidade;
            <br></br>
            <br></br>
            <b>4. Parcerias externas: </b>Estabelecer parcerias com organizações
            locais, escolas, universidades ou grupos comunitários para oferecer
            oportunidades de aprendizagem e capacitação para os moradores. Isso
            pode incluir a participação em cursos, workshops ou eventos
            externos;
            <br></br>
            <br></br>
            <b>5. Mentoria interna: </b>Incentivar a mentoria interna, onde os
            moradores mais experientes partilham seus conhecimentos e
            experiências com os mais jovens ou com aqueles que estejam
            interessados em aprender algo específico. Isso pode criar um
            ambiente de aprendizagem mútua e fortalecer os vínculos entre os
            moradores;
            <br></br>
            <br></br>
            <b>6. Aprendizagem continua: </b>Criar uma cultura de aprendizagem
            contínua, onde todos os moradores estejam abertos à exploração de
            novas ideias, aquisição de novas habilidades e ao crescimento
            pessoal. Incentivar a participação em cursos online, webinars,
            conferências ou qualquer outra oportunidade de aprendizado que possa
            ser relevante para a comunidade;
            <br></br>
            <br></br>
            <b>7. Feedback e avaliação: </b>Estabelecer mecanismos para que os
            moradores possam fornecer feedback e avaliar as atividades de
            capacitação e aprendizagem da comunidade. Isso ajudará a adaptar e
            melhorar os programas de acordo com as necessidades e interesses dos
            moradores.
            <br></br>
            <br></br>
            Ao promover a capacitação e a aprendizagem contínua na comunidade de
            cohousing, estaremos a incentivar o crescimento pessoal e coletivo
            dos moradores, bem como o desenvolvimento de uma comunidade mais
            resiliente, colaborativa e envolvida.
          </Accordion>
        </BoxLeftComponent>
        <BoxRightComponent>
          <ReactPlayer url={video_pessoas} controls={true} width="500px" />
        </BoxRightComponent>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default Pessoas;

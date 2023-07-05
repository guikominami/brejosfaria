import React from "react";
import { styled } from "styled-components";
import Accordion from "../Accordion";
import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import TitleComponent from "../elements/TitleComponent";

import imagemAmbiente from "../../assets/fotos/ambiente.jpg";

const Box = styled.div`
  width: 80%;

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

const ImageContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  img{
    width: 100%;
  }
`;

const Ambiente = () => {
  return (
    <SectionComponent id="ambiente">
      <TitleComponent>Ambiente</TitleComponent>
      <ContainerComponent>
        <Box>
          <Accordion title="Edifício saudável e sustentável (energia, construção, térmica, água e aquecimento).">
            Ao projetar um edifício saudável e sustentável em um contexto de
            cohousing, é importante considerar várias questões relacionadas à
            energia, construção, eficiência térmica, água e aquecimento. Aqui
            estão algumas diretrizes a serem consideradas:
            <br></br>
            <br></br>
            <b>1. Eficiência energética: </b>Projetar os edifícios com um alto
            padrão de eficiência energética, com isolamento térmico adequado,
            janelas com vidros duplos e vedação eficiente para minimizar a perda
            de calor no inverno e o ganho de calor no verão. Considerar o uso de
            sistemas de aquecimento, ventilação e ar-condicionado (HVAC)
            eficientes, como bombas de calor de alta eficiência, sistemas de
            ventilação mecânica com recuperação de calor e iluminação LED de
            baixo consumo energético;
            <br></br>
            <br></br>
            <b>2. Energias renováveis: </b>Integrar fontes de energia renovável
            nos edifícios, como painéis solares fotovoltaicos para produção de
            eletricidade ou coletores solares térmicos para aquecimento de água.
            Isto reduzirá a dependência de combustíveis fósseis e diminuirá as
            emissões de gases de efeito estufa;
            <br></br>
            <br></br>
            <b>3. Gestão de água: </b>Implementar sistemas eficientes de gestão
            de água, incluindo a coleta de água da chuva para uso em irrigação e
            descargas sanitárias, a instalação de dispositivos economizadores de
            água, como torneiras e chuveiros de baixo fluxo, e o uso de
            organização da paisagem sustentável e com técnicas de conservação da
            água;
            <br></br>
            <br></br>
            <b>4. Materiais sustentáveis: </b>Escolher materiais de construção
            sustentáveis, como madeira com certificação florestal sustentável,
            isolamento com baixa emissão de gases de efeito estufa e produtos
            com conteúdo reciclado. Priorizar materiais de baixo impacto
            ambiental e evite o uso de substâncias tóxicas;
            <br></br>
            <br></br>
            <b>5. Qualidade do ar interior: </b>Projetar os edifícios para
            promover uma boa qualidade do ar interior, garantindo uma ventilação
            adequada e o uso de materiais de construção não tóxicos. Considerar
            a implementação de sistemas de filtragem do ar e evitar a presença
            de poluentes internos, como formaldeído e VOCs (compostos orgânicos
            voláteis);
            <br></br>
            <br></br>
            <b>6. Aquecimento eficiente: </b>Explorar sistemas de aquecimento
            eficientes, como piso radiante, radiadores de alta eficiência ou
            sistemas de aquecimento central. Considerar também a possibilidade
            de partilha de sistemas de aquecimento entre unidades de habitação,
            o que pode reduzir custos e consumo de energia;
            <br></br>
            <br></br>
            <b>7. Monitorização e controle: </b>Implementar sistemas de
            monitorização e controle para acompanhar o consumo de energia, água
            e aquecimento dos edifícios. Isto permitirá identificar
            oportunidades de economia de energia, ajustar os sistemas de acordo
            com as necessidades reais dos moradores e promover uma cultura de
            uso consciente dos recursos.
            <br></br>
            <br></br>
            Ao incorporar essas diretrizes no projeto e construção de um
            edifício de cohousing, é possível criar um ambiente saudável,
            sustentável e energeticamente eficiente, beneficiando tanto os
            moradores quanto o meio ambiente. Além disso, o edifício pode servir
            como exemplo inspirador para outras iniciativas de construção
            sustentável na comunidade e na região
          </Accordion>
          <Accordion title="Que estilo de vida imaginamos (visão).">
            A visão de estilo de vida em cohousing é baseada na ideia de uma
            comunidade colaborativa, inclusiva e sustentável. Algumas
            características desse estilo de vida incluem:
            <br></br>
            <br></br>
            <b>1. Comunidade unida: </b>Uma comunidade coesa, onde os moradores
            têm um senso de pertencimento e conexão uns com os outros. As
            relações são baseadas na confiança, no respeito mútuo e na
            colaboração, com ênfase na construção de laços de amizade e suporte
            mútuo;
            <br></br>
            <br></br>
            <b>2. Partilha de recursos: </b>Os moradores do cohousing
            compartilham recursos comuns, como espaços comunitários, áreas
            verdes, lavandaria, ferramentas e até mesmo veículos. Isso promove a
            eficiência, reduz o consumo excessivo e incentiva a economia
            compartilhada;
            <br></br>
            <br></br>
            <b>3. Vida sustentável:</b>O estilo de vida em cohousing valoriza a
            sustentabilidade ambiental. Isto inclui práticas como a utilização
            de energia renovável, a gestão eficiente de resíduos, a promoção da
            mobilidade sustentável (como bicicletas e carros compartilhados) e o
            cultivo de alimentos orgânicos e comunitários;
            <br></br>
            <br></br>
            <b>4. Intergeracionalidade: </b>O cohousing valoriza a diversidade
            etária e promove a interação entre diferentes gerações. Isso cria um
            ambiente enriquecedor, onde os moradores podem aprender uns com os
            outros, compartilhar experiências e contribuir para o bem-estar e
            desenvolvimento de todas as faixas etárias;
            <br></br>
            <br></br>
            <b>5. Participação ativa: </b>Os moradores do cohousing são
            encorajados a participar ativamente nas decisões e no funcionamento
            da comunidade. Isto envolve a colaboração na gestão, organização de
            eventos, contribuição para o desenvolvimento de projetos
            comunitários e envolvimento nas atividades sociais e culturais;
            <br></br>
            <br></br>
            <b>6. Equilíbrio entre privacidade e comunidade: </b>O cohousing
            oferece espaços privados para cada família ou indivíduo,
            proporcionando autonomia e privacidade. Ao mesmo tempo, os espaços
            comuns incentivam a interação social e o senso de comunidade,
            proporcionando oportunidades de convivência e colaboração;
            <br></br>
            <br></br>
            <b>7. Aprendizagem contínua: </b>A comunidade de cohousing valoriza
            a aprendizagem e o crescimento pessoal. Isso pode ser alcançado por
            meio de programas educacionais, workshops, partilha de habilidades e
            conhecimentos entre os moradores e parcerias com instituições
            educacionais e organizações da comunidade.
            <br></br>
            <br></br>
            Essa visão de estilo de vida em cohousing busca criar um ambiente
            onde os moradores possam viver de forma mais sustentável, conectada
            e significativa, construindo relações saudáveis e se envolvendo
            ativamente na criação de uma comunidade vibrante.
          </Accordion>
          <ImageContainer>
            <img src={imagemAmbiente}></img>
          </ImageContainer>          
        </Box>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default Ambiente;

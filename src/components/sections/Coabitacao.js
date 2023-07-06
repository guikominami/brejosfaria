import React from "react";
import { styled } from "styled-components";

import Accordion from "../Accordion";

import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import TitleComponent from "../elements/TitleComponent";

const Box = styled.div`
  width: 80%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
    flex-direction: column;
  }
`;

const Coabitacao = () => {
  return (
    <SectionComponent id="coabitacao">
      <TitleComponent>Habitação colaborativa</TitleComponent>
      <ContainerComponent>
        <Box>
          <Accordion title="O que é o Modelo de direito de uso?">
            É uma forma alternativa de posse de um imóvel, que difere do
            tradicional modelo de propriedade. Neste modelo, o cohabitante
            adquire o direito de uso da habitação, por um período determinado,
            através de um contrato de direito de uso.
            <br></br>
            <br></br>
            No modelo de direito de uso, o imóvel pertence à cooperativa, que é
            responsável por administrar e manter o conjunto habitacional.
            <br></br>
            <br></br>
            Os coabitantes, têm o direito de ocupar e utilizar as suas unidades
            habitacionais, bem como usufruir dos espaços comuns e participar das
            atividades e decisões da comunidade, de acordo com os termos do
            contrato de direito de uso.
            <br></br>
            <br></br>
            Uma das principais características do modelo de direito de uso é que
            oferece uma alternativa mais acessível em termos de custos em
            comparação com a aquisição de uma propriedade plena.
            <br></br>
            <br></br>
            Este modelo também promove a ideia de comunidade e cooperação, uma
            vez que os moradores estão vinculados por um interesse comum na
            gestão e no bom funcionamento do conjunto habitacional. Têm a
            oportunidade de participar nas decisões e nas atividades coletivas,
            contribuindo para um ambiente de convivência e colaboração.
          </Accordion>
          <Accordion
            title="Governança – como tomamos decisões juntos (modelo de convivência, 
            regulamento interno, estatutos)?"
          >
            A governança é um aspecto fundamental na cooperativa, pois envolve a
            forma como as decisões são tomadas em conjunto pela comunidade. O
            nosso sistema de governança eficaz, inclui um modelo de convivência,
            traduzido nos estatutos e regulamento interno.
            <br></br>
            <br></br>
            <b>1. Modelo de convivência: </b>O modelo de convivência é um
            documento que estabelece os princípios, os valores e as diretrizes
            que orientam a vida em comunidade no cohousing. Descreve como os
            moradores devem interagir, comunicar-se, resolver conflitos e tomar
            decisões. O modelo de convivência foi/é criado pela comunidade de
            forma participativa, garantindo que todos os moradores têm a
            oportunidade de contribuir e concordar com as regras e expectativas
            estabelecidas
            <br></br>
            <br></br>
            <b>2. Estatutos: </b>Os estatutos são um conjunto de regras e
            disposições legais que definem a estrutura de governança e os
            direitos e responsabilidades dos membros da comunidade. Abordam
            questões como a eleição de representantes, a gestão financeira, a
            tomada de decisões e outros aspectos importantes para o
            funcionamento do cohousing, de acordo com o Código Cooperativo.
            <br></br>
            <br></br>
            <b>3. Regulamento interno: </b>O regulamento interno é um conjunto
            de normas e diretrizes específicas que regem a organização e o
            funcionamento diário do cohousing. Aborda questões como o uso dos
            espaços comuns, a manutenção das áreas compartilhadas, a gestão
            financeira, a participação em atividades comunitárias, a privacidade
            e outras questões relevantes para a vida em comunidade. O
            regulamento interno é desenvolvido coletivamente pelos moradores,
            podendo ser revisto e atualizado ao longo do tempo
            <br></br>
            <br></br>É fundamental que todos os moradores do cohousing
            participem ativamente do processo de governança, contribuindo para a
            criação e a revisão destes documentos. A transparência, a
            comunicação aberta e a busca por consenso são princípios-chave que
            estão incorporados no sistema de governança para garantir uma
            convivência harmoniosa e efetiva. É importante que todos os
            moradores estejam cientes e cumpram as regras estabelecidas, para
            que o sistema de governança funcione de maneira eficiente e justa
            pata todos.
          </Accordion>
          <Accordion title="Como olhamos para o financiamento?">
            O financiamento em cohousing é uma questão importante no planeamento
            e estabelecimento de uma comunidade de cohousing. Existem diferentes
            abordagens e opções de financiamento disponíveis, dependendo do
            contexto e das circunstâncias específicas. Aqui estão algumas
            considerações comuns sobre o financiamento em cohousing.
            <br></br>
            <br></br>
            <b>1. Contribuições dos moradores: </b>Os moradores do cohousing
            contribuem financeiramente para o desenvolvimento e a construção do
            projeto. Isso é feito por meio de pagamentos iniciais, taxas de
            associação ou cotas de investimento. As contribuições dos moradores
            são fundamentais para cobrir os custos relacionados na compra do
            terreno, na construção ou renovação das unidades habitacionais, na
            criação de espaços comuns e nas despesas administrativas.
            <br></br>
            <br></br>
            <b>2. Empréstimos hipotecários coletivos: </b>Em algumas situações,
            optamos por obter empréstimos hipotecários coletivos, nos quais os
            moradores se unem para obter um financiamento conjunto para a compra
            ou construção do empreendimento. Esses empréstimos podem ser obtidos
            junto a instituições financeiras ou organizações de crédito
            cooperativas ou ainda organizações de promoção de finanças éticas. O
            processo de obtenção de empréstimos coletivos é complexo e por isso
            procuramos assegurar uma estrutura de governança e um planeamento
            financeiro sólidos
            <br></br>
            <br></br>
            <b>3. Subsídios e programas governamentais: </b>Existem programas
            governamentais que oferecem subsídios, financiamento ou incentivos
            fiscais para projetos de habitação colaborativa, incluindo o
            cohousing.
            <br></br>
            <br></br>
            Contamos com a orientação de especialistas em habitação
            colaborativa, consultores financeiros e profissionais jurídicos para
            auxiliar no planeamento e na obtenção de financiamento adequado.
          </Accordion>
          <Accordion title="Gestão de convivência (entradas e saídas cooperantes) e de conflitos.">
            A gestão da convivência e a resolução de conflitos são aspectos
            importantes na vida comunitária do cohousing. Algumas das
            estratégias e abordagens que procuramos implementar:
            <br></br>
            <br></br>
            <b>1. Comunicação aberta e transparente: </b>Existem canais de
            comunicação efetivos para e encorajar a comunicação aberta entre os
            moradores. Isto inclui reuniões regulares, assembleias gerais,
            grupos de discussão, online e presenciais, e outros meios de troca
            de informações. É essencial criar sempre um ambiente onde todos se
            sintam à vontade para expressar suas opiniões, preocupações e
            ideias.
            <br></br>
            <br></br>
            <b>2. Processo de tomada de decisão participativo: </b>Envolvimento
            de todos os moradores no processo de tomada de decisão, fundamental
            para promover a coesão e evitar conflitos. Consideramos com norma
            geral a adoção de tomada de decisões por consenso, onde as decisões
            são alcançadas por meio de um acordo geral, levando em consideração
            as necessidades e preocupações de todos os envolvidos.
            <br></br>
            <br></br>
            <b>3. Estabelecimento de normas e acordos comunitários: </b>
            Desenvolvemos normas e acordos comunitários que estabeleçam as
            expectativas de convivência e comportamento dos moradores. Isto
            inclui regras para o uso dos espaços comuns, horários de silêncio,
            respeito à privacidade, entre outros aspectos relevantes. É
            importante que estas normas sejam criadas ou revistas de forma
            participativa, para que todos se sintam representados e
            comprometidos com o seu cumprimento.
            <br></br>
            <br></br>
            <b>4. Mediação e resolução de conflitos: </b>Contamos com um
            processo de mediação estabelecido para ajudar a resolver as questões
            de forma pacífica e construtiva. Isso pode envolver a designação de
            mediadores neutros dentro da comunidade ou a busca de serviços
            profissionais de mediação externa. A mediação permite que as partes
            envolvidas expressem suas preocupações, ouçam uns aos outros e
            busquem soluções mutuamente satisfatórias.
            <br></br>
            <br></br>
            <b>5. Aprendizagem e crescimento contínuos: </b> A convivência em
            cohousing é um processo contínuo de aprendizagem e adaptação. É
            importante estarmos abertos a avaliar e rever constantemente as
            práticas de gestão da convivência, buscando melhorias e ajustes
            conforme necessário.
            <br></br>
            <br></br>A gestão da convivência e a resolução de conflitos requerem
            paciência, compreensão e comprometimento mútuo dos moradores. Ao
            trabalhar juntos para criar um ambiente harmonioso e solidário, é
            possível fortalecer os laços comunitários e promover uma experiência
            positiva no cohousing.
          </Accordion>
          <Accordion title="Capacitação (cooperativismo e melhoria do trabalho em grupo – sociocracia 3, CNV).">
            A capacitação dos moradores em áreas como cooperativismo, trabalho
            em grupo, sociocracia e Comunicação Não-Violenta (CNV) pode ser
            benéfica para fortalecer a convivência e a governança numa
            comunidade de cohousing:
            <br></br>
            <br></br>
            <b>1. Cooperativismo: </b>O cooperativismo é um modelo
            socioeconómico baseado nos princípios de autogestão, democracia,
            participação igualitária e solidariedade. Capacitar os moradores em
            cooperativismo ajuda a compreender os fundamentos e os benefícios
            desse modelo, bem como a desenvolver competências de tomada de
            decisão participativa, partilha de responsabilidades e trabalho em
            equipa.
            <br></br>
            <br></br>
            <b>2. Trabalho em grupo: </b>O trabalho em grupo efetivo é essencial
            para o funcionamento harmonioso de uma comunidade de cohousing.
            Capacitar os moradores em competências de trabalho em grupo pode
            incluir o desenvolvimento de competências como comunicação efetiva,
            escuta ativa, colaboração, resolução de problemas e tomada de
            decisão coletiva.
            <br></br>
            <br></br>
            <b>3. Sociocracia 3.0: </b>A sociocracia 3.0 (S3) é um modelo de
            governança que busca facilitar a tomada de decisões distribuída, a
            autogestão e a melhoria contínua. Essa abordagem envolve a
            implementação de práticas como consentimento, feedback, ciclos de
            governança e melhoria, alinhamento de propósito e distribuição de
            poder de decisão. A capacitação em sociocracia 3.0 ajuda os
            moradores a entender e aplicar essas práticas para melhorar a
            governança do cohousing.
            <br></br>
            <br></br>
            <b>3. Comunicação Não-Violenta (CNV): </b>A CNV é um processo de
            comunicação que visa promover a empatia, a compreensão mútua e a
            resolução pacífica de conflitos. Capacitar os moradores em CNV ajuda
            a desenvolver capacidades de comunicação empática, expressão de
            sentimentos e necessidades, escuta compassiva e resolução de
            conflitos de forma não-violenta.
            <br></br>
            <br></br>A capacitação nessas áreas pode ser realizada por meio de
            workshops, palestras, treino ou por meio da contratação de
            especialistas externos. Além disso, a aprendizagem contínua e a
            prática regular são essenciais para que os moradores incorporem
            esses conceitos na sua vida no cohousing
            <br></br>
            <br></br>É importante que a capacitação seja acompanhada de um
            compromisso coletivo de aplicar os conhecimentos adquiridos e de
            criar um ambiente que valorize os princípios de cooperação, respeito
            mútuo, igualdade e diálogo construtivo. Dessa forma, a capacitação
            pode contribuir para fortalecer a convivência e a governança em um
            cohousing, promovendo relacionamentos saudáveis e uma comunidade
            mais harmoniosa.
          </Accordion>
        </Box>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default Coabitacao;

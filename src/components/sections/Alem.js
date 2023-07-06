import React from "react";
import { styled } from "styled-components";

import SectionComponent from "../elements/SectionComponent";
import ContainerComponent from "../elements/ContainerComponent";
import TitleComponent from "../elements/TitleComponent";
import Accordion from "../Accordion";
import Carousel from "../Carousel";
import BoxLeftComponent from "../elements/BoxLeftComponent";
import BoxRightComponent from "../elements/BoxRightComponent";

import { ALEM } from "../../assets/data/imagesInfo";

const Space = styled.div`

  margin-top: 2rem;

  @media (max-width: 64em){
    margin-top: 0rem;
  }

`;

const Alem = () => {
  return (
    <SectionComponent id="alem">
      <TitleComponent>Além do Brejos Faria</TitleComponent>
      <Space />
      <ContainerComponent>
        <BoxLeftComponent>
          <Accordion title="Integração no bairro">
            Para fomentar a integração no bairro, procuramos adotar diversas
            estratégias para nos ligarmos e contribuir positivamente com a
            comunidade mais ampla. Aqui estão algumas ideias:
            <br></br>
            <br></br>
            <b>1. Participação em eventos locais: </b>Incentivar os membros da
            comunidade de cohousing a participarem de eventos e atividades
            promovidas no bairro, como festivais, feiras, eventos esportivos,
            atividades culturais e encontros comunitários. Isso ajuda a
            estabelecer conexões e a conhecer os vizinhos;
            <br></br>
            <br></br>
            <b>2. Colaboração com organizações locais: </b>Identificar
            organizações sem fins lucrativos, escolas, bibliotecas ou grupos
            comunitários atuantes no bairro e explorar oportunidades de
            colaboração. Podemos fomentar o voluntariado em projetos, oferecer
            serviços ou compartilhar recursos com a comunidade local;
            <br></br>
            <br></br>
            <b>3. Abertura de espaços comunitários: </b>Considerar abrir algumas
            áreas comuns do cohousing para a comunidade externa, como sala de
            reuniões, espaço de co-working ou a horta comunitária. Isto permite
            que vizinhos ou grupos locais usem esses espaços, promovendo a
            interação e a partilha;
            <br></br>
            <br></br>
            <b>4. Projetos colaborativos: </b>Desenvolver projetos colaborativos
            que envolvam a comunidade do bairro. Organizar actividades de
            limpeza, eventos de plantio de árvores, grupos de caminhada ou
            ciclismo, ou mesmo criar projetos de arte pública em parceria com
            artistas locais;
            <br></br>
            <br></br>
            <b>5. Apoio a iniciativas locais: </b>Estar atento às necessidades e
            desafios da comunidade do bairro e procurar maneiras de oferecer
            apoio. Isto pode ser feito através de doações, parcerias ou até
            mesmo oferecendo habilidades e recursos da comunidade de cohousing
            para auxiliar em projetos locais;
            <br></br>
            <br></br>
            <b>6. Intercâmbio de conhecimentos: </b>Compartilhar os nossos
            conhecimentos e experiências com a comunidade local. Oferecer
            workshops ou conversas sobre tópicos relevantes, como
            sustentabilidade, habilidades domésticas, agricultura peri-urbana,
            entre outros;
            <br></br>
            <br></br>
            <b>7. Promoção da convivência: </b>Organizar eventos de convivência
            que envolvam tanto os membros do cohousing como os vizinhos do
            bairro. Isso pode incluir churrascos, festas temáticas, jogos ao ar
            livre ou qualquer outra atividade que promova interações sociais
            positivas.
            <br></br>
            <br></br>A integração no bairro requer tempo, esforço e uma
            abordagem respeitosa e sensível. Implica abertura ao diálogo com os
            vizinhos, escutar suas necessidades e interesses, e estar disposto
            ao envolvimento de maneira genuína e inclusiva. A construção de
            relacionamentos positivos com a comunidade externa contribuirá para
            um cohousing bem integrado e enriquecedor para todos.
          </Accordion>
          <Accordion title="Relações com o mundo cooperativo (economia regenerativa).">
            As relações com o mundo cooperativo e a adoção de princípios de
            economia regenerativa fortalecem e sustentam um projeto de
            cohousing. Aqui estão algumas maneiras de envolvimento com o mundo
            cooperativo e promoção de uma economia regenerativa:
            <br></br>
            <br></br>
            <b>1. Cooperativas de consumo: </b>Explorar a possibilidade de
            estabelecer parcerias com cooperativas de alimentos, produtos
            orgânicos, energia renovável ou outros tipos de cooperativas de
            consumo ou produção. Isso pode permitir que a comunidade de
            cohousing tenha acesso a produtos e serviços sustentáveis e de
            qualidade, além de apoiar a economia local;
            <br></br>
            <br></br>
            <b>2. Cooperativas de trabalho: </b>Considerar a criação de
            cooperativas de trabalho dentro da comunidade de cohousing, em que
            os moradores possam colaborar na prestação de serviços ou no
            desenvolvimento de projetos conjuntos. Esta abordagem promove a
            colaboração, a igualdade e a sustentabilidade econômica interna;
            <br></br>
            <br></br>
            <b>3. Partilha de recursos: </b>Adoptar a prática da partilha de
            recursos como parte da economia regenerativa. Isso pode incluir
            partilha de ferramentas, equipamentos, veículos, espaços de
            trabalho, entre outros recursos que podem ser utilizados de forma
            coletiva e sustentável pelos moradores do cohousing;
            <br></br>
            <br></br>
            <b>4. Apoio a empreendimentos cooperativos: </b>Incentivar o
            desenvolvimento de empreendimentos cooperativos na comunidade mais
            ampla. Isso pode ser feito fornecendo suporte e orientação para
            grupos interessados em iniciar cooperativas ou estabelecendo
            parcerias com iniciativas cooperativas já existentes;
            <br></br>
            <br></br>
            <b>5. Intercâmbio de conhecimentos e recursos: </b>Promover a troca
            de conhecimentos e recursos entre a nossa comunidade de cohousing e
            outras cooperativas ou grupos que compartilhem valores semelhantes.
            Isso pode ser feito por meio de eventos, workshops, cursos ou
            programas de mentoria, nos quais as comunidades possam aprender umas
            com as outras e fortalecer os seus esforços coletivos;
            <br></br>
            <br></br>
            <b>6. Economia circular: </b>Adoptar práticas de economia circular
            dentro do cohousing, que se baseiam na redução, reutilização,
            recuperação e reciclagem de materiais e recursos. Isso pode envolver
            compostagem, reciclagem, upcycling de materiais, compra e venda de
            produtos de segunda mão, entre outras iniciativas que promovam a
            sustentabilidade e a minimização do desperdício;
            <br></br>
            <br></br>
            <b>7. Participação em redes cooperativas: </b>Participar em redes e
            organizações que promovam o cooperativismo e a economia
            regenerativa. Isso pode fornecer oportunidades de aprendizagem,
            partilha de experiências e colaboração com outras comunidades e
            empreendimentos que defendam e partilhem valores semelhantes.
            positivas.
            <br></br>
            <br></br>O envolvimento com o mundo cooperativo e a adopção de
            princípios de economia regenerativa, a nossa comunidade de cohousing
            está a contribuir para a construção de uma economia mais justa,
            sustentável e solidária, ao mesmo tempo em que fortalece a sua
            própria resiliência e bem-estar coletivo.
          </Accordion>
          <Accordion title="Redes Conectadas">
            As redes conectadas são uma parte essencial de um projeto de
            cohousing, pois permitem que a comunidade se ligue e colabore com
            outras comunidades e organizações que partilham interesses e valores
            semelhantes. Aqui estão algumas formas de construir e se envolver em
            redes conectadas:
            <br></br>
            <br></br>
            <b>1. Redes de cohousing: </b>Existem redes nacionais e
            internacionais de cohousing que promovem a troca de informações,
            recursos e melhores práticas entre as comunidades. Participar nessas
            redes pode fornecer acesso a eventos, conferências, workshops e
            outros recursos que beneficiam a comunidade de cohousing;
            <br></br>
            <br></br>
            <b>2. Redes locais: </b>Procurar estabelecer parcerias com outras
            comunidades de cohousing próximas. Isso pode incluir a organização
            de encontros regulares, visitas mútuas entre as comunidades,
            partilha de recursos e colaboração em projetos específicos;
            <br></br>
            <br></br>
            <b>3. Redes temáticas: </b>Identificar redes temáticas que se
            alinham noss interesses e valores da comunidade de cohousing. Isso
            pode incluir redes focadas em sustentabilidade, agricultura urbana,
            energia renovável, economia solidária, entre outros temas
            relevantes. Participar nessas redes pode proporcionar oportunidades
            de aprendizagem, partilha de recursos e colaboração em projetos
            específicos;
            <br></br>
            <br></br>
            <b>4. Redes comunitárias: </b>Envolvimento em redes comunitárias
            mais amplas pode fortalecer a conexão da comunidade de cohousing com
            a comunidade local. Isso pode incluir grupos de vizinhos,
            associações comunitárias, organizações não governamentais locais e
            outras iniciativas de envolvimento comunitário. Participar dessas
            redes pode promover a colaboração em projetos, atividades conjuntas
            e ações de impacto social;
            <br></br>
            <br></br>
            <b>5. Redes profissionais: </b>Considerar o envolvimento em redes
            profissionais que tenham afinidade com as habilidades e interesses
            dos membros da comunidade de cohousing. Isso pode incluir
            organizações ou grupos de profissionais em áreas como arquitetura,
            design, permacultura, construção sustentável, entre outras.
            Participar nessas redes pode fornecer acesso a conhecimentos
            especializados, recursos e oportunidades de parceria;
            <br></br>
            <br></br>
            <b>6. Redes online: </b>Aproveitar as oportunidades de conexão e
            aprendizado oferecidas pelas redes online. Existem fóruns, grupos de
            discussão, plataformas de compartilhamento de recursos e redes
            sociais voltados para o cohousing e outros temas relacionados.
            Participar nessas redes online pode facilitar o intercâmbio de
            informações, a resolução de problemas, a colaboração remota e o
            fortalecimento das conexões entre as comunidades.
            <br></br>
            <br></br>
            Ao ligar-se com outras redes, a comunidade de cohousing amplia o seu
            impacto, enriquece as suas experiências e tem acesso a recursos e
            conhecimentos adicionais. A participação em redes conectadas promove
            a aprendizagem contínua, a partilha de experiências e a colaboração,
            fortalecendo o sentido de pertença e a resiliência coletiva da
            comunidade de cohousing.
          </Accordion>
          <Accordion title="Teoria da mudança (bioregiões, a parte num todo). Brejos Faria no contexto da região.">
            A teoria da mudança é uma abordagem que visa criar uma visão
            holística e estratégica de como uma determinada mudança pode ser
            alcançada. No contexto de cohousing e bio-regiões, a teoria da
            mudança é aplicada para promover uma abordagem sustentável e
            integrada para a comunidade e sua relação com a região circundante,
            como no caso específico de Brejos Faria:
            <br></br>
            <br></br>
            <b>1. Compreender a bio-região: </b>A primeira etapa é realizar um
            estudo abrangente da bio-região onde está localizado o cohousing,
            incluindo a sua geografia, história, ecossistemas, recursos
            naturais, cultura local, economia e desafios específicos enfrentados
            pela região. Isso ajuda a identificar as oportunidades e os pontos
            de conexão entre o cohousing e a bio-região;
            <br></br>
            <br></br>
            <b>2. Estabelecer uma visão partilhada: </b>A comunidade de
            cohousing em Brejos Faria deve envolver os seus membros na criação
            de uma visão partilhada que abranja não apenas o cohousing em si,
            mas também a relação e o impacto positivo que desejamos ter na
            região. Esta visão deve refletir os valores de sustentabilidade,
            resiliência, cooperação e cuidado com o meio ambiente;
            <br></br>
            <br></br>
            <b>3. Identificar objetivos e metas: </b>Com base na visão
            partilhada, é importante identificar objetivos e metas específicas
            que contribuam para a transformação desejada na bio-região. Isso
            pode incluir a preservação de ecossistemas locais, o apoio a
            iniciativas de agricultura regenerativa, a redução do consumo de
            recursos, o fortalecimento da economia local, entre outros;
            <br></br>
            <br></br>
            <b>4. Desenvolver estratégias de ação: </b>Uma vez definidos os
            objetivos e metas, é necessário elaborar estratégias de ação que
            possam ser implementadas pela comunidade de cohousing em parceria
            com outras partes interessadas na região. Isso pode envolver
            parcerias com organizações locais, participação em projetos
            comunitários, envolvimento político, promoção de práticas
            sustentáveis e educacionais, entre outras iniciativas;
            <br></br>
            <br></br>
            <b>5. Monitorar e avaliar o progresso: </b>É importante estabelecer
            mecanismos de monitorização e avaliação para acompanhar o progresso
            em direção aos objetivos e metas estabelecidos. Isto permite fazer
            ajustes e melhorias contínuas nas estratégias de ação, além de
            celebrar conquistas e aprender com desafios;
            <br></br>
            <br></br>
            <b>6. Colaboração com outras bio-regiões: </b>A comunidade de
            cohousing em Brejos Faria pode buscar oportunidades de colaboração e
            aprendizagem com outras bio-regiões, tanto a nível nacional como
            internacional. Isso pode incluir a participação em redes de
            bio-regiões, intercâmbio de conhecimentos e experiências, e partilha
            de boas práticas para promover uma abordagem mais ampla e
            transformadora.
            <br></br>
            <br></br>
            Ao adotar a teoria da mudança e considerar o contexto de bio-região,
            a comunidade de cohousing em Brejos Faria pode tornar-se um agente
            de transformação positiva, contribuindo para a sustentabilidade e
            resiliência da região, além de promover a conscientização e a
            participação ativa de seus membros na construção de um futuro mais
            sustentável.
          </Accordion>
        </BoxLeftComponent>
        <BoxRightComponent>
          <Carousel 
            imagesCarousel={ALEM} 
            disableAutoplay={true} 
            enableNavigation={true}
            enablePagination={true}
          />
        </BoxRightComponent>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default Alem;

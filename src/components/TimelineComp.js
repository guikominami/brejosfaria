import React, { Fragment } from "react";

import { Timeline, Event } from "react-timeline-scribble";

const TimelineComp = () => {
  return (
    <Fragment>
      <Timeline>
        <Event interval={"2020"} title={"Criação do grupo inicial"}>
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation.
        </Event>
        <Event interval={"2022"} title={"Compra do terreno Brejos Faria"}>
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Event>
        <Event interval={"2023"} title={"Brejos Faria em desenvolvimento"}>
          (1) Construir uma cozinha; (2) Reflorestamento; (3) Eventos; (4) Instalações sanitárias; 
          (5) Melhoramento do solo; (6) Compostagem; (7) Chuveiros; (8) sistemas de irrigação;
        </Event>
        <Event interval={"2024"} title={"Brejos Faria sustentável"}>
          (1) Produção de alimentos; (2) Estufa; (3) Bacia de retenção e/ou piscina natural;
        </Event>             
      </Timeline>
    </Fragment>
  );
};

export default TimelineComp;

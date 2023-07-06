import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function LeftAlignedTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <b>Criação do grupo inicial</b>
          <Typography>Because you need strength</Typography>          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />          
        </TimelineSeparator>
        <TimelineContent>
          <b>Compra do terreno Brejos Faria</b>
          <Typography>Because you need strength</Typography>                    
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />          
        </TimelineSeparator>
        <TimelineContent>
          <b>Brejos Faria em desenvolvimento</b>
          <Typography>
          (1) Construir uma cozinha; (2) Reflorestamento; (3) Eventos; (4) Instalações sanitárias; 
          (5) Melhoramento do solo; (6) Compostagem; (7) Chuveiros; (8) sistemas de irrigação;            
          </Typography>                    
        </TimelineContent>        
      </TimelineItem> 
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <b>Brejos Faria sustentável</b>
          <Typography>
            (1) Produção de alimentos; (2) Estufa; (3) Bacia de retenção e/ou piscina natural;      
          </Typography>                    
        </TimelineContent>         
      </TimelineItem>         
    </Timeline>
  );
}

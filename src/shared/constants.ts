import { v4 as uuidv4 } from "uuid";
import type { Question, Questions } from "../types";

const CINEMA: Question[] = [
  {
    id: uuidv4(),
    question:
      "¿Cuál es la película que generó más dinero en la década de los 2000?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question: "¿En qué locación ocurre la historia de Breaking Bad?",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question: `En la película "Qué pasó ayer": ¿Cómo se llamaba el bebé?`,
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question:
      "¿Cuál es la fecha icónica en la que Cady habla con Aaron Samuels en Mean Girls/Chicas pesadas?",
    answer: "Madrid",
    position: 4,
  },
];

const NEWS: Question[] = [
  {
    id: uuidv4(),
    question:
      "¿Cómo se llama la mina de la que rescataron a los mineros en el 2010?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question:
      "¿Qué país legalizó el matrimonio de personas del mismo sexo por primera vez? (Abril - 2001)",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question:
      "¿Dónde fue el epicentro del terremoto que causó el tsunami del 2004?",
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question: "¿Con quien se casó el rey Charles en 2005?",
    answer: "Madrid",
    position: 4,
  },
];

const MUSIC: Question[] = [
  {
    id: uuidv4(),
    question:
      "¿En qué año Janet Jackson tuvo su 'accidente' de vestuario durante el Super Bowl?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question:
      "¿Cuál Destiny's Child fue la primera en llegar al número uno en los Billboard como solista?",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question:
      "¿En qué premios y qué fue la pelea entre Taylor Swift y Kanye West?",
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question: "¿Cuál fue el mayor éxito del 2002?",
    answer: "Madrid",
    position: 4,
  },
];

const TECHNOLOGY: Question[] = [
  {
    id: uuidv4(),
    question: "¿Cuánto pagó Google por Youtube en 2006?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question: "¿En qué año se fundó MySpace?",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question: "¿En qué año se sube el primer video a Youtube?",
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question: "¿En qué año sale el primer iPhone?",
    answer: "Madrid",
    position: 4,
  },
];

const SPORTS: Question[] = [
  {
    id: uuidv4(),
    question: "¿Qué país ganó la Eurocopa 2004?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question:
      "¿Qué país ganó la medalla de oro en voleibol femenino en los Juegos Olímpicos de Sydney de 2000?",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question:
      "¿Cuantas medallas ganó Usain Bolt en los Juegos Olímpicos de 2008",
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question:
      "¿Contra quien jugó Chile la final de tennis en pareja en los Juegos Olímpicos de Atenas de 2004?",
    answer: "Madrid",
    position: 4,
  },
];

const CINEMA_2: Question[] = [
  {
    id: uuidv4(),
    question: "¿En qué año se estrena GOT?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question: "¿Cual es la película más taquillera de los 2010's?",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question:
      "¿Cuál es el nombre de la película ganadora del Oscar donde Jared Leto interpreta a una persona transgénero?",
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question: "¿Cómo se llaman los vampiros enemigos en Crepúsculo?",
    answer: "Madrid",
    position: 4,
  },
];

const NEWS_2: Question[] = [
  {
    id: uuidv4(),
    question: "¿En qué año renuncia el Papa Benedicto?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question: "¿Qué desastre arquitectónico ocurrió en el 2019?",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question: "¿En qué año transiciona Bruce Jenner?",
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question: "¿Cuál fue el epicentro del terremoto del 2010?",
    answer: "Madrid",
    position: 4,
  },
];

const MUSIC_2: Question[] = [
  {
    id: uuidv4(),
    question: "¿En qué año muere David Bowie?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question:
      "¿Qué artista tiene el show más visto de los 2010's de Super Bowls?",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question: "Top 3 de las canciones más rentables de la decada",
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question: "¿Cuántos albumes sacó Taylor Swift en la década de los 2010's?",
    answer: "Madrid",
    position: 4,
  },
];

const TECHNOLOGY_2: Question[] = [
  {
    id: uuidv4(),
    question: "¿En qué año Instagram llega a los 100 millones de usuarios?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question:
      "¿Qué filántropo millonario ayudó en el rescate de los niños en Tailandia?",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question: "Videojuegos más vendidos de la Nintendo Switch",
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question: "En el 2014 aparece un asistente virtual. ¿Cuál es su nombre?",
    answer: "Madrid",
    position: 4,
  },
];

const SPORTS_2: Question[] = [
  {
    id: uuidv4(),
    question: "¿En qué año fue el desastre del Chapecoense?",
    answer: "Paris",
    position: 1,
  },
  {
    id: uuidv4(),
    question:
      "¿En dónde se jugó el campeonato mundial de clubes de la FIVB 2018?",
    answer: "Berlin",
    position: 2,
  },
  {
    id: uuidv4(),
    question:
      "¿Contra quién juega la semifinal Chile en la Copa América de 2015?",
    answer: "Rome",
    position: 3,
  },
  {
    id: uuidv4(),
    question: "¿Cuántas medallas ganó Michael Phelps en 2012?",
    answer: "Madrid",
    position: 4,
  },
];

export const QUESTIONS: Record<number, Questions> = {
  1: {
    CINEMA: CINEMA,
    NEWS: NEWS,
    MUSIC: MUSIC,
    TECHNOLOGY: TECHNOLOGY,
    SPORTS: SPORTS,
  },
  2: {
    CINEMA: CINEMA_2,
    NEWS: NEWS_2,
    MUSIC: MUSIC_2,
    TECHNOLOGY: TECHNOLOGY_2,
    SPORTS: SPORTS_2,
  },
};

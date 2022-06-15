import { Genre, VideogameClass } from "./videogame-class";

export const VIDEOGAMES: VideogameClass[] = [];

const date1 = new Date(2020, 10, 5, 10, 30);

const vg1 = new VideogameClass('Wolfenstein', date1,'id Software', Genre.FPS );
const vg2 = new VideogameClass('Cod black ops 2', new Date(),'Activision', Genre.FPS );
const vg3 = new VideogameClass('Hogs of war', new Date("2015-02-02T00:00:00.000Z"),'Gremlin Interactive', Genre.STRATEGIC);
const vg4 = new VideogameClass('World in conflict', new Date(),'Massive Entertainment', Genre.STRATEGIC);
const vg5 = new VideogameClass('Momodora', new Date(),'Bombservice', Genre.PLATFORM);
const vg6 = new VideogameClass('Bubble dragon', new Date(),'Fukio Mitsuji', Genre.PUZZLE);



VIDEOGAMES.push(vg1, vg2, vg3, vg4, vg5, vg6);
import { Genre, VideogameClass } from "./videogame-class";

export const VIDEOGAMES: VideogameClass[] = [];

const date1 = new Date(2020, 10, 5, 10, 30);

const vg1 = new VideogameClass('Wolfenstein', date1,'id Software', Genre.FPS );
const vg2 = new VideogameClass('Cod black ops 2', new Date("2014-02-02T00:00:00.000Z"),'Activision', Genre.FPS );
const vg3 = new VideogameClass('Hogs of war', new Date("2000-10-02T00:00:00.000Z"),'Gremlin Interactive', Genre.STRATEGIC);
const vg4 = new VideogameClass('World in conflict', new Date("2015-05-02T00:00:00.000Z"),'Massive Entertainment', Genre.STRATEGIC);
const vg5 = new VideogameClass('Momodora', new Date("1984-11-02T00:00:00.000Z"),'Bombservice', Genre.PLATFORM);
const vg6 = new VideogameClass('Bubble dragon', new Date("2001-07-02T00:00:00.000Z"),'Fukio Mitsuji', Genre.PUZZLE);
const vg7 = new VideogameClass('FarCry 4', new Date("2018-07-02T00:00:00.000Z"),'Activision', Genre.FPS);




VIDEOGAMES.push(vg1, vg2, vg3, vg4, vg5, vg6, vg7);
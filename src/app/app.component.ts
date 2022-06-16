import { Component, OnInit } from '@angular/core';
import { VideogameClass } from './model/videogame-class';
import { VIDEOGAMES } from './model/videogames-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'videogames-angular';

  videogamesArray: VideogameClass[];

  constructor(){
    this.videogamesArray = VIDEOGAMES;
  }
  ngOnInit(): void {
   
  }
 
}

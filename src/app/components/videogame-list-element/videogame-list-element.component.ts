import { Component, Input, OnInit } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';

@Component({
  selector: 'app-videogame-list-element',
  templateUrl: './videogame-list-element.component.html',
  styleUrls: ['./videogame-list-element.component.scss']
})
export class VideogameListElementComponent implements OnInit {
  @Input() videogame?: VideogameClass;

  constructor() { }

  ngOnInit(): void {
  }

}

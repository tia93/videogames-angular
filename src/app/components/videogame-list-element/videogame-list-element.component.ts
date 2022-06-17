import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';

@Component({
  selector: 'app-videogame-list-element',
  templateUrl: './videogame-list-element.component.html',
  styleUrls: ['./videogame-list-element.component.scss']
})
export class VideogameListElementComponent implements OnInit {
  @Input() videogame?: VideogameClass;
  @Output() onVideogameDismissed = new EventEmitter<VideogameClass>();



  constructor() { }

  ngOnInit(): void {
  }
 
  videogameOutOfproduce(): void{
    this.videogame?.done()
    this.onVideogameDismissed.emit(this.videogame)
    
    
  }
}

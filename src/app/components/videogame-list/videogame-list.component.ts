import { Component, Input, OnInit } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';
import { VIDEOGAMES } from 'src/app/model/videogames-mock';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.scss']
})
export class VideogameListComponent implements OnInit {
  @Input() videogames: VideogameClass[];

  constructor() {
    this.videogames = [];
   }

  ngOnInit(): void {
  }

  orderByDate(){
      this.videogames.sort(VideogameClass.compareByDate)
  }
    

  orderByName(){
    this.videogames.sort(VideogameClass.compareByName)
  }

  orderBySHouse(){
    this.videogames.sort(VideogameClass.compareBySHous)
  }


}


// function sortVideogameByName(VIDEOGAMES:string) {
//   for (const videogameSort of VIDEOGAMES) {
//     if (videogameSort.name > videogame) {
      
//     }
//   }
// }



// {
//   let stringArray: string[] = [VideogameClass.name];

//   let sortedArray: string[] = stringArray.sort((n1,n2) => {
//   if (n1 > n2) {
//       return 1;
//   }
//   if (n1 < n2) {
//       return -1;
//   }
//   return 0;
// });
// console.log(sortedArray);

// }
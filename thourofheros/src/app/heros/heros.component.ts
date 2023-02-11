import { HEROES } from './../mock-heros';
import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent  {
  hero: Hero = {
     id: 1,
     name: 'Wolverine'
    };

    heroes = HEROES

    selectedHero?: Hero
    onSelect(hero: Hero): void{
      this.selectedHero = hero
    }


}

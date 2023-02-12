import { HeroService } from './../hero.service';
import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
    heroes: Hero[] = [];
    selectedHero?: Hero

    constructor(private heroService: HeroService ){

    }

    ngOnInit(): void {
      this.getHeros()
    }

    getHeros(){
       this.heroService.getHeros().subscribe(heroes =>
        this.heroes = heroes);
    }

    onSelect(hero: Hero): void{
      this.selectedHero = hero
    }
}

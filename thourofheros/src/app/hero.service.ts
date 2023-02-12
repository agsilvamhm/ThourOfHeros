import { HEROES } from './mock-heros';
import { Hero } from './hero.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeros(): Hero[] {
    return HEROES;
  }
}

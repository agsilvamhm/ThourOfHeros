import { HEROES } from './mock-heros';
import { Hero } from './hero.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROES)
    return heroes;
  }
}

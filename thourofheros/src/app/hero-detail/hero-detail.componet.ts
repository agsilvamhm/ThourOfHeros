import { Hero } from './../hero.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.componet.html',
  styleUrls:['./hero-detail.componet.css']})

export class HeroDetailComponent {
  @Input()hero?: Hero
}

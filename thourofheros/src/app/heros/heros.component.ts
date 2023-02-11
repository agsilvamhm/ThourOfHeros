import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
     id: 1,
     name: 'Wolverine'
    };

  constructor() { }

  ngOnInit(): void {
  }

}

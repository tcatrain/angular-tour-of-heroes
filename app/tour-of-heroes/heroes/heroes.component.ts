import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector : 'heroes',
  templateUrl : 'app/tour-of-heroes/heroes/heroes.component.html',
  styleUrls: [ 'app/tour-of-heroes/heroes/heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero : Hero;
  heroes : Hero[];

  constructor(private heroService : HeroService, private router : Router) {}

  ngOnInit() : void {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
}

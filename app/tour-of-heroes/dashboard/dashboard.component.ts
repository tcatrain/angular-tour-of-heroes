import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector : 'dashboard',
  templateUrl : 'app/tour-of-heroes/dashboard/dashboard.component.html',
  styleUrls : [
    'app/tour-of-heroes/dashboard/dashboard.component.css'
  ]
})
export class DashboardComponent implements OnInit {

  heroes : Hero[];

  constructor(private heroService : HeroService, private router : Router) { }

  ngOnInit() : void {
    this.heroService.getHeroes().then(heroes =>
      this.heroes = heroes.slice(1, 5)
    );
  }

  gotoDetail(hero : Hero) : void {
    let link = ['hero', hero.id];
    this.router.navigate(link);
  }
}

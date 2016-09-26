import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector : 'hero',
  templateUrl : 'app/tour-of-heroes/hero/hero.component.html',
  styleUrls : [
    'app/tour-of-heroes/hero/hero.component.css'
  ]
})
export class HeroComponent implements OnInit {

  @Input() hero : Hero;

  constructor(private heroService : HeroService, private route : ActivatedRoute) { }

  ngOnInit() : void {
    this.route.params.forEach((params : Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  goBack() : void {
    window.history.back();
  }

}

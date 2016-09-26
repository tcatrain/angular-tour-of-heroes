import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { TourOfHeroesComponent }   from './tour-of-heroes.component';
import { HeroService }   from './hero/hero.service';
import { HeroComponent }   from './hero/hero.component';
import { HeroesComponent }   from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { routing }   from './tour-of-heroes.routing';

@NgModule({
  imports : [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations : [
    TourOfHeroesComponent,
    HeroComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers : [
    HeroService
  ],
  bootstrap :  [ TourOfHeroesComponent ]
})
export class TourOfHeroesModule { }

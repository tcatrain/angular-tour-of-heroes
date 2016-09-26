import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from './hero/hero.component'
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const tourOfHeroesRoutes : Routes = [
  {
    path : '',
    redirectTo : '/dashboard',
    pathMatch : 'full'
  }, {
    path : 'heroes',
    component : HeroesComponent
  }, {
    path : 'dashboard',
    component : DashboardComponent
  }, {
    path : 'hero/:id',
    component : HeroComponent
  }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(tourOfHeroesRoutes);

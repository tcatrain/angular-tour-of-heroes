import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(TourOfHeroesModule);

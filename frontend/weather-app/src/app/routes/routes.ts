import { Routes } from '@angular/router';

import { AuthComponent } from '../auth/auth.component';
import { WeatherComponent } from '../weather/weather.component';

export const appRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'auth', component: AuthComponent },
];

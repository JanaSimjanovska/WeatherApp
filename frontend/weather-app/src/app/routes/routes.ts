import { Routes } from '@angular/router';

import { AuthComponent } from '../auth/auth.component';
import { WeatherComponent } from '../weather/weather.component';
import { AuthGuard } from '../auth/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: WeatherComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
];

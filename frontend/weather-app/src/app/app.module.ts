import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRoutes } from './routes/routes';
import { AuthComponent } from './auth/auth.component';
import { WeatherComponent } from './weather/weather.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { CurrentWeatherComponent } from './weather/current-weather/current-weather.component';
import { HourlyWeatherComponent } from './weather/hourly-weather/hourly-weather.component';
import { TwoDayWeatherComponent } from './weather/two-day-weather/two-day-weather.component';
import { SevenDayWeatherComponent } from './weather/seven-day-weather/seven-day-weather.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, WeatherComponent, CurrentWeatherComponent, HourlyWeatherComponent, TwoDayWeatherComponent, SevenDayWeatherComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

export enum ForecastMode {
  currentWeather = 'current weather',
  hourlyWeather = 'hourly weather forecast',
  twoDaysWeather = 'two days weather forecast',
  sevenDaysWeather = 'seven days weather forecast',
}
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
  forecastMode: ForecastMode;
  private closeSub: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.closeSub = this.weatherService.weatherForecastMode.subscribe(
      (value) => {
        this.forecastMode = value;
      }
    );
  }

  ngOnDestroy() {
    this.closeSub.unsubscribe();
  }
}

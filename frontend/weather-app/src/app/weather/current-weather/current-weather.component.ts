import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscription } from 'rxjs';
import { ForecastMode } from '../weather.component';
import { CurrentWeatherData } from '../weather-data.models';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  currentWeatherData = this.weatherService.currentWeather;

  ngOnInit(): void {}
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css'],
})
export class HourlyWeatherComponent implements OnInit {
  oneHourWeatherData = this.weatherService.oneHourWeather;
  searchedPlace = this.weatherService.searchedPlace;
  weatherIconBaseUrl = this.weatherService.weatherIconsBaseUrl;
  weatherIcon: string | undefined = '';
  Math = Math;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}

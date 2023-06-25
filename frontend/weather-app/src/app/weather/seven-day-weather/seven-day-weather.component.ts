import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seven-day-weather',
  templateUrl: './seven-day-weather.component.html',
  styleUrls: ['./seven-day-weather.component.css'],
})
export class SevenDayWeatherComponent implements OnInit {
  sevenDaysWeatherData = this.weatherService.sevenDaysWeather;
  searchedPlace = this.weatherService.searchedPlace;
  weatherIconBaseUrl = this.weatherService.weatherIconsBaseUrl;
  weatherIcon: string | undefined = '';
  Math = Math;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}

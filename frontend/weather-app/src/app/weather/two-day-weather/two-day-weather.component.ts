import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-two-day-weather',
  templateUrl: './two-day-weather.component.html',
  styleUrls: ['./two-day-weather.component.css'],
})
export class TwoDayWeatherComponent implements OnInit {
  twoDaysWeatherData = this.weatherService.twoDaysWeather;
  searchedPlace = this.weatherService.searchedPlace;
  weatherIconBaseUrl = this.weatherService.weatherIconsBaseUrl;
  weatherIcon: string | undefined = '';
  Math = Math;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}

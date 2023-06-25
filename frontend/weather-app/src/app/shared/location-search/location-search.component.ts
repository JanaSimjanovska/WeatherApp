import { Component, OnInit } from '@angular/core';
import { ForecastMode } from 'src/app/weather/weather.component';
import { WeatherService } from 'src/app/weather/weather.service';

export interface Coordinates {
  latitude: string;
  longitude: string;
}
@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css'],
})
export class LocationSearchComponent implements OnInit {
  GeoapifyAPIKey = '8ccdef2e864d4121bf138dc288a2197a';
  suggestionsFilter: any;
  coordinates: Coordinates;
  messageForUser = '';
  searchedPlaceFormatted = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  placeSelected(event: any) {
    if (event) {
      this.coordinates = {
        longitude: event.properties.lon.toString(),
        latitude: event.properties.lat.toString(),
      };
      this.weatherService.searchedPlace.next(event.properties.formatted);
    } else {
      return;
    }
  }

  emptyInputHandler(forecastMode: ForecastMode) {
    if (!this.coordinates) {
      this.messageForUser = 'Please choose a location before you can search.';
      return;
    }
    switch (forecastMode) {
      case ForecastMode.currentWeather:
        this.weatherService.getCurrentWeather(this.coordinates);
        break;
      case ForecastMode.hourlyWeather:
        this.weatherService.getOneHourForecast(this.coordinates);
        break;
      case ForecastMode.twoDaysWeather:
        this.weatherService.getTwoDayForecast(this.coordinates);
        break;
      case ForecastMode.sevenDaysWeather:
        this.weatherService.getSevenDayForecast(this.coordinates);
        break;
    }
    this.weatherService.weatherForecastMode.next(forecastMode);
    this.messageForUser = '';
  }

  getCurrentWeather() {
    this.emptyInputHandler(ForecastMode.currentWeather);
  }

  getOneHourForecast() {
    this.emptyInputHandler(ForecastMode.hourlyWeather);
  }

  getTwoDayForecast() {
    this.emptyInputHandler(ForecastMode.twoDaysWeather);
  }

  getSevenDayForecast() {
    this.emptyInputHandler(ForecastMode.sevenDaysWeather);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coordinates } from '../shared/location-search/location-search.component';
import { BehaviorSubject } from 'rxjs';
import { ForecastMode } from './weather.component';
import {
  CurrentWeatherData,
  OneHourWeatherData,
  SevenDaysWeatherData,
  TwoDaysWeatherData,
} from './weather-data.models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherForecastMode = new BehaviorSubject<ForecastMode | null>(null);
  currentWeather = new BehaviorSubject<CurrentWeatherData | null>(null);
  oneHourWeather = new BehaviorSubject<OneHourWeatherData | null>(null);
  twoDaysWeather = new BehaviorSubject<TwoDaysWeatherData | null>(null);
  sevenDaysWeather = new BehaviorSubject<SevenDaysWeatherData | null>(null);
  searchedPlace = new BehaviorSubject<string>('');

  weatherAPIBaseUrl = 'http://localhost:27191/api/weather';
  weatherIconsBaseUrl = 'https://openweathermap.org/img/wn/';

  constructor(private http: HttpClient) {}

  getCurrentWeather(coordinates: Coordinates) {
    return this.http
      .post(`${this.weatherAPIBaseUrl}/current-weather`, {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      })
      .subscribe((value) => this.currentWeather.next(value));
  }

  getOneHourForecast(coordinates: Coordinates) {
    return this.http
      .post(`${this.weatherAPIBaseUrl}/hourly-weather`, {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      })
      .subscribe((value) => {
        this.oneHourWeather.next(value);
        console.log('WHAT DO I GET BACK', value);
      });
  }

  getTwoDayForecast(coordinates: Coordinates) {
    return this.http
      .post(`${this.weatherAPIBaseUrl}/two-day-weather`, {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      })
      .subscribe((value) => this.twoDaysWeather.next(value));
  }

  getSevenDayForecast(coordinates: Coordinates) {
    return this.http
      .post(`${this.weatherAPIBaseUrl}/seven-day-weather`, {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      })
      .subscribe((value) => this.sevenDaysWeather.next(value));
  }
}

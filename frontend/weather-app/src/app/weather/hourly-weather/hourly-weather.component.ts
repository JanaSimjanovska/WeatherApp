import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ForecastMode } from '../weather.component';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css'],
})
export class HourlyWeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}

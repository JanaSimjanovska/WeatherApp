export interface CurrentWeatherData {
  current?: Current;
}

export interface OneHourWeatherData {
  minutely?: Minutely[];
}

export interface TwoDaysWeatherData {
  hourly?: Current[];
}

export interface SevenDaysWeatherData {
  daily?: Daily[];
}

export interface Weather {
  id?: number;
  icon?: string;
  description?: string;
  main?: string;
}

export interface Minutely {
  dt?: number;
  precipitation?: number;
}

export interface Daily {
  clouds?: number;
  feels_like?: FeelsLike;
  weather?: Weather[];
  wind_deg?: number;
  wind_speed?: number;
  temp?: Temperature;
  humidity?: number;
  pressure?: number;
  dt?: number;
  uvi?: number;
  rain?: number;
  summary?: string;
}

export interface Temperature {
  day?: number;
  eve?: number;
  max?: number;
  min?: number;
  morn?: number;
  night?: number;
}

export interface FeelsLike {
  day?: number;
  eve?: number;
  morn?: number;
  night?: number;
}

export interface Current {
  clouds?: number;
  feels_like?: number;
  weather?: Weather[];
  wind_deg?: number;
  wind_speed?: number;
  temp?: number;
  humidity?: number;
  pressure?: number;
  dt?: number;
  uvi?: number;
}

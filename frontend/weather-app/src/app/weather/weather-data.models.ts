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
  time?: Date;
  precipitation?: number;
}

export interface Daily {
  clouds?: number;
  feelsLike?: FeelsLike;
  weather?: Weather[];
  windDeg?: number;
  windSpeed?: number;
  temp?: Temperature;
  humidity?: number;
  pressure?: number;
  time?: Date;
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
  feelsLike?: number;
  weather?: Weather[];
  windDeg?: number;
  windSpeed?: number;
  temp?: number;
  humidity?: number;
  pressure?: number;
  time?: Date;
  uvi?: number;
}

import { Weather } from './weather-api-response';

export interface Hourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  pop: number;
}

export interface WeatherHourlyResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  hourly: Hourly[];
}

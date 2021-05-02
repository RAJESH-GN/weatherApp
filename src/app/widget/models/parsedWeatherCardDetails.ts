import {Main} from './weatherApiResponse';

export interface ParsedWeatherCardDetails {
  main: Main;
  date: number;
  city: string;
  country: string;
  type: string;
  windSpeed: number;
  coord: Location;
  feelsLike: number;
  pressure: number;
  clouds: number;
  humidity: number;
}

export interface Location{
  lat: number;
  lon: number;
}

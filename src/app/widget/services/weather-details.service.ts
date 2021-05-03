import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CityName,
  Coord,
  WeatherApiResponse,
} from '../models/weather-api-response';
import { HttpClient } from '@angular/common/http';
import { WeatherHourlyResponse } from '../models/weather-hourly-response';
import { environment } from '../../../environments/environment';

@Injectable()
export class WeatherDetailsService {
  constructor(private http: HttpClient) {}

  /**
   * Gets the information from the WeatherAPI taking
   * @param city cityName
   * @returns Observable<WeatherApiResponse>
   */
  public getWeatherInfoWithCity(
    city: CityName
  ): Observable<WeatherApiResponse> {
    return this.http.get<WeatherApiResponse>(
      `${environment.weather_api_base_url}weather?q=${city}&units=metric&appid=${environment.api_key}`
    );
  }

  /**
   *  This method call the weatherApi to get the hourly details provided
   * @param lat Latitude of the city
   * @param lon Longitude of the City
   * @returns Observable<WeatherHourlyResponse>
   */
  public getHourlyInfoOfCity(
    lat: number,
    lon: number
  ): Observable<WeatherHourlyResponse> {
    return this.http.get<WeatherHourlyResponse>(
      `${environment.weather_api_base_url}onecall?lat=${lat}&units=metric&lon=${lon}&exclude=daily,current,minutely,alerts&appid=${environment.api_key}`
    );
  }
}

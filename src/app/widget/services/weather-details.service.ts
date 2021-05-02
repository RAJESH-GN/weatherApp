import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CityName,
  Coord,
  WeatherApiResponse,
} from '../models/weatherApiResponse';
import { HttpClient } from '@angular/common/http';
import { WeatherHourlyResponse } from '../models/weatherHourlyResponse';
import { environment } from '../../../environments/environment';

@Injectable()
export class WeatherDetailsService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @param city
   * @returns Observable<WeatherApiResponse>
   */
  public getWeatherInfoWithCity(
    city: CityName
  ): Observable<WeatherApiResponse> {
    return this.http.get<WeatherApiResponse>(
      `${environment.weather_api_base_url}weather?q=${city}&units=metric&appid=${environment.api_key}`
    );
  }

  public getHourlyInfoOfCity(
    lat: number,
    lon: number
  ): Observable<WeatherHourlyResponse> {
    return this.http.get<WeatherHourlyResponse>(
      `${environment.weather_api_base_url}onecall?lat=${lat}&units=metric&lon=${lon}&exclude=daily,current,minutely,alerts&appid=${environment.api_key}`
    );
  }
}

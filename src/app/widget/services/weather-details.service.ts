import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherApiResponse} from '../models/weatherApiResponse';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WeatherDetailsService {

  constructor(private http: HttpClient) { }

  getWeatherInfoWithCity(name: string): Observable<WeatherApiResponse>{
    return this.http.get<WeatherApiResponse>('http://api.openweathermap.org/data/2.5/weather?q=amsterdam&units=metric&appid=49278b4a9734f04bead1f100c5ed9fab');
  }
}

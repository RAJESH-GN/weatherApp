import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Coord, WeatherApiResponse} from '../models/weatherApiResponse';
import {HttpClient} from '@angular/common/http';
import {WeatherHourlyResponse} from '../models/weatherHourlyResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherDetailsService {
  public selectedCityLocation = new BehaviorSubject<Coord | undefined>(undefined);
  constructor(private http: HttpClient) {
  }

  public getWeatherInfoWithCity(name: string): Observable<WeatherApiResponse> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=49278b4a9734f04bead1f100c5ed9fab`;
    return this.http.get<WeatherApiResponse>(url);
  }

  public getHourlyInfoOfCity(lat: number, lon: number): Observable<WeatherHourlyResponse> {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&units=metric&lon=${lon}&exclude=daily,current,minutely,alerts&appid=49278b4a9734f04bead1f100c5ed9fab`;
    return this.http.get<WeatherHourlyResponse>(url);
  }
}

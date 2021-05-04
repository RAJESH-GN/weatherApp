import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CityName, WeatherApiResponse } from '../models/weather-api-response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WeatherHourlyResponse } from '../models/weather-hourly-response';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

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
    return this.http
      .get<WeatherApiResponse>(
        `${environment.weather_api_base_url}weather?q=${city}&units=metric&appid=${environment.api_key}`
      )
      .pipe(catchError(this.handleError));
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
    return this.http
      .get<WeatherHourlyResponse>(
        `${environment.weather_api_base_url}onecall?lat=${lat}&units=metric&lon=${lon}&exclude=daily,current,minutely,alerts&appid=${environment.api_key}`
      )
      .pipe(catchError(this.handleError));
  }

  /**
   * Generic error handler for http calls
   * @param error gets info abl=out what happened with the http request
   * @returns Error object
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Can be routed to a page which gives info to user.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WeatherDetailsService } from './weather-details.service';
import {WeatherApiResponse} from '../models/weather-api-response';
import {of} from 'rxjs';
import {WeatherHourlyResponse} from '../models/weather-hourly-response';

describe('WeatherDetailsService', () => {
  let service: WeatherDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeatherDetailsService],
    });
    service = TestBed.inject(WeatherDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the http service and return Observable response', () => {
    const weatherMockResponse: WeatherApiResponse = {
      coord: { lon: 4.4792, lat: 51.9225 },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      base: 'stations',
      main: {
        temp: 6.09,
        feels_like: 3.13,
        temp_min: 4.44,
        temp_max: 7.22,
        pressure: 1020,
        humidity: 81,
      },
      visibility: 10000,
      wind: { speed: 4.12, deg: 210 },
      clouds: { all: 100 },
      dt: 1620008971,
      sys: {
        type: 1,
        id: 1541,
        country: 'NL',
        sunrise: 1620014914,
        sunset: 1620068952,
      },
      timezone: 7200,
      id: 2747891,
      name: 'Madrid',
      cod: 200,
    };
    const http = TestBed.inject(HttpClient);
    spyOn(http, 'get').and.returnValue(of(weatherMockResponse));
    service.getWeatherInfoWithCity('Madrid').subscribe(response => {
      expect(response).toEqual(weatherMockResponse);
    });
  });

  it('should call the http service to get hourlyDetails', () => {
    const weatherHourlyMockResponse: WeatherHourlyResponse = {
      lat: 52.374,
      lon: 4.8897,
      timezone: 'Europe/Amsterdam',
      timezone_offset: 7200,
      hourly: [
        {
          dt: 1620014400,
          temp: 6.42,
          feels_like: 3.57,
          pressure: 1018,
          humidity: 84,
          dew_point: 3.92,
          uvi: 0,
          clouds: 36,
          visibility: 10000,
          wind_speed: 4.07,
          wind_deg: 201,
          wind_gust: 10.63,
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n',
            },
          ],
          pop: 0.04,
        },
      ],
    };
    const http = TestBed.get(HttpClient);
    spyOn(http, 'get').and.returnValue(of(weatherHourlyMockResponse));
    service.getHourlyInfoOfCity(10, 20).subscribe(response => {
      expect(response).toEqual(weatherHourlyMockResponse);
    });
  });
});

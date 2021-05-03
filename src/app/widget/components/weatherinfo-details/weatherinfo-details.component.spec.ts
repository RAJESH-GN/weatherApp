import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherinfoDetailsComponent } from './weatherinfo-details.component';
import { WeatherDetailsService } from '../../services/weather-details.service';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { WeatherHourlyResponse } from '../../models/weatherHourlyResponse';

describe('WeatherinfoDetailsComponent', () => {
  let component: WeatherinfoDetailsComponent;
  let fixture: ComponentFixture<WeatherinfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, SharedModule, HttpClientModule],
      declarations: [WeatherinfoDetailsComponent],
      providers: [WeatherDetailsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherinfoDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });
  it('should call the service to fetch the hourlyDetails', () => {
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
    const weatherDetailsService = TestBed.get(WeatherDetailsService);
    spyOn(weatherDetailsService, 'getHourlyInfoOfCity').and.returnValue(
      of(weatherHourlyMockResponse)
    );
    fixture.detectChanges();
    component.hourlyWeather.subscribe(hourlyWeather => {
      const nativeElement: HTMLElement = fixture.nativeElement;
      expect(hourlyWeather).toEqual(weatherHourlyMockResponse.hourly);
      expect(
        nativeElement.querySelector('.weather-hourly__time').innerHTML
      ).toEqual(' 06:00 AM, 03-May ');
      expect(
        nativeElement.querySelector('.weather-hourly__temperature').innerHTML
      ).toEqual(' 6°C ');
    });
  });
});

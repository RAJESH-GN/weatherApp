import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {of} from 'rxjs';

import {WeatherinfoHourlyDetailsComponent} from './weatherinfo-hourly-details.component';
import {WeatherDetailsService} from '../../services/weather-details.service';
import {MaterialModule} from '../../../material/material.module';
import {SharedModule} from '../../../shared/shared.module';
import {weatherApiHourlyResponse} from '../../../shared/mocks/weather-api-hourly-response';

describe('WeatherinfoHourlyDetailsComponent', () => {
  let component: WeatherinfoHourlyDetailsComponent;
  let fixture: ComponentFixture<WeatherinfoHourlyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, SharedModule, HttpClientModule],
      declarations: [WeatherinfoHourlyDetailsComponent],
      providers: [WeatherDetailsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherinfoHourlyDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create a component instance', () => {
    expect(component).toBeTruthy();
  });
  it('should call the service to fetch the hourlyDetails', () => {
    const weatherDetailsService = TestBed.get(WeatherDetailsService);
    spyOn(weatherDetailsService, 'getHourlyInfoOfCity').and.returnValue(
      of(weatherApiHourlyResponse)
    );
    fixture.detectChanges();
    component.hourlyWeather.subscribe(hourlyWeather => {
      const nativeElement: HTMLElement = fixture.nativeElement;
      expect(hourlyWeather).toEqual(weatherApiHourlyResponse.hourly);
      expect(
        nativeElement.querySelector('.weather-hourly__time').innerHTML
      ).toEqual(' 06:00 AM, 03-May ');
      expect(
        nativeElement.querySelector('.weather-hourly__temperature').innerHTML
      ).toEqual(' 6°C ');
    });
  });
});

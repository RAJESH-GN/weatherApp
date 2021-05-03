import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherinfoWidgetListComponent } from './weatherinfo-widget-list.component';
import { WeatherDetailsService } from '../../services/weather-details.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { WeatherApiResponse } from '../../models/weatherApiResponse';

describe('WeatherinfoWidgetListComponent', () => {
  let component: WeatherinfoWidgetListComponent;
  let fixture: ComponentFixture<WeatherinfoWidgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [WeatherinfoWidgetListComponent],
      providers: [WeatherDetailsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherinfoWidgetListComponent);
    component = fixture.componentInstance;
  });

  it('should create compoenent instance', () => {
    expect(component).toBeTruthy();
  });

  it('should load the weather Details for 5 cities', () => {
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
      name: 'Rotterdam',
      cod: 200,
    };
    const weatherDetailsService = TestBed.get(WeatherDetailsService);
    spyOn(weatherDetailsService, 'getWeatherInfoWithCity').and.returnValue(
      of(weatherMockResponse)
    );
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(component.parsedWeatherDetails.length).toEqual(5);
    expect(component.parsedWeatherDetails[0]).toEqual(weatherMockResponse);
    expect(
      element.querySelectorAll('.weather-info-list app-weatherinfo-widget')
    ).toBeDefined();
  });
});

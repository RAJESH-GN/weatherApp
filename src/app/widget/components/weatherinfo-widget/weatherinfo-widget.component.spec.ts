import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {WeatherinfoWidgetComponent} from './weatherinfo-widget.component';
import {Component} from '@angular/core';
import {WeatherApiResponse} from '../../models/weatherApiResponse';
import {SharedModule} from '../../../shared/shared.module';
import {MaterialModule} from '../../../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';

describe('WeatherinfoWidgetComponent', () => {
  let component: WeatherinfoWidgetComponent;
  let fixture: ComponentFixture<WeatherinfoWidgetComponent>;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, MaterialModule, BrowserAnimationsModule],
      declarations: [WeatherinfoWidgetComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    fixture = TestBed.createComponent(WeatherinfoWidgetComponent);
    testHostFixture.detectChanges();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create create a instance of the component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a input from the parent component and show details', () => {
    expect(
      testHostFixture.nativeElement.querySelector('mat-panel-title h2')
        .innerText
    ).toEqual(' Rotterdam,NL ');
    expect(
      testHostFixture.nativeElement.querySelector('.temperature-details p')
        .innerText
    ).toEqual('As of 04:29 AM');
  });
  it('should open or load the houly details component for first item ', () => {
    const nativeElement: HTMLElement = testHostFixture.nativeElement;
    expect(
      nativeElement.querySelector('app-weatherinfo-details')
    ).toBeDefined();
    expect(
      testHostFixture.nativeElement.querySelector('.action-next')
    ).toBeDefined();
    component.nextStep();
    expect(component.step).toEqual(1);
  });
});

@Component({
  selector: `app-host-component`,
  template: `
    <app-weatherinfo-widget
      [parsedWeatherDetails]="parsedWeatherDetails"
    ></app-weatherinfo-widget>`,
})
class TestHostComponent {
  public parsedWeatherDetails: WeatherApiResponse[] = [
    {
      coord: {lon: 4.4792, lat: 51.9225},
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
      wind: {speed: 4.12, deg: 210},
      clouds: {all: 100},
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
    },
    {
      coord: {lon: 4.4792, lat: 51.9225},
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
      wind: {speed: 4.12, deg: 210},
      clouds: {all: 100},
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
      name: 'Amsterdam',
      cod: 200,
    },
  ];
}

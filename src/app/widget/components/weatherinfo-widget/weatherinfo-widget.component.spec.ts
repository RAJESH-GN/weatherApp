import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {WeatherinfoWidgetComponent} from './weatherinfo-widget.component';
import {Component} from '@angular/core';
import {WeatherApiResponse} from '../../models/weatherApiResponse';
import {SharedModule} from '../../../shared/shared.module';
import {MaterialModule} from '../../../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {weatherApiMockResponse} from '../../../shared/mocks/weather-api-mock-response';

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
      testHostFixture.nativeElement.querySelector('mat-panel-title')
    ).toBeDefined();
  });
  it('should open or load the hourly details component for first item ', () => {
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
    weatherApiMockResponse
  ];
}

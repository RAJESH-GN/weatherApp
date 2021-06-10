import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ExpansionTitleComponent } from './expansion-title.component';
import { MaterialModule } from '../../../../../shared/material/material.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { TemperaturePipe } from '../../../../../shared/pipes/temperature.pipe';
import { WeatherApiResponse } from '../../../../models/weather-api-response';
import { weatherApiMockResponse } from '../../../../../shared/mocks/weather-api-mock-response';

describe('ExpansionTitleComponent', () => {
  let component: ExpansionTitleComponent;
  let fixture: ComponentFixture<ExpansionTitleComponent>;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, SharedModule],
      declarations: [
        ExpansionTitleComponent,
        TemperaturePipe,
        TestHostComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    fixture = TestBed.createComponent(ExpansionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the details once the input is received', () => {
    fixture.detectChanges();
    expect(
      testHostFixture.nativeElement.querySelector(
        '.temperature-details__actual-temperature'
      ).innerText
    ).toEqual(' 6°C ');
    expect(
      testHostFixture.nativeElement.querySelector('.temperature-details')
        .innerText
    ).toEqual('As of 02:29 AM 6°C Cloudsair4.12 m/s');
  });
});

@Component({
  selector: `app-host-component`,
  template: ` <app-expansion-title
    [parsedWeatherDetail]="parsedWeatherDetail"
  ></app-expansion-title>`,
})
class TestHostComponent {
  public parsedWeatherDetail: WeatherApiResponse = weatherApiMockResponse;
}

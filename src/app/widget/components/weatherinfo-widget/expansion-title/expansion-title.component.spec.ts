import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpansionTitleComponent} from './expansion-title.component';
import {TemperaturePipe} from '../../../../shared/pipes/temperature.pipe';
import {Component} from '@angular/core';
import {WeatherApiResponse} from '../../../models/weather-api-response';
import {weatherApiMockResponse} from '../../../../shared/mocks/weather-api-mock-response';
import {MaterialModule} from '../../../../material/material.module';
import {SharedModule} from '../../../../shared/shared.module';

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
        TestHostComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    fixture = TestBed.createComponent(ExpansionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: `app-host-component`,
  template: `
    <app-expansion-title
      [parsedWeatherDetail]="parsedWeatherDetail"
    ></app-expansion-title>`,
})
class TestHostComponent {
  public parsedWeatherDetail: WeatherApiResponse = weatherApiMockResponse;
}

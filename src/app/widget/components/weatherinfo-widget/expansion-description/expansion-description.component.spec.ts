import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';

import {ExpansionDescriptionComponent} from './expansion-description.component';
import {WeatherApiResponse} from '../../../models/weather-api-response';
import {weatherApiMockResponse} from '../../../../shared/mocks/weather-api-mock-response';
import {ExpansionAverageTemperatureComponent} from './expansion-average-temperature/expansion-average-temperature.component';
import {MaterialModule} from '../../../../material/material.module';
import {SharedModule} from '../../../../shared/shared.module';
import {ExpansionAdditionalInfoComponent} from './expansion-additional-info/expansion-additional-info.component';

describe('ExpansionDescriptionComponent', () => {
  let component: ExpansionDescriptionComponent;
  let fixture: ComponentFixture<ExpansionDescriptionComponent>;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, SharedModule],
      declarations: [
        ExpansionDescriptionComponent,
        ExpansionAverageTemperatureComponent,
        ExpansionAdditionalInfoComponent,
        TestHostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    fixture = TestBed.createComponent(ExpansionDescriptionComponent);
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
    <app-expansion-description
      [parsedWeatherDetail]="parsedWeatherDetail"
    ></app-expansion-description>`,
})
class TestHostComponent {
  public parsedWeatherDetail: WeatherApiResponse = weatherApiMockResponse;
}

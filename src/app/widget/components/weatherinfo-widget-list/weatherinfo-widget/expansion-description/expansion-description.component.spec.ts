import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ExpansionDescriptionComponent } from './expansion-description.component';
import { ExpansionAverageTemperatureComponent } from './expansion-average-temperature/expansion-average-temperature.component';
import { ExpansionAdditionalInfoComponent } from './expansion-additional-info/expansion-additional-info.component';
import { MaterialModule } from '../../../../../shared/material/material.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { WeatherApiResponse } from '../../../../models/weather-api-response';
import { weatherApiMockResponse } from '../../../../../shared/mocks/weather-api-mock-response';

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
        TestHostComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    fixture = TestBed.createComponent(ExpansionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show values to user once the component is loaded', () => {
    expect(
      testHostFixture.nativeElement.querySelector(
        'app-expansion-additional-info'
      )
    ).toBeDefined();
    expect(
      testHostFixture.nativeElement.querySelector(
        'app-expansion-average-temperature'
      )
    ).toBeDefined();
  });
});

@Component({
  selector: `app-host-component`,
  template: ` <app-expansion-description
    [parsedWeatherDetail]="parsedWeatherDetail"
  ></app-expansion-description>`,
})
class TestHostComponent {
  public parsedWeatherDetail: WeatherApiResponse = weatherApiMockResponse;
}

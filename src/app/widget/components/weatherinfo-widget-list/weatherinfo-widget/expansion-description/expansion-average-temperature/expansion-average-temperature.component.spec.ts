import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ExpansionAverageTemperatureComponent } from './expansion-average-temperature.component';
import { MaterialModule } from '../../../../../../shared/material/material.module';
import { SharedModule } from '../../../../../../shared/shared.module';
import { TemperaturePipe } from '../../../../../../shared/pipes/temperature.pipe';
import { WeatherIconComponent } from '../../../../../../shared/components/weather-icon/weather-icon.component';
import { WeatherApiResponse } from '../../../../../models/weather-api-response';
import { weatherApiMockResponse } from '../../../../../../shared/mocks/weather-api-mock-response';

describe('ExpansionAverageTemperatureComponent', () => {
  let component: ExpansionAverageTemperatureComponent;
  let fixture: ComponentFixture<ExpansionAverageTemperatureComponent>;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, SharedModule],
      declarations: [
        ExpansionAverageTemperatureComponent,
        TemperaturePipe,
        WeatherIconComponent,
        TestHostComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    fixture = TestBed.createComponent(ExpansionAverageTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display values once the input received', () => {
    expect(
      testHostFixture.nativeElement.querySelector('app-weather-icon')
    ).toBeDefined();
    expect(
      testHostFixture.nativeElement.querySelector('p').innerText
    ).toContain(' 7°C / 4°C');
  });
});

@Component({
  selector: `app-host-component`,
  template: ` <app-expansion-average-temperature
    [parsedWeatherDetail]="parsedWeatherDetail"
  ></app-expansion-average-temperature>`,
})
class TestHostComponent {
  public parsedWeatherDetail: WeatherApiResponse = weatherApiMockResponse;
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ExpansionAdditionalInfoComponent } from './expansion-additional-info.component';
import { MaterialModule } from '../../../../../../shared/material/material.module';
import { SharedModule } from '../../../../../../shared/shared.module';
import { TemperaturePipe } from '../../../../../../shared/pipes/temperature.pipe';
import { WeatherApiResponse } from '../../../../../models/weather-api-response';
import { weatherApiMockResponse } from '../../../../../../shared/mocks/weather-api-mock-response';

describe('ExpansionAdditionalInfoComponent', () => {
  let component: ExpansionAdditionalInfoComponent;
  let fixture: ComponentFixture<ExpansionAdditionalInfoComponent>;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, SharedModule],
      declarations: [
        ExpansionAdditionalInfoComponent,
        TemperaturePipe,
        TestHostComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    fixture = TestBed.createComponent(ExpansionAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show values to the user once input received', () => {
    expect(
      testHostFixture.nativeElement.querySelector('.additional-info p span')
        .innerHTML
    ).toEqual('3°C');
  });
});

@Component({
  selector: `app-host-component`,
  template: ` <app-expansion-additional-info
    [parsedWeatherDetail]="parsedWeatherDetail"
  ></app-expansion-additional-info>`,
})
class TestHostComponent {
  public parsedWeatherDetail: WeatherApiResponse = weatherApiMockResponse;
}

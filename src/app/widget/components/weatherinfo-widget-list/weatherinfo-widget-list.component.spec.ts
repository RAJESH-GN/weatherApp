import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { WeatherinfoWidgetListComponent } from './weatherinfo-widget-list.component';
import { WeatherDetailsService } from '../../services/weather-details.service';
import {weatherApiMockResponse} from '../../../shared/mocks/weather-api-mock-response';
import {SharedModule} from '../../../shared/shared.module';
import {MaterialModule} from '../../../material/material.module';

describe('WeatherinfoWidgetListComponent', () => {
  let component: WeatherinfoWidgetListComponent;
  let fixture: ComponentFixture<WeatherinfoWidgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MaterialModule, SharedModule],
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
    const weatherDetailsService = TestBed.inject(WeatherDetailsService);
    spyOn(weatherDetailsService, 'getWeatherInfoWithCity').and.returnValue(
      of(weatherApiMockResponse)
    );
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(component.parsedWeatherDetails.length).toEqual(5);
    expect(component.parsedWeatherDetails[0]).toEqual(weatherApiMockResponse);
    expect(
      element.querySelectorAll('.weather-info-list app-weatherinfo-widget')
    ).toBeDefined();
  });
});

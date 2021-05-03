import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconComponent } from './weather-icon.component';
import {Component} from '@angular/core';

describe('WeatherIconComponent', () => {
  let component: WeatherIconComponent;
  let fixture: ComponentFixture<WeatherIconComponent>;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherIconComponent, TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    fixture = TestBed.createComponent(WeatherIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a instance of weather-Icon', () => {
    expect(component).toBeTruthy();
  });

  it('should create a instance of weather-Icon when passed with input params', () => {
    expect(testHostFixture.nativeElement.querySelector('img')).toBeDefined();
  });
});

@Component({
  selector: `app-host-component`,
  template: `
    <app-weather-icon imageSize="small" [iconName]="iconName" [iconSize]="iconSize"></app-weather-icon>`,
})
class TestHostComponent {
  iconName = 'clouds';
  iconSize = 2;
}

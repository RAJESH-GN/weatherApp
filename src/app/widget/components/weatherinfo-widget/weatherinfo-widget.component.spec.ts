import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherinfoWidgetComponent } from './weatherinfo-widget.component';

describe('WeatherinfoWidgetComponent', () => {
  let component: WeatherinfoWidgetComponent;
  let fixture: ComponentFixture<WeatherinfoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherinfoWidgetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherinfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

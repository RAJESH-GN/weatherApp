import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherinfoWidgetListComponent } from './weatherinfo-widget-list.component';

describe('WeatherinfoWidgetListComponent', () => {
  let component: WeatherinfoWidgetListComponent;
  let fixture: ComponentFixture<WeatherinfoWidgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherinfoWidgetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherinfoWidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

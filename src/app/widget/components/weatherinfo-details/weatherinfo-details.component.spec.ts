import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherinfoDetailsComponent } from './weatherinfo-details.component';

describe('WeatherinfoDetailsComponent', () => {
  let component: WeatherinfoDetailsComponent;
  let fixture: ComponentFixture<WeatherinfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherinfoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherinfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

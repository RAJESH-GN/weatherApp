import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionAverageTemperatureComponent } from './expansion-average-temperature.component';

describe('ExpansionAverageTemperatureComponent', () => {
  let component: ExpansionAverageTemperatureComponent;
  let fixture: ComponentFixture<ExpansionAverageTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionAverageTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionAverageTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

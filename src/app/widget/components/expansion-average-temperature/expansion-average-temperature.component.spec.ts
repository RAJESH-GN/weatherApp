import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionAverageTemperatureComponent } from './expansion-average-temperature.component';
import {TemperaturePipe} from '../../../shared/temperature.pipe';

describe('ExpansionAverageTemperatureComponent', () => {
  let component: ExpansionAverageTemperatureComponent;
  let fixture: ComponentFixture<ExpansionAverageTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionAverageTemperatureComponent, TemperaturePipe ]
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

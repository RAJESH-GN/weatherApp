import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionAdditionalInfoComponent } from './expansion-additional-info.component';
import {TemperaturePipe} from '../../../../shared/temperature.pipe';

describe('ExpansionAdditionalInfoComponent', () => {
  let component: ExpansionAdditionalInfoComponent;
  let fixture: ComponentFixture<ExpansionAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionAdditionalInfoComponent, TemperaturePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

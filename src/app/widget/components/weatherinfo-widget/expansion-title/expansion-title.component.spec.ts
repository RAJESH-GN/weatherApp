import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionTitleComponent } from './expansion-title.component';
import {TemperaturePipe} from '../../../shared/temperature.pipe';

describe('ExpansionTitleComponent', () => {
  let component: ExpansionTitleComponent;
  let fixture: ComponentFixture<ExpansionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionTitleComponent, TemperaturePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

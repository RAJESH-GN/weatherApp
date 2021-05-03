import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionAdditionalInfoComponent } from './expansion-additional-info.component';

describe('ExpansionAdditionalInfoComponent', () => {
  let component: ExpansionAdditionalInfoComponent;
  let fixture: ComponentFixture<ExpansionAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionAdditionalInfoComponent ]
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

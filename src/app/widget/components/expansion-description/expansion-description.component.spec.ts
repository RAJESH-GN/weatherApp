import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionDescriptionComponent } from './expansion-description.component';

describe('ExpansionDescriptionComponent', () => {
  let component: ExpansionDescriptionComponent;
  let fixture: ComponentFixture<ExpansionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

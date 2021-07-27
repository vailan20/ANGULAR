import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAssignmentComponent } from './car-assignment.component';

describe('CarAssignmentComponent', () => {
  let component: CarAssignmentComponent;
  let fixture: ComponentFixture<CarAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

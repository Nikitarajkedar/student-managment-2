import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarchStudentComponent } from './sarch-student.component';

describe('SarchStudentComponent', () => {
  let component: SarchStudentComponent;
  let fixture: ComponentFixture<SarchStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SarchStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarchStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

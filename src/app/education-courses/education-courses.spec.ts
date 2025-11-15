import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCourses } from './education-courses';

describe('EducationCourses', () => {
  let component: EducationCourses;
  let fixture: ComponentFixture<EducationCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

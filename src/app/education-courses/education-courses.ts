import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-education-courses',
  templateUrl: './education-courses.html',
  styleUrls: ['./education-courses.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationCourses {}

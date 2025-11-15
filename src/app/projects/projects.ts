import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {}

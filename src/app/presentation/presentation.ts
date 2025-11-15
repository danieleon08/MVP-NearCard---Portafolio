import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.html',
  styleUrls: ['./presentation.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Presentation {}

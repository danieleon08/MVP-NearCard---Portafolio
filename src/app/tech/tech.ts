import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.html',
  styleUrls: ['./tech.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tech {}

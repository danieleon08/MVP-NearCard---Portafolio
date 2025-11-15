import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.html',
  styleUrls: ['./aboutme.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMe {
  public showMore = signal(false);

  public toggleShowMore(): void {
    this.showMore.set(!this.showMore());
  }
}

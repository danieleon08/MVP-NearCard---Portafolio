import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  public isMenuOpen = signal(false);

  public toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}

import { 
  ChangeDetectionStrategy, 
  Component, 
  signal, 
  OnInit, 
  AfterViewInit 
} from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.html',
  styleUrls: ['./aboutme.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMe implements OnInit, AfterViewInit {

  public showMore = signal(false);

  // Nubecitas dinámicas
  public skills = [
    'International Affairs',
    'Geopolitics',
    'Research & Analysis',
    'Column Writing',
    'Policy Development',
    'Global Security',
    'Human Rights',
    'Diplomacy',
    'Critical Thinking'
  ];

  ngOnInit(): void {}

  // Efecto Scroll Reveal
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.section-reveal');
    elements.forEach(el => observer.observe(el));
  }

  public toggleShowMore(): void {
    this.showMore.set(!this.showMore());
  }
}

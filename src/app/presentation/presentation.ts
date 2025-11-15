import { ChangeDetectionStrategy, Component, ElementRef, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.html',
  styleUrls: ['./presentation.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Presentation implements OnInit, OnDestroy {
  @ViewChild('presentationSection', { static: true }) presentationSection!: ElementRef;
  isVisible = false;
  private observer?: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Usar setTimeout para asegurar que el DOM esté listo
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 0);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.cdr.markForCheck();
        } else {
          // Opcional: resetear la animación cuando sale del viewport
          // this.isVisible = false;
          // this.cdr.markForCheck();
        }
      });
    }, options);

    // Observar el elemento de la sección usando ViewChild
    if (this.presentationSection?.nativeElement) {
      this.observer.observe(this.presentationSection.nativeElement);
    }
  }
}

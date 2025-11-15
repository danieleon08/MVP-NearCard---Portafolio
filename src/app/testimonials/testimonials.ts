import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Testimonial } from './testimonial';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  public testimonials = signal<Testimonial[]>([
    {
      name: 'John Doe',
      company: 'Acme Inc.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.'
    },
    {
      name: 'Jane Smith',
      company: 'Globex Corp.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.'
    },
    {
      name: 'Peter Jones',
      company: 'Stark Industries',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.'
    }
  ]);
}

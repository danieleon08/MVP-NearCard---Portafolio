import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Courses {
  readonly courses = signal([
    {
      title: 'Emprendedor',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      completion: '100%',
      certificate: 'Disponible',
      modality: 'Online',
    },
    {
      title: 'Prompting Responsable',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      completion: '100%',
      certificate: 'Disponible',
      modality: 'Online',
    },
    {
      title: 'Ingles B1',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      completion: '100%',
      certificate: 'Disponible',
      modality: 'Online',
    },
    {
      title: 'Transformación Digital',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      completion: '100%',
      certificate: 'Disponible',
      modality: 'Online',
    },
  ]);
}

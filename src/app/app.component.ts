import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from './header/header';
import { Presentation } from './presentation/presentation';
import { AboutMe } from './aboutme/aboutme';
import { Tech } from './tech/tech';
import { Projects } from './projects/projects';
import { Courses } from './courses/courses';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Header,
    Presentation,
    AboutMe,
    Tech,
    Projects,
    Courses,
    Contact,
    Footer,
  ]
})
export class AppComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../header/header';
import { Presentation } from '../presentation/presentation';
import { AboutMe } from '../aboutme/aboutme';
import { Achievements } from '../achievements/achievements';
import { EducationCourses } from '../education-courses/education-courses';
import { Projects } from '../projects/projects';
import { Tech } from '../tech/tech';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-portfolio-main',
  imports: [
    Header,
    Presentation,
    AboutMe,
    Achievements,
    EducationCourses,
    Projects,
    Tech,
    Contact,
    Footer,
  ],
  templateUrl: './portfolio-main.html',
  styleUrl: './portfolio-main.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioMain {}
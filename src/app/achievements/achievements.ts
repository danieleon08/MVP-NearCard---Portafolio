import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Achievements {
  public achievements = [
    {
      title: '10+ Projects Completed',
      description: 'Successfully delivered over 10 projects, ranging from small websites to large-scale web applications.',
    },
    {
      title: 'Certified Angular Developer',
      description: 'Recognized as a certified Angular developer, demonstrating expertise in the latest framework features.',
    },
    {
      title: 'Open Source Contributor',
      description: 'Actively contributed to several open-source projects, collaborating with developers from around the world.',
    },
  ];
}

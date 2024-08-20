import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ResumeService } from 'src/app/core/services/resume.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  resumeService = inject(ResumeService);
  resume = this.resumeService.resume;
  baseUrl = environment.apiBaseUrl;

  constructor(private title: Title) {
    this.title.setTitle('Ehsan Sahrestani | Resume');
  }

  skills = [
    'Html/Css',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Oop',
    'Ngrx',
    'Tailwind Css',
    'Prime Ng',
    'Angular Material',
    'Rxjs',
  ];
}

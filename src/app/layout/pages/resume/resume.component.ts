import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
skills =[
  'Html/Css',
  'Angular',
  'TypeScript',
  'JavaScript',
  'Oop',
  'Ngrx',
  'Tailwind Css',
  'Prime Ng',
  'Angular Material',
  'Rxjs'
]
}

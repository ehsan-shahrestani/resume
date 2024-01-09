import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

constructor(private title :Title){
  this.title.setTitle('Ehsan Sahrestani | Resume')
}

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

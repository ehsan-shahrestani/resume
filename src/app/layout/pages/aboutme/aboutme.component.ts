import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { ResumeService } from 'src/app/core/services/resume.service';
import { effect } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent {
  resumeService = inject(ResumeService);
  resume = this.resumeService.resume;
  constructor(private title: Title) {
    effect(() => {
      this.title.setTitle(
        `${this.resume()?.attributes.aboutMe.fullName} | About Me`
      );
    });
  }
  donwloadCv() {
    let link = document.createElement('a');
    link.download = 'Ehsan_cv.pdf';
    link.href = 'assets/ehsan-shahrestani-resume.pdf';
    link.click();
  }
}

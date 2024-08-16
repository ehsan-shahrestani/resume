import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { ApiService } from './../core/services/api.service';
import { ResumeService } from './../core/services/resume.service';
import { fadeInOutAnimation } from '../shared/slide.animation';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeInOutAnimation],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
})
export class LayoutComponent implements OnInit {
  constructor(private contexts: ChildrenOutletContexts) {}

  apiService = inject(ApiService);
  resumeService = inject(ResumeService);

  ngOnInit(): void {
    this.apiService.getResume().subscribe({
      next: (out) => {
        this.resumeService.resume.set(out.data);
      },
    });
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}

import { Component, HostBinding, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimation } from 'src/app/shared/slide.animation';

@Component({
  selector: 'app-dark-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
  animations: [fadeInOutAnimation],
})
export class DarkModeComponent {
  isdarkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );
  constructor() {
    effect(() => {

      window.localStorage.setItem(
        'darkMode',
        JSON.stringify(this.isdarkMode())
      );
      // Get the HTML or Body element
      const htmlElement = document.documentElement || document.body;
    

      // Add or remove the 'dark' class based on the dark mode
      if (this.isdarkMode()) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    });
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {
  constructor(private title :Title){
    this.title.setTitle('Ehsan Sahrestani | About Me')
  }
  donwloadCv(){
    let link = document.createElement('a');
    link.download ="Ehsan_cv.pdf";
    link.href ='assets/Ali-Safari-Resume.pdf';
    link.click();
    window.open('Ehsan_cv.pdf')
  }
}

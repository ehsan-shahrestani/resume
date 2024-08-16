import { Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, RouterOutlet } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { fadeInOutAnimation } from '../shared/slide.animation';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    animations: [fadeInOutAnimation],
    standalone: true,
    imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class LayoutComponent {
 
  constructor(private contexts: ChildrenOutletContexts){
    
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

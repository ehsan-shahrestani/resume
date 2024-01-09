import { Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, RouterOutlet } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { fadeInOutAnimation } from '../shared/slide.animation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations:[fadeInOutAnimation]
})
export class LayoutComponent {
 
  constructor(private contexts: ChildrenOutletContexts){
    
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

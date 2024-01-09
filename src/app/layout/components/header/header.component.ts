import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DarkModeComponent } from '../dark-mode/dark-mode.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , RouterModule,DarkModeComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
  headerMenu:{route:string,lable:string}[] =[
    {route:'aboutMe',lable:'About me'},
    {route:'resume',lable:'Resume'},
    {route:'blog',lable:'Blog'},
    {route:'contact',lable:'Contact'},
  ] 
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , RouterModule],
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

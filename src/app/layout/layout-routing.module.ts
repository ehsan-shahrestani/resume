import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'aboutMe',
    pathMatch:'prefix'
  },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'resume', loadComponent: () => import('./pages/resume/resume.component').then(c => c.ResumeComponent) },
      { path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(c => c.BlogComponent) },
      { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent) },
      { path: 'aboutMe', loadComponent: () => import('./pages/aboutme/aboutme.component').then(c => c.AboutmeComponent) },
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard-routing-module').then(m => m.DashboardRoutingModule) },
  { path: 'skills', loadChildren: () => import('./modules/skills/skills-routing.module').then(m => m.SkillsRoutingModule) },
  { path: 'projects', loadChildren: () => import('./modules/projects/projects-routing-module').then(m => m.ProjectsRoutingModule) },
  { path: 'certifications', loadChildren: () => import('./modules/certifications/certifications-routing-module').then(m => m.CertificationsRoutingModule) },
  { path: 'goals', loadChildren: () => import('./modules/goals/goals-routing-module').then(m => m.GoalsRoutingModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile-routing-module').then(m => m.ProfileRoutingModule) },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

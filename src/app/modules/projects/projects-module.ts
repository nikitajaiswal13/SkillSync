import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing-module';
import { ProjectsPage } from './pages/projects-page/projects-page';


@NgModule({
  declarations: [
    ProjectsPage
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing-module';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ProjectsPage
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class ProjectsModule { }

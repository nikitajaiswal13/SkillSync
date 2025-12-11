import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing-module';
import { SkillsPage } from './pages/skills-page/skills-page';


@NgModule({
  declarations: [
    SkillsPage
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }

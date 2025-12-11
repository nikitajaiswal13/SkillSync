import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing-module';
import { GoalsPage } from './pages/goals-page/goals-page';


@NgModule({
  declarations: [
    GoalsPage
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule
  ]
})
export class GoalsModule { }

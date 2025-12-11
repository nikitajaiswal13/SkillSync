import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { MainDashboard } from './pages/main-dashboard/main-dashboard';


@NgModule({
  declarations: [
    MainDashboard
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

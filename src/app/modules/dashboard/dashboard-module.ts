// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { DashboardRoutingModule } from './dashboard-routing.module';
// import { MainDashboard } from './pages/main-dashboard/main-dashboard';

// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';


// @NgModule({
//   declarations: [
//     MainDashboard
//   ],
//   imports: [
//     CommonModule,          
//     DashboardRoutingModule,
//     MatCardModule,        
//     MatIconModule,
//     NgChartsModule
    
            
//   ]
// })
// export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { MainDashboard } from './pages/main-dashboard/main-dashboard';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MainDashboard
  ],
  imports: [
    CommonModule,          
    DashboardRoutingModule,
    MatCardModule,        
    MatIconModule,
  ]
})
export class DashboardModule { }

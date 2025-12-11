import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing-module';
import { CertificationsPage } from './pages/certifications-page/certifications-page';


@NgModule({
  declarations: [
    CertificationsPage
  ],
  imports: [
    CommonModule,
    CertificationsRoutingModule
  ]
})
export class CertificationsModule { }

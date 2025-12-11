import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing-module';
import { CertificationsPage } from './pages/certifications-page/certifications-page';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CertificationsPage
  ],
  imports: [
    CommonModule,
    CertificationsRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class CertificationsModule { }

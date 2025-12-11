import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsPage } from './pages/certifications-page/certifications-page';

const routes: Routes = [
  {path : '' , component : CertificationsPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationsRoutingModule { }

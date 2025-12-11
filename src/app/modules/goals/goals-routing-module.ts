import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsPage } from './pages/goals-page/goals-page';

const routes: Routes = [
  {path : '' , component : GoalsPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }

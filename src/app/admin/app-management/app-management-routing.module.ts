import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppManagementComponent } from './app-management.component';

const routes: Routes = [
  {path:'',component:AppManagementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppManagementRoutingModule { }

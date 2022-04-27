import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';
import { AppManagementComponent } from './app-management.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:'',component:AppManagementComponent},
  {path:'app-list',component:AppListComponent},
  {path:'review',component:ReviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppManagementRoutingModule { }

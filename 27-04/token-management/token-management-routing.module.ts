import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenManagementComponent } from './token-management.component';

const routes: Routes = [
  {
    path: '',
    component:TokenManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenManagementRoutingModule { }

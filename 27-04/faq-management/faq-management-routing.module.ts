import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqListComponent } from './faq-list/faq-list.component';
import { FaqManagementComponent } from './faq-management.component';

const routes: Routes = [
  {
    path: '',
    component:FaqManagementComponent,
    
  },
  {
    path:'faq-list',
    component:FaqListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqManagementRoutingModule { }

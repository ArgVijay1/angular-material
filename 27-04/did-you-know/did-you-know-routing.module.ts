import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DidYouKnowComponent } from './did-you-know.component';

const routes: Routes = [
  {
    path:'',
    component:DidYouKnowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DidYouKnowRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DidYouKnowRoutingModule } from './did-you-know-routing.module';
import { DidYouKnowComponent } from './did-you-know.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { DidYouKnowListComponent } from './did-you-know-list/did-you-know-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { EditDidYouKnowComponent } from './edit-did-you-know/edit-did-you-know.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DidYouKnowComponent,
    DidYouKnowListComponent,
    EditDidYouKnowComponent
  ],
  imports: [
    CommonModule,
    DidYouKnowRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatSortModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
  ],
  exports:[
    CommonModule,
    DidYouKnowRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class DidYouKnowModule { }

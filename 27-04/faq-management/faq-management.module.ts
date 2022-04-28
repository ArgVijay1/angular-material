import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqManagementRoutingModule } from './faq-management-routing.module';
import { FaqManagementComponent } from './faq-management.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteFaqComponent } from './delete-faq/delete-faq.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFaqComponent } from './edit-faq/edit-faq.component';


@NgModule({
  declarations: [
    FaqManagementComponent,
    DeleteFaqComponent,
    EditFaqComponent,
    FaqListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FaqManagementRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatSortModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
  ],
})
export class FaqManagementModule { }

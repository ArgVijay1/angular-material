import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenManagementRoutingModule } from './token-management-routing.module';
import { TokenManagementComponent } from './token-management.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { EditTokenComponent } from './edit-token/edit-token.component';
import { MatInputModule } from '@angular/material/input';
import { CreateTokenComponent } from './create-token/create-token.component';
import { TwoDecimalNumberDirective } from './create-token/two-decimal-number.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    TokenManagementComponent,
    EditTokenComponent,
    CreateTokenComponent,
    TwoDecimalNumberDirective
  ],
  imports: [
    CommonModule,
    TokenManagementRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    TokenManagementRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TokenManagementModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppManagementRoutingModule } from './app-management-routing.module';
import { AppInfoFormComponent } from './app-info-form/app-info-form.component';
import { DeleteAppComponent } from './delete-app/delete-app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AppManagementComponent } from './app-management.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ AppManagementComponent, AppInfoFormComponent, DeleteAppComponent,EditAppComponent],
  imports: [
    CommonModule,
    AppManagementRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class AppManagementModule { }

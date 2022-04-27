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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AppListComponent } from './app-list/app-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [ AppManagementComponent, AppInfoFormComponent, DeleteAppComponent,EditAppComponent, AppListComponent, ReviewRatingComponent, ReviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppManagementRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatSortModule,
    MatTooltipModule,

    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
  ]
})
export class AppManagementModule { }

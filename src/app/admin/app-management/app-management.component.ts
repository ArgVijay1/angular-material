import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AppInfoFormComponent } from './app-info-form/app-info-form.component';
import { AppManagementService } from './app-management.service';
import { App } from './App.model';
import { DeleteAppComponent } from './delete-app/delete-app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
 
@Component({
  selector: 'app-app-management',
  templateUrl: './app-management.component.html',
  styleUrls: ['./app-management.component.css']
})
export class AppManagementComponent implements OnInit {
  ngOnInit(): void {  
  
  }

  constructor(private dialog:MatDialog){}

      openEditDialog(): void {
        const dialogRef = this.dialog.open(EditAppComponent, {
        /*  data: { 
            id: this.id, clientData: this.rows 
          }*/
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The delete was closed');
          //this.rows = result;
        });
      }
}

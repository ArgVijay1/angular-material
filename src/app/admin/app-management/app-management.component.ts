import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AppInfoFormComponent } from './app-info-form/app-info-form.component';
import { DeleteAppComponent } from './delete-app/delete-app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
export interface dynElement {
  ID: string,
  name: string,
  description:string,
  category:string,
  token:string;
  rating:number;
  downloads:string;
  playstore_link:string;
  istore_link:string;
 }
 const ELEMENT_DATA: dynElement[] = [
   {
    ID: "1",
     name: "App1",
     description: "money making app",
     category:'enter',
     token:'212212',
     rating:4,
     downloads:'3434',
     playstore_link:'www.playstore.com',
     istore_link:'www.istore.com'
   },
   {
     ID: '2',
     name: 'App2',
     description:'online gaming app',
     category:'enter',
     token:'212212',
     rating:4,
     downloads:'3434',
     playstore_link:'www.playstore.com',
     istore_link:'www.istore.com'},
   {
    ID: '3',
     name: 'App3',
     description:'bitocoin app',
     category:'enter',
     token:'212212',
     rating:4,
     downloads:'3434',
     playstore_link:'www.playstore.com',
     istore_link:'www.istore.com'
  },
   {
    ID: "4",
     name: "App4",
     description: "utility app",
     category:'enter',
     token:'212212',
     rating:4,
     downloads:'3434',
     playstore_link:'www.playstore.com',
     istore_link:'www.istore.com'
   },
 ]
@Component({
  selector: 'app-app-management',
  templateUrl: './app-management.component.html',
  styleUrls: ['./app-management.component.css']
})
export class AppManagementComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'name', 'description', 'token','rating','downloads','playstore_link','istore_link','action'];
  dataSource = [...ELEMENT_DATA]; // you can pass your data from backend her
  
  constructor(private dialog:MatDialog) { }

  @ViewChild(MatTable)
  table!: MatTable<dynElement>;
  ngOnInit(): void {
  }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(AppInfoFormComponent, {
    
      //data: row
    
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The edit dialog was closed');
    //this.rows = result;
  });
}



  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditAppComponent, {
    //data: row
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The edit dialog was closed');
    //this.rows = result;
  });
 }

openDeleteDialog(): void {
  const dialogRef = this.dialog.open(DeleteAppComponent, {
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

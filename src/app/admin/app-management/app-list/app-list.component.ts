import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppInfoFormComponent } from '../app-info-form/app-info-form.component';
import { AppManagementService } from '../app-management.service';
import { App } from '../App.model';
import { DeleteAppComponent } from '../delete-app/delete-app.component';
import { EditAppComponent } from '../edit-app/edit-app.component';
export interface Element {
    id:number;
    name: string;
    description:string;
    token:number;
    rating:number;
    downloads:number;
    playstoreLink:string;
    appstoreLink:string;
}

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  displayedColumns: string[] = ['select','id', 'name', 'description', 'token','rating','downloads','playstoreLink','appstoreLink','action'];
 // dataSource:MatTableDataSource<any>=new MatTableDataSource<any>();
  dataSource = new MatTableDataSource<Element>();

  items: any;
  constructor(private dialog:MatDialog,private appService:AppManagementService) { }
  appData:any=[];
  employee:any=[];
  selection = new SelectionModel<App>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ngOnInit(): void {  
    this.appService.getProducts().subscribe((res: any) => {
      //res.splice(0, 1);
      //res.shift();
      res.slice(2,3,4,5,6,7)
      console.log(res);
      this.dataSource.data = res;
      //Object.assign(this.dataSource,res);
    });
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



  openEditDialog(element: App): void {
    const dialogRef = this.dialog.open(EditAppComponent, {
    data: element
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

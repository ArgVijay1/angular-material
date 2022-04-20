import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTokenComponent } from './create-token/create-token.component';
import { EditTokenComponent } from './edit-token/edit-token.component';
import { Token } from './token.model';
const ELEMENT_DATA:Token[]=[
  {
    id:1,
    rate:12,
    date:new Date()
  },
  {
    id:2,
    rate:12,
    date:new Date()
   
  },
  {
    id:3,
   rate:15,
   date:new Date()
  }
]

@Component({
  selector: 'app-token-management',
  templateUrl: './token-management.component.html',
  styleUrls: ['./token-management.component.scss']
})
export class TokenManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'rate','date',"action"];
  dataSource = [...ELEMENT_DATA];
  date: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;
  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  }
  constructor(private dialog:MatDialog) { }

  openEditDialog(){
    const dialogRef = this.dialog.open(EditTokenComponent, {
      //data: row
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The edit dialog was closed');
      //this.rows = result;
    });
  }

  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateTokenComponent, {
      //data: row
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The delete dialog was closed');
      //this.rows = result;
    });
  }
}

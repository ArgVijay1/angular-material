import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppManagementService } from '../../app-management/app-management.service';
import { ReviewComponent } from '../../app-management/review/review.component';
import { DidYouKnow } from '../did-you-know.model';
import { EditDidYouKnowComponent } from '../edit-did-you-know/edit-did-you-know.component';

@Component({
  selector: 'app-did-you-know-list',
  templateUrl: './did-you-know-list.component.html',
  styleUrls: ['./did-you-know-list.component.scss']
})
export class DidYouKnowListComponent implements OnInit {

  dataSource = new MatTableDataSource<Element>();
  displayedColumns: string[] = ['id', 'title','action'];
  constructor(private appService:AppManagementService,private dialog:MatDialog) { }
  selection=new SelectionModel<DidYouKnow>(true,[]);

  ngOnInit(): void {
    this.appService.getDidYouKnow().subscribe((res: any) => {
      //res.splice(0, 1);
      //res.shift();
      res.slice(2,3,4,5,6,7)
      console.log(res);
      this.dataSource.data = res;
      //Object.assign(this.dataSource,res);
    });
  }


  openEditDialog(element:DidYouKnow): void {
    const dialogRef = this.dialog.open(EditDidYouKnowComponent, {
   // data: element
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The edit dialog was closed');
    //this.rows = result;
  });
 }

}

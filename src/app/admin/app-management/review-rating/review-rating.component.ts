import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppManagementService } from '../app-management.service';
import { App } from '../App.model';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.scss']
})
export class ReviewRatingComponent implements OnInit {
  appList=new FormControl();

  toppingList: string[] = ['id1','id2','id3','id4'];

  displayedColumns: string[] = ['id', 'name','rating','review'];
  // dataSource:MatTableDataSource<any>=new MatTableDataSource<any>();
   dataSource = new MatTableDataSource<Element>();
 
   items: any;
   constructor(private dialog:MatDialog,private appService:AppManagementService) { }
   appData:any=[];
   employee:any=[];
   selection = new SelectionModel<App>(true, []);
  ngOnInit(): void {
      this.appService.getProducts().subscribe((res: any) => {
      //res.splice(0, 1);
      //res.shift();
     // res.slice(2,3,4,5,6,7)
      console.log(res);
      this.dataSource.data = res;
      //Object.assign(this.dataSource,res);
    });
  }

  openReviewDialog(){
    const dialogRef = this.dialog.open(ReviewComponent, {
  
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The edit dialog was closed');
    //this.rows = result;
  });    
  }

}

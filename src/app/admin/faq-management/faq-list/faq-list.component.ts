import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppManagementService } from '../../app-management/app-management.service';
import { ReviewComponent } from '../../app-management/review/review.component';
import { DeleteFaqComponent } from '../delete-faq/delete-faq.component';
import { EditFaqComponent } from '../edit-faq/edit-faq.component';
import { Faq } from '../faq.model';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {

  dataSource = new MatTableDataSource<Element>();
  displayedColumns: string[] = ['id', 'title','description','action'];
  constructor(private appService:AppManagementService,private dialog:MatDialog) { }
  selection=new SelectionModel<Faq>(true,[]);

  ngOnInit(): void {
    this.appService.getFaqs().subscribe((res: any) => {
      //res.splice(0, 1);
      //res.shift();
      res.slice(2,3,4,5,6,7)
      console.log(res);
      this.dataSource.data = res;
      //Object.assign(this.dataSource,res);
    });
  }


  openEditDialog(element:Faq): void {
    const dialogRef = this.dialog.open(EditFaqComponent, {
   // data: element
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The edit dialog was closed');
    //this.rows = result;
  });
 }

 openDeleteDialog(): void {
  const dialogRef = this.dialog.open(DeleteFaqComponent, {
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

import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppManagementService } from '../app-management/app-management.service';
import { ReviewComponent } from '../app-management/review/review.component';
import { DidYouKnow } from './did-you-know.model';

@Component({
  selector: 'app-did-you-know',
  templateUrl: './did-you-know.component.html',
  styleUrls: ['./did-you-know.component.scss']
})
export class DidYouKnowComponent implements OnInit {
  ngOnInit(): void {
   
  }

  /*openDeleteDialog(): void {
  const dialogRef = this.dialog.open(DeleteFaqComponent, {
   data: { 
      id: this.id, clientData: this.rows 
     }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The delete was closed');
    //this.rows = result;
  });
}*/

}

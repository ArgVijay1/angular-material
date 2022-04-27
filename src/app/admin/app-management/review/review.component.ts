import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  appList=new FormControl();

  toppingList: string[] = ['id1','id2','id3','id4'];

  displayedColumns: string[] = ['id', 'name','rating','review'];
  // dataSource:MatTableDataSource<any>=new MatTableDataSource<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}

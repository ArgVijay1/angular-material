import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-token',
  templateUrl: './edit-token.component.html',
  styleUrls: ['./edit-token.component.scss']
})
export class EditTokenComponent implements OnInit {
  date: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;
  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  }
  constructor(public dialogRef: MatDialogRef<EditTokenComponent>,) { }

  onNoClick(): void {

    this.dialogRef.close();
  }

}

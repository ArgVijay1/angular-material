import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.scss']
})
export class CreateTokenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateTokenComponent>) { }
  
  InputValue:any;
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}

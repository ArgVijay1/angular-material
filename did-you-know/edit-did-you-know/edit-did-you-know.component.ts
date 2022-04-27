import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppManagementService } from '../../app-management/app-management.service';
import { DidYouKnow } from '../did-you-know.model';

@Component({
  selector: 'app-edit-did-you-know',
  templateUrl: './edit-did-you-know.component.html',
  styleUrls: ['./edit-did-you-know.component.scss']
})
export class EditDidYouKnowComponent implements OnInit {

  app:any={
    id:undefined,
    title:'',
    description:'',
  }
  constructor(private appService:AppManagementService,
    private router:ActivatedRoute,
    public dialogRef: MatDialogRef<EditDidYouKnowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DidYouKnow,private titleService:Title) {
      this.titleService.setTitle("Edit | Did You Know");
     }
  ngOnInit(): void {
    this.appService.getSingleFaq(this.data.id).subscribe(
      (data=>{
        this.app=data;
        console.log(this.app)
      })
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveData(){
    //console.log(this.userForm.value);
  }

}

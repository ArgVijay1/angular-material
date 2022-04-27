import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppManagementService } from '../../app-management/app-management.service';
import { Faq } from '../faq.model';

@Component({
  selector: 'app-edit-faq',
  templateUrl: './edit-faq.component.html',
  styleUrls: ['./edit-faq.component.scss']
})
export class EditFaqComponent implements OnInit {
  app:any={
    id:undefined,
    title:'',
    description:'',
  }
  public dialogRef: MatDialogRef<EditFaqComponent>
  constructor(private appService:AppManagementService,
    private router:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: Faq,private titleService:Title) {
      this.titleService.setTitle("Edit | FAQ Mgmt");
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
    console.log("onNoCLick");
    this.dialogRef.close();
  }
}

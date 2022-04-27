import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  constructor(private appService:AppManagementService,
    private router:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: Faq) { }
  ngOnInit(): void {
    this.appService.getSingleFaq(this.data.id).subscribe(
      (data=>{
        this.app=data;
        console.log(this.app)
      })
    )
  }
}

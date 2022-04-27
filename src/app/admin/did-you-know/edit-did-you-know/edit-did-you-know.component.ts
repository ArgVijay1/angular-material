import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public data: DidYouKnow) { }
  ngOnInit(): void {
    this.appService.getSingleFaq(this.data.id).subscribe(
      (data=>{
        this.app=data;
        console.log(this.app)
      })
    )
  }

}

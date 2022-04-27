import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AppManagementService } from '../app-management.service';
import { App } from '../App.model';
import { EditModel } from './edit-model';
@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent implements OnInit {
  app:any={
    id:undefined,
    name:'',
    descripton:'',
    token:null,
    downloads:null,
    rating:null,
    playstoreLink:'',
    appstoreLink:''
  };
  postForm=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl(),
    token:new FormControl(''),
    downloads:new FormControl(),
    playstoreLink:new FormControl(),
    appstoreLink:new FormControl()
  })
  constructor(private appService:AppManagementService,
    private router:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: EditModel) { }
  ngOnInit(): void {
    this.appService.getSingleApp(this.data.id).subscribe(
      (data=>{
        this.app=data;
        console.log(this.app)
      })
    )
  }
}

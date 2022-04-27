import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AppManagementService } from '../app-management/app-management.service';
import { App } from '../app-management/App.model';
import { ReviewComponent } from '../app-management/review/review.component';
import { DeleteFaqComponent } from './delete-faq/delete-faq.component';
import { Faq } from './faq.model';

@Component({
  selector: 'app-faq-management',
  templateUrl: './faq-management.component.html',
  styleUrls: ['./faq-management.component.scss']
})
export class FaqManagementComponent implements OnInit {
  constructor (private titleService:Title) {
    this.titleService.setTitle("FAQ Management");
   }
  ngOnInit(): void {
   
  }
  
}

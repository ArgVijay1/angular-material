import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import {MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [   
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    FaqRoutingModule,
    
  ]
})
export class FaqModule { }

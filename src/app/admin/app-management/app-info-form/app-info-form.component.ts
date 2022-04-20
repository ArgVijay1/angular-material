import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app-info-form',
  templateUrl: './app-info-form.component.html',
  styleUrls: ['./app-info-form.component.css']
})
export class AppInfoFormComponent implements OnInit {
  appInfoForm!:FormGroup;
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  projectForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    appstore_link:new FormControl(''),
    playstore_link:new FormControl(''),

  });

}

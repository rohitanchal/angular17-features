import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-forms-demo',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.css'
})

export class FormsDemoComponent {


  userForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl('')
  });

  submit() {
    console.log(this.userForm.value);
  };


}

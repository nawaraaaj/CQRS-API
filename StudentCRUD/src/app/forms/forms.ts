import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
  StudentForm = new FormGroup(
    {
      name: new FormControl(""),
      age: new FormControl(""),
      address: new FormControl("")
  });
onSubmit() {
  console.log(this.StudentForm.value);
}
}

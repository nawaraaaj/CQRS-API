import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Apicall } from '../apicall';


@Component({
  selector: 'app-addstudent',
  standalone: false,
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css',
})
export class Addstudent {

  constructor(private api: Apicall) { }
 
  StudentForm = new FormGroup(
    {
      name: new FormControl(""),
      age: new FormControl(""),
      address: new FormControl("")
    });
  onSubmit() {
    console.log(this.StudentForm.value);

    //api calling
    this.api.create(this.StudentForm.value).subscribe(res => {
      console.log("Student Added", res);
    })
  }
}

import { Component } from '@angular/core';
import { Apicall } from '../apicall';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-getstudentbyid',
  standalone: false,
  templateUrl: './getstudentbyid.html',
  styleUrl: './getstudentbyid.css',
})
export class Getstudentbyid {
  
  constructor(private api: Apicall) { }

  id = new FormControl();
  studentData: any;

  onSubmit() {
    console.log(this.id.value);
    console.log("hello world");

    this.api.getById(this.id.value).subscribe({
      next: (res) => {
        console.log("Response:", res);
        this.studentData = res;
      },
      error: (err) => {
        this.studentData = null;
        console.error("API error:", err);
      }
    });
  }
}

import { Component } from '@angular/core';
import { Apicall } from '../apicall';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-deletestudent',
  standalone: false,
  templateUrl: './deletestudent.html',
  styleUrl: './deletestudent.css',
})
export class Deletestudent {

  constructor(private api: Apicall) { }

  id = new FormControl();


  onSubmit() {
    console.log(this.id.value);
    this.api.delete(this.id.value).subscribe({
      next: (res) => {
        console.log("Student deleted successfully", res);
      }
    });
  }
}

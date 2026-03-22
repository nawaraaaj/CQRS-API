import { Component } from '@angular/core';
import { Apicall } from '../apicall';
import { FormControl }  from '@angular/forms';

@Component({
  selector: 'app-updatestudent',
  standalone: false,
  templateUrl: './updatestudent.html',
  styleUrl: './updatestudent.css',
})
export class Updatestudent {
  constructor(private api: Apicall) { }

  id = new FormControl();
  name = new FormControl('');
  age = new FormControl('');
  address = new FormControl('');

  onSubmit() {
    const studentDate = {
      name: this.name.value,
      age: this.age.value,
      address: this.address.value
    };
    this.api.update((this.id.value), studentDate)
      .subscribe(res => {
        console.log("Update sucessfully", res);
      });
  }
}

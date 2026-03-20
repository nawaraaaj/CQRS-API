import { Component } from '@angular/core';
import { Apicall } from '../apicall';

@Component({
  selector: 'app-updatestudent',
  standalone: false,
  templateUrl: './updatestudent.html',
  styleUrl: './updatestudent.css',
})
export class Updatestudent {
  constructor(private api: Apicall) { }


}

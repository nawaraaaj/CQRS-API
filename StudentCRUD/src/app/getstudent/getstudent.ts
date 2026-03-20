import { Component, OnInit } from '@angular/core';
import { Apicall } from '../apicall';

@Component({
  selector: 'app-getstudent',
  standalone: false,
  templateUrl: './getstudent.html',
  styleUrl: './getstudent.css',
})
export class Getstudent implements OnInit {
  students: any[] = [];
  constructor(private api: Apicall) { }

  ngOnInit(): void {
    this.api.getAll().subscribe({
      next: (data) => {
        this.students = data; 
      },
      error: (err) => {
        console.error('Error fetching students:', err);
      }
    });
  }
}

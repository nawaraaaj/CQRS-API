import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Addstudent } from './addstudent/addstudent';
import { Getstudent } from './getstudent/getstudent'; 
import { Getstudentbyid } from './getstudentbyid/getstudentbyid';
import { Deletestudent } from './deletestudent/deletestudent'; 

const routes: Routes = [
  { path: 'addstudent', component: Addstudent },
  { path: 'getstudent', component: Getstudent },
  { path: 'getstudentbyid', component: Getstudentbyid },
  { path: 'deletestudent', component: Deletestudent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

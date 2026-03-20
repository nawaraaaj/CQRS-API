import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Addstudent } from './addstudent/addstudent';

const routes: Routes = [
  { path: 'addstudent', component: Addstudent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

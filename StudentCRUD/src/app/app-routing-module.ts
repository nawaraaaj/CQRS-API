import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forms } from './forms/forms'; 

const routes: Routes = [
  { path: 'form', component: Forms},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Reactiveforms1Component } from './reactiveforms1/reactiveforms1.component';
import { TemplatedformsComponent } from './templatedforms/templatedforms.component';

//add the route details
const routes: Routes = [
  //setting a default page for application
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:TemplatedformsComponent},
  {path:'login',component:Reactiveforms1Component},
  //page not found
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloFromMfe1Component} from "./hello-from-mfe1/hello-from-mfe1.component";


const routes: Routes = [{
  path: '', component: HelloFromMfe1Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mfe1RoutingModule { }

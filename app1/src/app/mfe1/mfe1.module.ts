import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { HelloFromMfe1Component } from './hello-from-mfe1/hello-from-mfe1.component';
import {Mfe1RoutingModule} from "./mfe1-routing.module";
import {CommonMfeModule} from 'common-mfe'


@NgModule({
  declarations: [
    HelloFromMfe1Component
  ],
  imports: [
    CommonModule,
    Mfe1RoutingModule,
    CommonMfeModule
  ]
})
export class Mfe1Module { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mfe2RoutingModule } from './mfe2-routing.module';
import { Mfe2Component } from './mfe2.component';
import {TestComponent} from "./test.component";


@NgModule({
  declarations: [
    Mfe2Component,
    TestComponent
  ],
  imports: [
    CommonModule,
    Mfe2RoutingModule
  ]
})
export class Mfe2Module { }

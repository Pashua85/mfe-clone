import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {Mfe1Module} from "./mfe1/mfe1.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    Mfe1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

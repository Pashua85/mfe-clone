import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonMfeModule } from 'common-mfe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonMfeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShowAdvertismentsComponent } from './show-advertisments/show-advertisments.component';
import { AddAdvertismentComponent } from './add-advertisment/add-advertisment.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAdvertismentsComponent,
    AddAdvertismentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

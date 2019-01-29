import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ShowAdvertismentsComponent } from './show-advertisments/show-advertisments.component';
import { AddAdvertismentComponent } from './add-advertisment/add-advertisment.component';
import { ValidAdsPipe } from './valid-ads.pipe';

const appRoutes: Routes = [
  { path: 'inzeraty', component: ShowAdvertismentsComponent },
  { path: 'pridat-inzerat', component: AddAdvertismentComponent },
  { path: '',   redirectTo: '/inzeraty', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowAdvertismentsComponent,
    AddAdvertismentComponent,
    ValidAdsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

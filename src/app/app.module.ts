
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgxMatTypeaheadModule } from 'NgxMatTypeahead';
// import { NgxMatTypeaheadModule } from '../../projects/ngx-mat-typeahead/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    RouterOutlet,
    NgxMatTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
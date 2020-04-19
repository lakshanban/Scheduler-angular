import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FullCalendarModule} from '@fullcalendar/angular';
import {MatInput, MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FullCalendarModule,
    MatInputModule,
    FormsModule,
    MatTableModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

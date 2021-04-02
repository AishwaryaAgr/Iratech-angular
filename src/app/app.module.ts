import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task3aComponent } from './task3a/task3a.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task3aComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

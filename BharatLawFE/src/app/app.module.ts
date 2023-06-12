// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ResearchBookComponent } from './research-book/research-book.component';
// import { QueryBoxComponent } from './query-box/query-box.component';
// import { FormsModule } from '@angular/forms';



// @NgModule({
//   declarations: [
//     AppComponent,
//     ResearchBookComponent,
//     QueryBoxComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ResearchBookComponent } from './research-book.component';
import { ResearchBookComponent } from './research-book/research-book.component';
// import { QueryBoxComponent} from 
// import { QueryBoxComponent } from './components/query-box.component';
import { QueryBoxComponent } from './query-box/query-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ResearchBookComponent,
    QueryBoxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

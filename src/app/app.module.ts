import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FilterStatusPipe} from './core/pipes/filter-status.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    FilterStatusPipe,
    HeaderComponent,
    AppComponent,
    QuotesComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuotesComponent} from './quotes/quotes.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quotes/:author', component: QuotesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

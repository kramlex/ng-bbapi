import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Quote} from '../core/models/quote';
import {Observable} from 'rxjs';
import {ApiService} from '../core/services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  name: string
  data: Quote[]
  quotes$: Observable<Quote[]>
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe((params: any) => {
      this.name = params.author
      console.log(this.name);
      this.quotes$ = this.apiService.loadQuotes(this.name);
    });
  }
  ngOnInit(): void {

  }

}

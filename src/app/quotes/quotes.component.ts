import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Quote} from '../core/models/quote';
import {Observable, of} from 'rxjs';
import {ApiService} from '../core/services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  name: string;
  data: Quote[];
  quotes: Observable<Quote[]>;
  loading: boolean = false;
  count: number = 0;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe((params: any) => {

      this.loading = true;
      this.name = params.author;

      this.apiService.loadQuotes(this.name).subscribe(res => {
        this.count = res.length;
        this.quotes = of(res);
        this.loading = false;
      })

    });
  }
  ngOnInit(): void {}

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Quote} from '../core/models/quote';
import {Observable, of, Subscription} from 'rxjs';
import {ApiService} from '../core/services/api.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnDestroy  {
  name: string;
  data: Quote[];
  quotes: Quote[];
  loading: boolean = false;
  count: number = 0;

  private subs: Subscription = new Subscription();
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.subs.add(this.route.params.pipe(
      mergeMap((params: any) => {
        this.loading = true;
        this.name = params.author;
        return this.apiService.loadQuotes(this.name);
      })
    ).subscribe((res: Quote[]) => {
      this.count = res.length;
      this.quotes = res;
      this.loading = false;
    }));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }


}

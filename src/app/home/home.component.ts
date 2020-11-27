import {Component, OnDestroy} from '@angular/core';
import {Status} from '../core/models/status';
import {Subscription} from 'rxjs';
import {Character} from '../core/models/character';
import {ApiService} from '../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  status: Status = 'not select';
  characters: Character[];
  loading: boolean = false;

  private subs: Subscription = new Subscription();
  constructor(private apiService: ApiService) {
    this.loading = true;


    this.subs.add(this.apiService.loadCharacters().subscribe(res => {
      this.characters = res;
      this.loading = false;
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSetStatus(status: Status) {
    this.status = status;
  }
}

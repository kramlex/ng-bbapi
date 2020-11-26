import { Component, OnInit } from '@angular/core';
import {Status} from '../core/models/status';
import {Observable, of} from 'rxjs';
import {Character} from '../core/models/character';
import {ApiService} from '../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {}

  status: Status = 'not select';
  characters: Observable<Character[]>;
  loading: boolean = false;
  constructor(private apiService: ApiService) {
    this.loading = true;

    this.apiService.loadCharacters().subscribe(res => {
      this.characters = of(res);
      this.loading = false;
    })
  }
  onSetStatus(status: Status) {
    this.status = status;
  }
}

import { Component, OnInit } from '@angular/core';
import {Status} from '../core/models/status';
import {Observable} from 'rxjs';
import {Character} from '../core/models/character';
import {ApiService} from '../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {

  }

  status: Status = 'not select';
  characters: Observable<Character[]> = this.apiService.loadCharacters();
  constructor(private apiService: ApiService) {}
  onSetStatus(status: Status) {
    this.status = status;
  }
}

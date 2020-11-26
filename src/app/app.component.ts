import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Character} from './core/models/character';
import {ApiService} from './core/services/api.service';
import {Status} from './core/models/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

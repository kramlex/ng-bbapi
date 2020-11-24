import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  loadCharacters(): Observable<any> {
    return this.http.get<any>('https://breakingbadapi.com/api/characters').pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}

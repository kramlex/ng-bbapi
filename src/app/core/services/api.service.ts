import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Character} from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  apiUrl: string = 'https://breakingbadapi.com/api'
  loadCharacters(): Observable<any> {
    return this.http.get<Character>(`${this.apiUrl}/characters`).pipe(
      tap(data => {
        console.log(data);
      })
    );
  }
  loadQuotes(characterName: string) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quote?author=${characterName}`).pipe(
      tap(data => {
        console.log(data);
      })
    );
  }
}

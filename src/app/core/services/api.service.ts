import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  apiUrl: string = 'https://breakingbadapi.com/api'
  loadCharacters(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/characters`).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
  loadQuotes(characterName: string) : Observable<any> {
    console.log(characterName);
    return this.http.get<any>(`${this.apiUrl}/quote?author=${characterName}`).pipe(
      map(data => {
        return data;
      })
    );
  }
}

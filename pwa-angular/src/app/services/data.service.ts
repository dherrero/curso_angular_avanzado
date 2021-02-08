import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getRandomSentence(): Observable<any> {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

  subscribe(push: PushSubscription) {
    return this.http.post('http://localhost:3000/subscribe', push);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class JsonDataService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // Method to get posts
  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  
}

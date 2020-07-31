import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<string[]>(`https://e1607171-5daf-49ae-aa5c-e7f4c512838e.mock.pstmn.io/courses`);
  }
}

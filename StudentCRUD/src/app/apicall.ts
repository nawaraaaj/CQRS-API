import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apicall {
  private baseURL = 'https://localhost:7089/api/Student';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any[]>{
    return this.http.get<any[]>(`${this.baseURL}`);
  }

  getById(id: number): Observable<any> {
    console.log({id})
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.baseURL, data);
  }

  update(id: number, data: any) : Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}


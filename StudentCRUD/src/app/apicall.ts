import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apicall {
  private baseURL = 'https://localhost:7089/api/Student';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseURL}`);
  }

  getById(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.baseURL, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.baseURL}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}


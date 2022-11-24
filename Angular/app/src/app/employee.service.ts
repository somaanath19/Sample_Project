import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getEmployees(): Observable<object> {
    return this.http.get('http://localhost:8080/employees');
  }
  constructor(private http: HttpClient) {}
}

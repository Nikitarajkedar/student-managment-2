import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})





export class StudentServiceService {

  private baseUrl = 'http://localhost:8080/api/student'; //backend port path  add for connectivity
  constructor(private http: HttpClient) { }
 
  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allstd`);
  } 

  getStudent(sid: number): Observable<any> {
    console.log(sid);
    return this.http.get(`${this.baseUrl}/getbyid/${sid}`);
  }

  
  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addstd`, data);
  }

  update(id: number, student: Student): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, student);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

 



}

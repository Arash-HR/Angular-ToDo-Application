import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiurl: string = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiurl)
  }
  doneTask(task: Task): Observable<Task>{
    const url: string = `${this.apiurl}/${task.id}`;
    return this.http.put<Task>(url,task, httpOptions)
  }
  deleteTask(task: Task): Observable<Task>{
    const url: string = `${this.apiurl}/${task.id}`;
    return this.http.delete<Task>(url)
  }
}

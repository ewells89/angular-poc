import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
  // this imports the http client in order to use APIs. angular has this client included.
  // this must also be added as module in order to be used in the app.module.ts file.
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  // this property is for the url that the new http client will be using
  constructor(private http:HttpClient) { }
  // this argument brings the service into the constructor. this allows us to use this.http and whatever methods are available.
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
  // this method returns the tasks. the data type is defined as the Task array.
  // the task array is wrapped in the observable
  // once the observable is imported and used in the service, the service call has to be updated in the task.component file
}

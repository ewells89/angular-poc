import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]>{
    // return TASKS;
    const tasks = of(TASKS);
    return tasks;
  }
  // this method returns the tasks. the data type is defined as the Task array.
  // the task array is wrapped in the observable
  // once the observable is imported and used in the service, the service call has to be updated in the task.component file
}

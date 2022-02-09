import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[]{
    return TASKS;
  }
  // this method returns the tasks. the data type is defined as the Task array.
}

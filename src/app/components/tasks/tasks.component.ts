import { Component, OnInit } from '@angular/core';

import {Task} from '../../Task';
  // this is importing the interface for tasks. this is because whenever a task is defined we want to use the interface.
import {TASKS} from '../../mock-tasks';
  // this brings in the mock json data for the tasks. this would normally be data from the backend.


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS
  // this is assigning the tasks as a property of the component.

  constructor() { }

  ngOnInit() {
  }

}

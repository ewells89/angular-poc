import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
// importing the service method so the service can be called
import {Task} from '../../Task';
  // this is importing the interface for tasks. this is because whenever a task is defined 
  // we want to use the interface.
// import {TASKS} from '../../mock-tasks';
  // this brings in the mock json data for the tasks. this would normally be data from the backend.


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  // this is assigning the tasks as a property of the component.
  // after creating the task service and setting the method for getting tasks in the task.service.ts file, 
  // the initial tasks property will be set as an empty array.

  constructor(private taskService:TaskService) { }
  // in order to use a service it must be added as a provider inside the constructor as a constructor argument.
  // private indicates the argument is only used in this constructor
  ngOnInit():void {
    // void here means that this particular service doesn't return anything
    this.tasks = this.taskService.getTasks()
    // this sets this.tasks, which was set as an empty array above on line 17, to whatever is returned by the taskService method getTasks()
    // !!! if dealing with asynchronous data fetched from a server, observables should be used instead of this method.
  }

}

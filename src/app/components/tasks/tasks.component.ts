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
    // this.tasks = this.taskService.getTasks()
    // this sets this.tasks, which was set as an empty array above on line 17, to whatever is returned by the taskService method getTasks()
    // !!! if dealing with asynchronous data fetched from a server, observables should be used instead of this method.
    this.taskService
      .getTasks()
      .subscribe(
        (tasks) => (this.tasks = tasks))
    // to use an observable, you have to subscribe to it. this works like a promise
    // inside the arrow function you set the return value and set it equal to the tasks that are returned from the observable.

  }

  deleteTask(task: Task){
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter(t => t.id !== task.id)))
    // here the service method is being called to delete the record.
    // the delete service is defined in the task.service.ts file.
    // the subscribe method for the observable calls the deleteTask function to delete the record from the server.
    // once complete the deleted record is filtered from the UI by filtering the id of the iteration of the task by the deleted task id
  }

  toggleReminder(task:Task){
    task.reminder=!task.reminder;
    // this sets the value of the reminder key to the opposite of its current value.
    this.taskService
      .updateTaskReminder(task)
      .subscribe();
  }

  addTask(task:Task){
    this.taskService
    .addTask(task)
    .subscribe(
        (task) => (this.tasks.push(task)        )
    );

    
    // console.log('it worked.');
  }
}

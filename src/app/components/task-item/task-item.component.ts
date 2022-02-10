import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// added Input 
import { Task } from 'src/app/Task';
// imported the task interface to define the task property by this interface
// import {  } from 'angular-font-awesome';
// imported the X icon from the font awesome package

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task :Task;
  // here we've set the data type of a task as Task, which is our data typed interface for the TASKS array.
  // faTimes = faTimes;
  // here we are defining the imported faTimes icon as a property of the component.
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter
  
  constructor() { }

  ngOnInit() {
  }

  onDelete(task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task){
    this.onToggleReminder.emit(task);
  }

}

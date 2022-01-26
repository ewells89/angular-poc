import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
// added Input 
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task :Task
  // here we've set the data type of a task as Task, which is our data typed interface for the TASKS array.

  constructor() { }

  ngOnInit() {
  }

}

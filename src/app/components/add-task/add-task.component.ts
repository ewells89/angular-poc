import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  
  // a property for each field in a form should be added to the component class.
  text: string;
  day: string;
  reminder: boolean = false;
  // to create a two-way data binding between the property and the input field, the directive ngModel
  // must be used, which is part of the forms module which isn't included in angular by default.
  // the module is imported in the app.module file.

  showAddTask: boolean;
  subscription: Subscription;


  constructor( private uiService:UiService) { 
    // to use a service it must be added to the constructor.
    // below is brought over from header component
    this.subscription = this.uiService
    .onToggle()
    .subscribe(value => this.showAddTask = value)
  }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.text){
      alert('Please add a task.');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // the event must be emitted to pass the value of the newTask variable back to the parent component.

    this.onAddTask.emit(newTask);
    // this emits the new task when the onAddTask method is triggered with the new task entered by the user.
    
    this.text ='';
    this.day ='';
    this.reminder=false;
    // this is to clear the form after
  }

}

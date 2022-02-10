import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // a property for each field in a form should be added to the component class.
  text: string;
  day: string;
  reminder: boolean = false;
  // to create a two-way data binding between the property and the input field, the directive ngModel
  // must be used, which is part of the forms module which isn't included in angular by default.
  // the module is imported in the app.module file.

  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
  // documentation for subjects: https://ncjamieson.com/understanding-subjects/

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

    toggleAddTask(): void {
      this.showAddTask = !this.showAddTask;
      this.subject.next(this.showAddTask);
      // when triggered this method sets the opposite boolean value for the showAddTask class.
      // it then passes the updated value to the showAddTask class.
    }

    onToggle(): Observable<any>{
      return this.subject.asObservable();
    }
    //this method triggers on toggling the add task.
    // toggleAddTask is triggered by the button click, and wherever the button is clicked 
    // the function should subscribe to onToggle to return that event as an observable.

}

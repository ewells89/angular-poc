import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask:boolean;
  subscription: Subscription;

  constructor( private uiService:UiService) { 
  // to use a service it must be added to the constructor.

  // Add button - to hide/show the add component, once toggleAddTask() in the service is fired,
  // the subscription must be used to watch for that event.
  // setting up a subscription for the toggle:
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }


  ngOnInit() {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask(); 
  
    // console.log('toggle');
  }


}

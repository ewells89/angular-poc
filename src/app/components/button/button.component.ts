import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text:string;
  @Input() color:string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
      this.btnClick.emit();
  //   //this is an event emitter that allows the button to be reusable and to allow different functions on click. 
  //   //the event must be output (OutPut has to be added to the import list on row 1), then added to row11.
  //   //the event being emitted has to be added to the html file where the button is embedded.
  }
}

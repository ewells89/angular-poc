import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

// import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
// import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    // declarations are for components
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  imports: [
    // imports are for modules
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

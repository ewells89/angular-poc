import {Task} from './Task'
    // importing the Task.js file from the same directory with the data types defined.

export const TASKS: Task[] = [
        // defining the TASKS array by the Task[] interface. the brackets must be included since
        // TASKS is an array. if it was a single object it wouldn't be required.
        // any key value added that doesn't match the Task interface will throw an error.
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'May 6th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'May 7th at 12:30pm',
        reminder: false,
      },   
];
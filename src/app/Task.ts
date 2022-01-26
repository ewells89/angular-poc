export interface Task {
    id?: number;
    //? designates the key as being optional
    text: string;
    day: string;
    reminder: boolean;
}

//this file defines the data types of the json data in the mock-tasks.ts file
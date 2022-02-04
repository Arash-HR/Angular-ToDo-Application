import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  title!: string;
  description!: string;
  date!: string;
  
  @Output() onAddTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if(!this.title){
      alert("Please insert title!");
      return
    }
    const newTask = {
      title : this.title,
      description : this.description,
      date : this.date,
      done : false
    }

    this.onAddTask.emit(newTask);

    this.title = '';
    this.description = '';
    this.date = '';
  }

}

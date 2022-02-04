import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  @Input() task!: Task;
  @Output() onDoneTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  onDone(task: Task){
    this.onDoneTask.emit(task)
  }

}

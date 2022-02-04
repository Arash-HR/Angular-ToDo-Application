import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  title: string = 'ToDo';
  description: string = 'used to maintain our day-to-day tasks';

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((taks) => (this.tasks = taks));
  }

  doneTask(task: Task){
    task.done = !task.done;
    this.taskService.doneTask(task).subscribe();
  }

}

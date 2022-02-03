import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  title: string = 'ToDo';
  description: string = 'used to maintain our day-to-day tasks';

  constructor() { }

  ngOnInit(): void {
  }

}

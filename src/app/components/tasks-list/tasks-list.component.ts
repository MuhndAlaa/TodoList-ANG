import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  @Input() tasks :Array<string>;

  doneTask(e):void{
    e.target.parentElement.parentElement.classList.toggle("text-decoration-line-through");
    e.target.parentElement.parentElement.classList.toggle("alert-success");
  }

  deleteTask(i):void{
    this.tasks.splice(i,1);
  }
}

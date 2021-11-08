import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
   	
  tasks:Array<string> = [];
  
  reciveTask(task:string):void{
    this.tasks.push(task);
  }

}

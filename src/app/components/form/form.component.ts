import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

  @Output() sendTask = new EventEmitter<string>(); 
  formInput:string;
  
  addTask(): void{
    this.sendTask.emit(this.formInput);
  }

}

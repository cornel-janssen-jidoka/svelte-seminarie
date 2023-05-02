import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItem {

  @Input() public todo: any;
  @Output() public checkmarkChange = new EventEmitter<any>()

  public onCheckboxChange(): void {
    this.checkmarkChange.emit({
      id: this.todo.id,
      value: !this.todo.checked
    })
  }
}

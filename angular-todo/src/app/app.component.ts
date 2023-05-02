import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public inputValue = '';

  public createTodo(): void {
    if (this.inputValue) {
      this.todos = [
        ...this.todos,
        {
          id: this.todos.length,
          text: this.inputValue,
          checked: false,
        }
      ];

      this.inputValue = '';
    }
  }

  public checkTodo(event: any): void {
    this.todos = this.todos.map(todo => {
      if (todo.id === event.id) {
        return {
          ...todo,
          checked: event.value
        };
      }

      return todo;
    })
  }
}

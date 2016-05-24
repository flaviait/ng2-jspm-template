import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import {TodoService} from "./todo.service";
import {Observable} from "rxjs/Observable";
import {Todo} from "./todo";
import {List} from "immutable";

@Component({
  selector: "todos",
  directives: [FORM_DIRECTIVES],
  template: `
    <div>
      <h3>Todos for all!</h3>
      <ul>
        <li *ngFor="let todo of todos | async">
          {{todo.text}}
        </li>
      </ul>
      <form (ngSubmit)="add(name.value)">
        <input #name/>
        <button type="submit">add</button>
      </form>
    </div>
  `
})
export class TodosComponent {
  private todos: Observable<List<Todo>>;
  constructor(private todoService: TodoService) {
    this.todos = todoService.todos;
  }

  add(name: string) {
    this.todoService.add({text: name});
  }
}
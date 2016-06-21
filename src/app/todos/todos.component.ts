import {Component} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {TodoService} from "./todo.service";
import {Observable} from "rxjs/Observable";
import {Todo} from "./todo";
import {List} from "immutable";
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
  selector: "todos",
  directives: [REACTIVE_FORM_DIRECTIVES],
  pipes: [TranslatePipe],
  template: `
    <div>
      <h3>{{'todos.heading' | translate}}</h3>
      <ul>
        <li *ngFor="let todo of todos | async">
          {{todo.text}}
        </li>
      </ul>
      <form (ngSubmit)="add(name.value)">
        <input #name/>
        <button type="submit">{{'general.add' | translate}}</button>
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
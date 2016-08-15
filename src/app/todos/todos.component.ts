import {Component, ViewChild} from "@angular/core";
import {TodoService} from "./todo.service";
import {Observable} from "rxjs/Observable";
import {Todo} from "./todo";
import {List} from "immutable";

@Component({
  selector: "todos",
  template: `
    <div>
      <h3>{{'todos.heading' | translate}}</h3>
      <ul>
        <li *ngFor="let todo of todos | async">
          {{todo.text}}
        </li>
      </ul>
      <form (ngSubmit)="add(name.value)">
        <input #name required/>
        <button type="submit">{{'general.add' | translate}}</button>
      </form>
    </div>
  `
})
export class TodosComponent {
  @ViewChild("name") name: any;
  private todos: Observable<List<Todo>>;

  constructor(private todoService: TodoService) {
    this.todos = todoService.todos;
  }

  add(name: string) {
    this.todoService.add({text: name});
    this.name.nativeElement.value = "";
  }
}
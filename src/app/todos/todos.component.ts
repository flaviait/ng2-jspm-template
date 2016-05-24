import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import {TodoService} from "./todo.service";
import {Observable} from "rxjs/Observable";
import {Todo} from "./todo";
import {List} from "immutable";
import template from "./todos.component.html"

@Component({
  selector: "todos",
  directives: [FORM_DIRECTIVES],
  template: template
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
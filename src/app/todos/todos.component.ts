import {Component, ViewChild} from "@angular/core";
import {TodoService} from "./todo.service";
import {Observable} from "rxjs/Observable";
import {Todo} from "./todo";
import {List} from "immutable";
// noinspection TypeScriptCheckImport
import template from "./todos.component.html";

@Component({
  selector: "todos",
  template
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
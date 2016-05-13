import {Store} from "@ngrx/store";
import {TodoActionCreator} from "./todos.store";
import {Todo} from "./todo";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {List} from "immutable";

@Injectable()
export class TodoService {
  public todos: Observable<List<Todo>>;
  constructor(private store: Store<{todos: List<Todo>}>, private actionCreator: TodoActionCreator) {
    this.todos = this.store.select(state => state.todos);
  }

  add(todo: Todo) {
    this.store.dispatch(this.actionCreator.add(todo));
  }
}
import {TodoService} from "./todos/todo.service";
import {TodoActionCreator} from "./todos/todos.store";

export const TODO_PROVIDERS = [TodoActionCreator, TodoService];

export {TodoService};
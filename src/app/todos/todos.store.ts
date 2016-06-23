import {Action, ActionReducer} from "@ngrx/store";
import {List} from "immutable";
import {Todo} from "./todo";

export const ACTION_TYPES = {
  ADD_TODO: "ADD_TODO"
};

Object.freeze(ACTION_TYPES);

export class TodoActionCreator {
  add: (todo: Todo) => Action = todo => {
    return {type: ACTION_TYPES.ADD_TODO, payload: todo};
  };
}

export const todosReducer: {[key: string]: ActionReducer<any>} = {
  todos: (state: List<Todo>, action: Action) => {
    switch (action.type) {
      case ACTION_TYPES.ADD_TODO:
        return state.push(action.payload);
      default:
        return state;
    }
  }
};

export const initialTodosState = {
  todos: List.of<Todo>()
};
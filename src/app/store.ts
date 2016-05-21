import assign from "lodash/assign";
import {todosReducer, initialTodosState} from "./todos/todos.store";
import {routerReducer} from "@ngrx/router-store";

export const reducers = assign({router: routerReducer}, todosReducer);
export const initialStates = assign({}, initialTodosState);
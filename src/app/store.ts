import assign from "lodash/assign";
import {todosReducer, initialTodosState} from "./todos/todos.store";

export const reducers = assign({}, todosReducer);
export const initialStates = assign({}, initialTodosState);
import assign from "lodash/assign";
import {todosReducer, initialTodosState} from "./todos/todos.store";
import {StoreModule} from "@ngrx/store";

const initialStates = assign({}, initialTodosState);

export const createStoreProvider = (currentState?: any) =>
  StoreModule.provideStore(todosReducer, assign(currentState || {}, initialStates));
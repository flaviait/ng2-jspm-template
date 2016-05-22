import assign from "lodash/assign";
import {todosReducer, initialTodosState} from "./todos/todos.store";
import {routerReducer} from "@ngrx/router-store";
import {provideStore} from "@ngrx/store";

const reducers = assign({router: routerReducer}, todosReducer);
const initialStates = assign({}, initialTodosState);

export const createStoreProvider = (currentState?: any) =>
  provideStore(reducers, assign({}, initialStates, currentState));
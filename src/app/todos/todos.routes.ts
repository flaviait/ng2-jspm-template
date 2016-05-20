import {Route} from "@ngrx/router";
import {TodosComponent} from "./todos.component";

export const TODO_ROUTES: Route = {
  path: "/todos",
  component: TodosComponent
};
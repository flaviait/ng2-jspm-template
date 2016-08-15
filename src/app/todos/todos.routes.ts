import {TodosComponent} from "./todos.component";
import {RouterModule} from "@angular/router";

export const TODO_ROUTES = RouterModule.forChild([
  {
    path: "todos",
    component: TodosComponent
  }
]);
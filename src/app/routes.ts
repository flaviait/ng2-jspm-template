import {Routes} from "@ngrx/router";
import {TODO_ROUTES} from "./todos/todos.routes";
import {INPUT_TEST_ROUTES} from "./inputTest/inputTest.routes";

export const ROUTES: Routes = [
  {
    path: "/",
    redirectTo: "/input-test"
  },
  INPUT_TEST_ROUTES,
  TODO_ROUTES
];
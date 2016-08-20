import {RouterModule} from "@angular/router";
import {InputTestComponent} from "./inputTest.component";

export const INPUT_TEST_ROUTES = RouterModule.forChild([
  {
    path: "input-test",
    component: InputTestComponent
  }
]);
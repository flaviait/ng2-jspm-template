import {NgModule} from "@angular/core";
import {InputTestComponent} from "./inputTest.component";
import {INPUT_TEST_ROUTES} from "./inputTest.routes";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    INPUT_TEST_ROUTES
  ],
  declarations: [InputTestComponent]
})
export class InputTestModule {
}
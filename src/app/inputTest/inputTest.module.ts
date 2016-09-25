/* @DorianGrey:
 From what I've read:
 https://github.com/angular/angular/issues/10472
 https://github.com/angular/angular/issues/10552

 The style below will be the default for >= RC.6 and is now already been used internally.
 Hope they'll reconsider this, since this might screw up most lazy loading techniques...
 */

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
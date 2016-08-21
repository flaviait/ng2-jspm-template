/* @DorianGrey:
 From what I've read:
 https://github.com/angular/angular/issues/10472
 https://github.com/angular/angular/issues/10552

 The style below will be the default for >= RC.6 and is now already been used internally.
 Hope they'll reconsider this, since this might screw up most lazy loading techniques...
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTestComponent} from "./inputTest.component";
import {TranslateModule} from "ng2-translate/ng2-translate";
import {INPUT_TEST_ROUTES} from "./inputTest.routes";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    INPUT_TEST_ROUTES
  ],
  exports: [TranslateModule],
  declarations: [InputTestComponent]
})
export class InputTestModule {
}
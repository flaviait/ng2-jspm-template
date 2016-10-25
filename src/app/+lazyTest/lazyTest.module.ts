import {NgModule} from "@angular/core";

import {SharedModule} from "../shared/shared.module";

import {LAZY_TEST_ROUTES} from "./lazyTest.routes";
import {LazyTestComponent} from "./lazyTest.component";

@NgModule({
  imports:      [
    LAZY_TEST_ROUTES,
    SharedModule
  ],
  declarations: [
    LazyTestComponent
  ]
})
export class LazyTestModule {
}
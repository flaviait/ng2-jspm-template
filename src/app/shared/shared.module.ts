import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {TranslateModule} from "ng2-translate";

// See https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-module
// for an explanation of how to properly create and use a shared module.
@NgModule({
  imports: [
    // Imported by app module, which imports this module.
    // See description here: https://github.com/ocombe/ng2-translate/issues/232#issuecomment-251421577
    TranslateModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
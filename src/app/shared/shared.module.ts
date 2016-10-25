import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {TranslateModule, TranslateService} from "ng2-translate/ng2-translate";
import each from "lodash/each";

import translations from "../../generated/translations";

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
  constructor(translate: TranslateService) {
    each(translations, (translation, lang) => {
      translate.setTranslation(lang, translation);
    });
    translate.use("en");
  }
}
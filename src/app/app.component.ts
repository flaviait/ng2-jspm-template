import each from "lodash/each";
import indexOf from "lodash/indexOf";
import {Component} from "@angular/core";
import {TranslateService} from "ng2-translate/ng2-translate";
import styles from "src/app/app.component.scss";
import translations from "../generated/translations";
// noinspection TypeScriptCheckImport
import template from "./app.component.html";

@Component({
  selector: "app",
  styles: [styles],
  template
})
export class App {

  currentLanguage: string = "en";

  private availableLanguages: string[];

  constructor(private translate: TranslateService) {
    each(translations, (translation, lang) => {
      this.translate.setTranslation(lang, translation);
    });
    this.availableLanguages = Object.keys(translations);
    this.translate.use(this.currentLanguage);

  }

  rotateLanguage() {
    let idx = (indexOf(this.availableLanguages, this.currentLanguage) + 1) % this.availableLanguages.length;
    this.currentLanguage = this.availableLanguages[idx];
    this.translate.use(this.currentLanguage);
  }
}
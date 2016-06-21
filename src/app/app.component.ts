import each from "lodash/each";
import indexOf from "lodash/indexOf";
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@ngrx/router";
import {TranslateService, TranslatePipe} from "ng2-translate/ng2-translate";
import styles from "src/app/app.component.scss";
import translations from "../generated/translations";

@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES],
  pipes: [TranslatePipe],
  styles: [styles],
  template: `
    <h1>{{'app.title' | translate}}</h1>
    <span class="language-select" type="button" (click)="rotateLanguage()">{{currentLanguage}}</span>
    <nav>
      <a linkTo="/input-test" linkActive="active">{{'app.links.inputTest' | translate}}</a>
      <a linkTo="/todos" linkActive="active">{{'app.links.todo' | translate}}</a>
    </nav>
    <route-view></route-view>
  `
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
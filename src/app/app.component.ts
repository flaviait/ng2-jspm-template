import each from "lodash/each";
import indexOf from "lodash/indexOf";
import {Component} from "@angular/core";
import {TranslateService} from "ng2-translate/ng2-translate";
import styles from "src/app/app.component.scss";
import translations from "../generated/translations";

@Component({
  selector: "app",
  styles: [styles],
  template: `
    <h1>{{'app.title' | translate}}</h1>
    <span class="language-select" (click)="rotateLanguage()">{{currentLanguage}}</span>
    <nav>
      <a routerLink="/input-test" routerLinkActive="active">{{'app.links.inputTest' | translate}}</a>
      <a routerLink="/todos" routerLinkActive="active">{{'app.links.todo' | translate}}</a>
    </nav>
    <router-outlet></router-outlet>
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
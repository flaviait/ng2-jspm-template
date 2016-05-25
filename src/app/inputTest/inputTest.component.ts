import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import styles from "./inputTest.component.scss";
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
  selector: "input-test",
  directives: [FORM_DIRECTIVES],
  pipes: [TranslatePipe],
  styles: [styles],
  template: `
    <div>
      <h3>{{'inputTest.heading' | translate}}</h3>
      <div [innerHTML]="'inputTest.display' | translate:{value: input}"></div>
      <input type="text" [(ngModel)]="input" />
    </div>
  `
})
export class InputTestComponent {
  input: string;

  constructor() {
    this.input = "";
  }
}
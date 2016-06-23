import {Component} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import styles from "src/app/inputTest/inputTest.component.scss";
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
  selector: "input-test",
  directives: [REACTIVE_FORM_DIRECTIVES],
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
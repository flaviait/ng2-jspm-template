import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import styles from "./inputTest.component.scss";

@Component({
  selector: "input-test",
  directives: [FORM_DIRECTIVES],
  styles: [styles],
  template: `
    <div>
      <h3>Input Test component</h3>
      <div>You typed <span class="display">{{input}}</span></div>
      <input type="text" [(ngModel)]="input" />
    </div>
  `
})
export class InputTestComponent {
  input: string;

  constructor() {
    this.input = "Some input";
  }
}
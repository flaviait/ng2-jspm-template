import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import styles from "src/app/pages/test1.component.scss";

@Component({
  selector: "test-app",
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
export class TestComponent {
  input: string;

  constructor() {
    this.input = "Some input";
  }
}
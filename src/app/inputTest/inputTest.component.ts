import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import styles from "./inputTest.component.scss";
import template from "./inputTest.component.html"

@Component({
  selector: "input-test",
  directives: [FORM_DIRECTIVES],
  styles: [styles],
  template: template
})
export class InputTestComponent {
  input: string;

  constructor() {
    this.input = "Some input";
  }
}
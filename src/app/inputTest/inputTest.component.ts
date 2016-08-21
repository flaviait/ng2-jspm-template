import {Component} from "@angular/core";
import styles from "src/app/inputTest/inputTest.component.scss";
// noinspection TypeScriptCheckImport
import template from "./inputTest.component.html";

@Component({
  selector: "input-test",
  styles: [styles],
  template
})
export class InputTestComponent {
  input: string;

  constructor() {
    this.input = "";
  }
}
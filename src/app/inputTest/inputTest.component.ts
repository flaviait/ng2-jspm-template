import {Component} from "@angular/core";
import styles from "src/app/inputTest/inputTest.component.scss";

@Component({
  selector: "input-test",
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
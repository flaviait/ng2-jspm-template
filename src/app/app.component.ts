import {Component} from "@angular/core";
import styles from "./app.component.scss";
import {ROUTER_DIRECTIVES} from "@ngrx/router";
import template from "./app.component.html"

@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES],
  styles: [styles],
  template: template
})
export class AppComponent {
}
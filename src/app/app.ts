import {Component} from "@angular/core";
import styles from "src/app/app.scss";
import {ROUTER_DIRECTIVES} from "@ngrx/router";

@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES],
  styles: [styles],
  template: `
    <h1>Demo app</h1>
    <nav>
      <a linkTo="/input-test" linkActive="active">Input test</a>
      <a linkTo="/todos" linkActive="active">Todos</a>
    </nav>
    <route-view></route-view>
  `
})
export class App {
}
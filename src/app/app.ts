import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {TestComponent} from "./pages/test1.component.ts";
import {Test2Component} from "./pages/test2.component.ts";
import styles from "src/app/app.scss";

@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES],
  styles: [styles],
  template: `
    <h1>Demo app</h1>
    <nav>
      <a [routerLink]="['Test1']">Test page 1</a>
      <a [routerLink]="['Test2']">Test page 2</a>
      
    </nav>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path: "/test1", name: "Test1", component: TestComponent, useAsDefault: true},
  {path: "/test2", name: "Test2", component: Test2Component}
])
export class App {
}
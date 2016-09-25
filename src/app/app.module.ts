import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";

import assign from "lodash/assign";

import {App} from "./app.component";
import {APP_ROUTES, appRoutingProviders} from "./app.routes";
import {createStoreProvider} from "./app.store";
import {InputTestModule} from "./inputTest/inputTest.module";
import {TodosModule} from "./todos/todos.module";
import {SharedModule} from "./shared/shared.module";


let initialState = {};

const IMPORTS = [
  BrowserModule, // Should only be imported by the root => every other module should import "CommonModule".
  HttpModule,
  APP_ROUTES,
  SharedModule,
  InputTestModule,
  TodosModule,
  createStoreProvider(initialState)
];

@NgModule({
  imports: IMPORTS,
  providers: [appRoutingProviders],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {
  static extendInitialState(state: any) {
    assign(initialState, state);
  }
}
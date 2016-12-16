import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {TranslateModule, TranslateLoader, TranslateService} from "ng2-translate";

import assign from "lodash/assign";

import {App} from "./app.component";
import {APP_ROUTES, appRoutingProviders} from "./app.routes";
import {createStoreProvider} from "./app.store";
import {InputTestModule} from "./inputTest/inputTest.module";
import {TodosModule} from "./todos/todos.module";
import {SharedModule} from "./shared/shared.module";
import {createTranslateLoader} from "./translate.factory";
import translations from "../generated/translations";

let initialState = {};

@NgModule({
  imports: [
    BrowserModule, // Should only be imported by the root => every other module should import "CommonModule".
    HttpModule,
    APP_ROUTES,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader
    }),
    SharedModule,
    InputTestModule,
    TodosModule,
    createStoreProvider(initialState)
  ],
  providers: [appRoutingProviders],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {
  static extendInitialState(state: any) {
    assign(initialState, state);
  }

  constructor(translate: TranslateService) {
    translate.addLangs(Object.keys(translations));
    translate.use("en");
  }
}
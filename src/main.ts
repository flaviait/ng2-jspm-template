import "zone.js";
import "reflect-metadata";

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule, enableProdMode} from "@angular/core";
import {HttpModule} from "@angular/http";

import {App} from "./app/app.component";
import {APP_ROUTES, appRoutingProviders} from "./app/app.routes";
import {createStoreProvider} from "./app/app.store";
import {InputModule} from "./app/inputTest/input.module";
import {TodosModule} from "./app/todos/todos.module";

enableProdMode();

const IMPORTS = [
  HttpModule, // TODO: Why do we need this? It's just that the injector complains if it is missing.
  APP_ROUTES,
  InputModule,
  TodosModule,
  createStoreProvider(),
];

@NgModule({
  imports: IMPORTS,
  providers: [appRoutingProviders],
  bootstrap: [App]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
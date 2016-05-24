import "zone.js";
import "reflect-metadata";
import {enableProdMode} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@ngrx/router";
import {AppComponent} from "./app/app.component";
import {ROUTES} from "./app/routes";
import {TODO_PROVIDERS} from "./app/todos";
import {createStoreProvider} from "./app/store";
import {connectRouterToStore} from "@ngrx/router-store";

enableProdMode();

const PROVIDERS = [
  provideRouter(ROUTES),
  TODO_PROVIDERS,
  createStoreProvider(),
  connectRouterToStore()
];

bootstrap(AppComponent, PROVIDERS);
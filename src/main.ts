import "zone.js";
import "reflect-metadata";
import {enableProdMode} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideStore} from "@ngrx/store";
import {provideRouter} from "@ngrx/router";
import {App} from "./app/app";
import {ROUTES} from "./app/routes";
import {TODO_PROVIDERS} from "./app/todos";
import {reducers, initialStates} from "./app/store";

enableProdMode();

const PROVIDERS = [
  provideRouter(ROUTES),
  TODO_PROVIDERS,
  provideStore(reducers, initialStates)
];

bootstrap(App, PROVIDERS);
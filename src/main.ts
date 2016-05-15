import "zone.js";
import "reflect-metadata";
import {enableProdMode} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideStore} from "@ngrx/store";
import {App} from "./app/app";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {TODO_PROVIDERS} from "./app/todos";
import {reducers, initialStates} from "./app/store";

enableProdMode();

const PROVIDERS = [
  ROUTER_PROVIDERS,
  TODO_PROVIDERS,
  provideStore(reducers, initialStates)
];

bootstrap(App, PROVIDERS);
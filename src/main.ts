import "zone.js";
import "reflect-metadata";
import {enableProdMode} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@ngrx/router";
import {App} from "./app/app.component";
import {ROUTES} from "./app/routes";
import {TODO_PROVIDERS} from "./app/todos";
import {createStoreProvider} from "./app/store";
import {connectRouterToStore} from "@ngrx/router-store";
import {TRANSLATE_PROVIDERS} from "ng2-translate/ng2-translate";

enableProdMode();

const PROVIDERS = [
  TRANSLATE_PROVIDERS,
  provideRouter(ROUTES),
  TODO_PROVIDERS,
  createStoreProvider(),
  connectRouterToStore()
];

bootstrap(App, PROVIDERS);
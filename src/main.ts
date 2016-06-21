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
import {HTTP_PROVIDERS} from "@angular/http";
import {disableDeprecatedForms, provideForms} from "@angular/forms";

enableProdMode();

const PROVIDERS = [
  TRANSLATE_PROVIDERS,
  HTTP_PROVIDERS,
  TODO_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provideRouter(ROUTES),
  createStoreProvider(),
  connectRouterToStore()
];

bootstrap(App, PROVIDERS);
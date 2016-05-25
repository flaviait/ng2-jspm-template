import "zone.js";
import "reflect-metadata";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {usePostMiddleware} from "@ngrx/store";
import {provideRouter} from "@ngrx/router";
import {App} from "../app/app.component";
import {ROUTES} from "../app/routes";
import {TODO_PROVIDERS} from "../app/todos";
import {createStoreProvider} from "../app/store";
import {dev} from "./tools.dev.ts";
import {connectRouterToStore} from "@ngrx/router-store";
import {TRANSLATE_PROVIDERS} from "ng2-translate/ng2-translate";
import {HTTP_PROVIDERS} from "@angular/http";
export {dev};

const PROVIDERS = [
  TRANSLATE_PROVIDERS,
  HTTP_PROVIDERS,
  TODO_PROVIDERS,
  provideRouter(ROUTES),
  createStoreProvider(dev.currentState),
  usePostMiddleware(dev.stateLogging),
  usePostMiddleware(dev.stateTracking),
  connectRouterToStore()
];

bootstrap(App, PROVIDERS);
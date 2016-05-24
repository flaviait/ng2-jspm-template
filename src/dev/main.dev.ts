import "zone.js";
import "reflect-metadata";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {usePostMiddleware} from "@ngrx/store";
import {provideRouter} from "@ngrx/router";
import {AppComponent} from "../app/app.component";
import {ROUTES} from "../app/routes";
import {TODO_PROVIDERS} from "../app/todos";
import {createStoreProvider} from "../app/store";
import {dev} from "./tools.dev.ts";
import {connectRouterToStore} from "@ngrx/router-store";

export {dev};

const PROVIDERS = [
  TODO_PROVIDERS,
  provideRouter(ROUTES),
  createStoreProvider(dev.currentState),
  usePostMiddleware(dev.stateLogging),
  usePostMiddleware(dev.stateTracking),
  connectRouterToStore()
];

bootstrap(AppComponent, PROVIDERS);
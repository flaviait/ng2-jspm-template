///<reference path="../../typings/browser.d.ts"/>
///<reference path="../generated-typings.d.ts"/>

import "zone.js";
import "reflect-metadata";
import assign from "lodash/assign";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideStore, usePostMiddleware} from "@ngrx/store";
import {App} from "../app/app";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {TODO_PROVIDERS} from "../app/todos";
import {reducers, initialStates} from "../app/store";
import {dev} from "./tools.dev.ts";

export {dev};

const PROVIDERS = [
  ROUTER_PROVIDERS,
  TODO_PROVIDERS,
  provideStore(reducers, assign({}, initialStates, dev.currentState)),
  usePostMiddleware(dev.stateLogging),
  usePostMiddleware(dev.stateTracking)
];

export const __reload = (m: {dev: typeof dev}) => {
  // Bootstrap a second time with recovered if the state dev module was reloaded
  if (dev.currentState !== m.dev.currentState) {
    dev.currentState = m.dev.currentState;
    bootstrap(App, [PROVIDERS, provideStore(reducers, assign({}, initialStates, dev.currentState))]);
  }
};

bootstrap(App, PROVIDERS);
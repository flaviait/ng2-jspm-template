import "zone.js";
import "reflect-metadata";

import assign from "lodash/assign";

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

import {Store} from "@ngrx/store";

import "rxjs/add/operator/take";

import {App} from "./app/app.component";
import {APP_ROUTES, appRoutingProviders} from "./app/app.routes";
import {createStoreProvider} from "./app/app.store";
import {InputModule} from "./app/inputTest/input.module";
import {TodosModule} from "./app/todos/todos.module";


let storeHolder: {
  store?: Store<any>
} = {};
let targetState: any = {};


const IMPORTS = [
  HttpModule, // TODO: Why do we need this? It's just that the injector complains if it is missing.
  APP_ROUTES,
  InputModule,
  TodosModule,
  createStoreProvider(targetState)
];

@NgModule({
  imports: IMPORTS,
  providers: [appRoutingProviders],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {
}

export let __reload = (m: {storeHolder: typeof storeHolder}) => {
  m.storeHolder.store.take(1).subscribe(toBeReloadedState => {
    // toBeReloadedState => Entries from store from <before> the reload.
    // targetState       => State to be used to initialize the store.
    // Note: It seems that the initialization happens BEFORE this subscription is triggered for the first time,
    // i.e. targetState need to be defined in advance, and the former state has to be assigned
    // to the same object to properly get adopted to all components.
    assign(targetState, toBeReloadedState);
  });
};

setTimeout(() =>
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then(ref => storeHolder.store = ref.injector.get(Store)));

export {storeHolder}
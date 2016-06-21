import "zone.js";
import "reflect-metadata";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@ngrx/router";
import {App} from "../app/app.component";
import {ROUTES} from "../app/routes";
import {TODO_PROVIDERS} from "../app/todos";
import {createStoreProvider} from "../app/store";
import {connectRouterToStore} from "@ngrx/router-store";
import {TRANSLATE_PROVIDERS} from "ng2-translate/ng2-translate";
import {HTTP_PROVIDERS} from "@angular/http";
import {Store} from "@ngrx/store";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import "rxjs/add/operator/take";

const PROVIDERS = [
  TRANSLATE_PROVIDERS,
  HTTP_PROVIDERS,
  TODO_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provideRouter(ROUTES),
  connectRouterToStore()
];

let storeHolder: {
  store?: Store<any>
} = {};
let oldState: any;


export  let __reload = (m: {storeHolder: typeof storeHolder}) =>
  m.storeHolder.store.take(1).subscribe(s => oldState = s);

setTimeout(() =>
  bootstrap(App, [PROVIDERS, createStoreProvider(oldState)])
    .then(ref => storeHolder.store = ref.injector.get(Store)));

export {storeHolder}
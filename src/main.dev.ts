import "reflect-metadata";
import "zone.js";
import "rxjs/add/operator/take";

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Store} from "@ngrx/store";
import {AppModule} from "./app/app.module";

let storeHolder: any = {};

// A callback which is called from the hot module replacement (HMR) when a file change is detected.
// noinspection JSUnusedGlobalSymbols
export let __reload = (m: {storeHolder: typeof storeHolder}) =>
  m.storeHolder.store.take(1).subscribe((backupState: any) =>
    AppModule.extendInitialState(backupState));

// Defer the bootstrapping, so the __reload callback can be run by HMR before to recover the previous state.
// The call of __reload is already registered when this initialization runs, so we can be sure that the
// bootstrapping happens after the state recovery.
setTimeout(() =>
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then(ref => storeHolder.store = ref.injector.get(Store)));

export {storeHolder}
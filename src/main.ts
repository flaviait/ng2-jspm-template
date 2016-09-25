// Note: system.js is included within the destination template file manually

import "reflect-metadata";
import "zone.js";

// console.warn((SystemJS as any).getConfig()); // Print for testing.

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";

import {AppModule} from "./app/app.module";

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
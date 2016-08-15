import "es6-shim";
import "zone.js";
import "zone.js/dist/jasmine-patch";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";
import "reflect-metadata";

(window as any).Error.stackTraceLimit = Infinity;
(window as any).jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

import {TestBed} from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
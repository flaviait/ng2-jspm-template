import "es6-shim";
import "zone.js";
import "zone.js/dist/jasmine-patch";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";
import "reflect-metadata";

(window as any).Error.stackTraceLimit = Infinity;
(window as any).jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

import {setBaseTestProviders} from "@angular/core/testing";
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from "@angular/platform-browser-dynamic/testing";

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
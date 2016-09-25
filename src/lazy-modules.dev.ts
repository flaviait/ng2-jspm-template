/**
 * This file refers to all modules that are loaded on demand, i.e. during runtime. Due to current limitations
 * in SystemJS and systemjs-hot-reloader, dynamically loaded modules are not listed as "is a dependency of". As a result,
 * changes to these modules are detected, but do not cause a re-init of the app itself.
 * To get this working, we need to import these modules statically in development mode. For production mode, particular
 * bundles will be created for the lazy modules.
 */
import "lazyTestModule";
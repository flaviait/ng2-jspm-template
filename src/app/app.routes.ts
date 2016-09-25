import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  {
    path:       "",
    pathMatch:  "full",
    redirectTo: "input-test"
  },
  {
    path:         "lazy-test",
    loadChildren: "lazyTestModule#LazyTestModule"
    // During runtime, this leads to: () => SystemJS.import("lazyTestModule").then(module => module.LazyTestModule)
    // Can also be used directly for more control or side-effects like logging.
  }
];

export const appRoutingProviders: any[] = [];


export const APP_ROUTES = RouterModule.forRoot(appRoutes);
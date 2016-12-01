import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "input-test"
  }
];

export const appRoutingProviders: any[] = [];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
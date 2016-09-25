import {NgModule} from "@angular/core";

import {SharedModule} from "../shared/shared.module";
import {TodosComponent} from "./todos.component";
import {TodoService} from "./todo.service";
import {TodoActionCreator} from "./todos.store";
import {TODO_ROUTES} from "./todos.routes";

@NgModule({
  imports: [
    SharedModule,
    TODO_ROUTES
  ],
  declarations: [TodosComponent],
  providers: [TodoService, TodoActionCreator]
})
export class TodosModule {
}
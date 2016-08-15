import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodosComponent} from "./todos.component";
import {TodoService} from "./todo.service";
import {TranslateModule} from "ng2-translate/ng2-translate";
import {TodoActionCreator} from "./todos.store";
import {TODO_ROUTES} from "./todos.routes";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    TODO_ROUTES
  ],
  exports: [TranslateModule],
  declarations: [TodosComponent],
  providers: [TodoService, TodoActionCreator]
})
export class TodosModule {
}
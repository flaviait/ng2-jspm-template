import {
  TestBed,
  inject
} from "@angular/core/testing";
import {TodoService} from "./todo.service";
import {StoreModule, Store} from "@ngrx/store";
import {
  todosReducer,
  TodoActionCreator,
  ACTION_TYPES
} from "./todos.store";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";
import {List} from "immutable";

describe("TodoService", () => {

  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService, TodoActionCreator],
      imports: [StoreModule.provideStore({todos: todosReducer}, {todos: List.of()})]
    });
  });

  beforeEach(inject([TodoService], (_todoService: TodoService) => {
    todoService = _todoService;
  }));

  describe("todos", () => {

    it("should be an Observable", () => {
      expect(todoService.todos).toBeDefined();
      expect(todoService.todos instanceof Observable).toBeTruthy();
    });

  });

  describe("add()", () => {

    it("should add a todo to the store", inject([Store], (store: Store<any>) => {
      spyOn(store, "dispatch");

      todoService.add({text: "Some Task"});

      expect(store.dispatch).toHaveBeenCalledWith({
        type: ACTION_TYPES.ADD_TODO,
        payload: {text: "Some Task"}
      });
    }));

  });

});
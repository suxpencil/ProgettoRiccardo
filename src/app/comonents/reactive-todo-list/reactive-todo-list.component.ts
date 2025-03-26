import { CommonModule } from "@angular/common";
import { Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import { bufferCount, filter, flatMap, map, mergeMap, reduce, Subscription } from "rxjs";
import { TodoService } from "../../services/todo-service.service";
import { Todo } from "../todo-list/todo-list.component";

@Component({
  selector: "app-reactive-todo-list",
  imports: [CommonModule],
  templateUrl: "./reactive-todo-list.component.html",
  styles: ``,
})
export default class ReactiveTodoListComponent implements OnInit {
  readonly todoService = inject(TodoService);

  private readonly _router = inject(Router);

  private _sub: Subscription[] = [];



  ngOnInit(): void {
   
    this.todoService.arrayNumbers$
    .pipe(
      map((listnumber) => {
        return listnumber
        .filter((num)=> num % 2 !== 0)
        .reduce((mappa, currentnumber, index)=> {
          const slotIndex = Math.floor(index / 5);
          mappa.set(slotIndex, [...(mappa.get(slotIndex) || []), currentnumber]);
          return mappa;
        }, new Map<number, number[]>());
      }),
  
  )
  .subscribe(response => console.log('Arrays di 5:', response));

    this.todoService.arrayNumbersFrom$
    .pipe(filter((num) => (num % 7 || num % 11) == 0))
    .subscribe(response => console.log('arrayNumbersFrom', response))
  }

  // todosCompleted = computed(() => this.todos().filter(todo => todo.completed).length);

  // remainingTodos = computed(() => this.todos().filter(todo => !todo.completed).length);

  todos = signal<Todo[]>([]);

  // ngOnInit() {
  //   this._sub.push(
  //     this.todoService.todos$.subscribe((list) => {
  //       console.log("list todos$: ", list);
  //       this.todos.set(list);
  //     }),
  //   );
  // }

  // ngOnDestroy(): void {
  //   this._sub.forEach((sub) => sub.unsubscribe());
  // }

  addTodo(input: HTMLInputElement) {
    if (input.value) {
      const newTodo: Todo = {
        id: Date.now(),
        title: input.value,
        completed: false,
      };
      this.todoService.todos.update((currentTodos) => [
        ...currentTodos,
        newTodo,
      ]);
      input.value = "";
    }
  }

  editTodo(todo: Todo): void {
    console.log(todo);
    this.todoService.setItem(todo);
    this._router.navigateByUrl("reactive-todo-edit");
  }

  deleteTodo(id: number) {
    this.todoService.todos.update((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id),
    );
  }

  toggleTodo(todoToToggle: Todo) {
    this.todoService.todos.update((todos) =>
      todos.map((todo) =>
        todo.id === todoToToggle.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    );
  }
}

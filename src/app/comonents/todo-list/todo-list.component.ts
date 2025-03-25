import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent {

  todosCompleted = computed(() => this.todos().filter(todo => todo.completed).length);

  remainingTodos = computed(() => this.todos().filter(todo => !todo.completed).length);

 todos = signal<Todo[]>([
    {id: 1, title: "Todo 1", completed: false},
    {id: 2, title: "Todo 2", completed: false},
  ]);


  addTodo (input: HTMLInputElement) {
    if(input.value){
      const newTodo : Todo = {
        id: Date.now(),
        title: input.value,
        completed: false
      }
      this.todos.update(currentTodos => [...currentTodos, newTodo]);
      input.value = "";
    }
  }

  deleteTodo (id: number) {
    this.todos.update(currentTodos => currentTodos.filter(todo => todo.id !== id));
  }

  toggleTodo (todoToToggle: Todo) {
    this.todos.update((todos)=>
    todos.map((todo)=>
    todo.id === todoToToggle.id
       ? {...todo, completed: !todo.completed}
       : todo
    ));
  }
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


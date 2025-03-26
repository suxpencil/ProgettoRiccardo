import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo-service.service';
import { Todo } from '../todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-todo-edit',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './reactive-todo-edit.component.html',
  styles: ``
})
export default class ReactiveTodoEditComponent implements OnInit {


  readonly _router = inject(Router);
  
    readonly todoService = inject(TodoService);
  
    item : Todo | undefined = this.todoService.getItem();
    des: string = this.item?.title ?? '';
  
    ngOnInit() { 
      console.log('item: ', this.item);
     }
  
    apply() : void{
      console.log('Apply', this.des);
      if(this.item){
        this.item.title = this.des;
        const todos = this.todoService.todos();
        todos.forEach((todo) => {
          if(todo.id === this.item?.id){
            todo.title = this.item?.title;
          }
        });
        this.todoService.todos$.next(todos);  
        // this.item.title= this.des;
        // this.todoService.setItem(
        //   {...this.item,
        //     title: this.des
  
        //   }
        // );
        this._router.navigateByUrl('reactive-todo-list');
  
      }
    }
}

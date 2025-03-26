import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service.service';
import { Todo } from '../todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  imports: [
    CommonModule,
    FormsModule
    
  ],
  templateUrl: './todo-edit.component.html',
  styles: ``
})
export default class TodoEditComponent implements OnInit {

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

      this.item.title= this.des;

      // this.todoService.setItem(
      //   {...this.item,
      //     title: this.des

      //   }
      // );
      this._router.navigateByUrl('todo-list');

    }
  }

}

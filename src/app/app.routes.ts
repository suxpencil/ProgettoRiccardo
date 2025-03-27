import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { FormComponent } from './comonents/form/form.component';

export const routes: Routes = [

    {   path: "", redirectTo: "form", pathMatch: "full" },
    {
        path: "form",
        component: FormComponent,
    },

    {
        path: "todo-list",
        loadComponent: () => import("./comonents/todo-list/todo-list.component"),
        
    },
    {
        path: "todo-edit",
        loadComponent: () => import("./comonents/todo-edit/todo-edit.component")
    },
    {
        path: "reactive-todo-list",
        loadComponent: () => import("./comonents/reactive-todo-list/reactive-todo-list.component"),
        //canActivate: [authGuard],
    },
    {
        path: "reactive-todo-edit",
        loadComponent: () => import("./comonents/reactive-todo-edit/reactive-todo-edit.component")
    }
];

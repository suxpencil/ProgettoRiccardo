import { Routes } from '@angular/router';

export const routes: Routes = [

    {   path: "", redirectTo: "/home", pathMatch: "full" },

    {
        path: "todo-list",
        loadComponent: () => import("./comonents/todo-list/todo-list.component")
    },
    {
        path: "todo-edit",
        loadComponent: () => import("./comonents/todo-edit/todo-edit.component")
    },
    {
        path: "reactive-todo-list",
        loadComponent: () => import("./comonents/reactive-todo-list/reactive-todo-list.component")
    },
    {
        path: "reactive-todo-edit",
        loadComponent: () => import("./comonents/reactive-todo-edit/reactive-todo-edit.component")
    }
];

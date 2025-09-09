import { Routes } from "@angular/router";
import { Categorias } from './categorias/categorias';

export const CategoriasRoutes:Routes=[
    {
    path:'',
    redirectTo:'categoria',
    pathMatch:'full'
    },
    {
        path:'categoria',
        loadComponent:()=>import('./categorias/categorias').then((m)=>m.Categorias)
    },
    {
        path:'**',
        redirectTo:'categoria',
        pathMatch:'full'
    }
]
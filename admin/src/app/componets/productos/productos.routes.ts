import { Routes } from "@angular/router";
import { Productos } from "./productos/productos";

export const ProductosRoutes:Routes=[
    {
    path:'',
    redirectTo:'producto',
    pathMatch:'full'
    },
    {
        path:'producto',
        loadComponent:()=>import('./productos/productos').then((m)=>m.Productos)
    },
    {
        path:'**',
        redirectTo:'producto',
        pathMatch:'full'
    }
]
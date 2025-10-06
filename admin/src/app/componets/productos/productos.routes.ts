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
        path:'producto',
        loadComponent:()=>import('./productos/productos').then((m)=>m.Productos)
    },
    {
                 path:'agregar',
                loadChildren:()=>
                    import ('../../menus/menus.routes')
                .then((m)=>m.agregarPRoutes)
            },
    {
        path:'**',
        redirectTo:'producto',
        pathMatch:'full'
    }
]
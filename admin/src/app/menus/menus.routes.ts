import { Route, Routes } from "@angular/router";

export const agregarPRoutes:Routes=[
    {
        path:'agregar1',
        loadComponent:()=> import ('./agregar-prod/agregar-prod').then((m)=>m.AgregarProd)
    }
]
import { Route, Routes } from "@angular/router";

export const agregarPRoutes:Routes=[
    {
        path:'agregar2',
        loadComponent:()=> import ('./agregar1/agregar1').then((m)=>m.Agregar1)
    }
]
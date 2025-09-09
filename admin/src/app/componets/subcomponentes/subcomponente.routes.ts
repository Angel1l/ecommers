import { Route, Routes } from "@angular/router";

export const subcomponetRoutes:Routes=[
    {
        path:'submenu1',
        loadComponent:()=> import ('./submnenu1/submnenu1').then((m)=>m.Submnenu1)
    },
    {
        path:'submenu2',
        loadComponent:()=> import ('./submnenu2/submnenu2').then((m)=>m.Submnenu2)
    }
]
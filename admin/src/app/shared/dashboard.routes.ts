import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard/dashboard";
import { Home } from "./home/home";

export const dashboardRoutes:Routes=[
    {
        path:'',
        component:Dashboard,
        children:[
            {
                path:'',
                redirectTo:'home',
                pathMatch:'full'
            },
            {
                path:'home',
                component:Home,
                title:'Home'
            },
            {
                path:'productos',
                loadChildren:()=>
                    import('../componets/productos/productos.routes')
                .then((m)=>m.ProductosRoutes)

            },
             {
                path:'categorias',
                loadChildren:()=>
                    import('../componets/categorias/categorias.routes')
                .then((m)=>m.CategoriasRoutes)

            },
            {
                 path:'submenu',
                loadChildren:()=>
                    import ('../componets/subcomponentes/subcomponente.routes')
                .then((m)=>m.subcomponetRoutes)
            },
            {
                 path:'agregar',
                loadChildren:()=>
                    import ('../componets/agregar/agregarProd.routes')
                .then((m)=>m.agregarPRoutes)
            },
            {
                path:'**',
                redirectTo:'home',
                pathMatch:'full'
            }
        ]
    }
]
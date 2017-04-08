import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './sistema/home/home.component';
import { LoginComponent } from './sistema/login/login.component';

const appRoutes: Routes = [
    {
        path: 'perfis',
        loadChildren: 'app/cadastros/perfis/perfis.module#PerfisModule'
    },
    {
        path: 'usuarios',
        loadChildren: 'app/cadastros/usuarios/usuarios.module#UsuariosModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
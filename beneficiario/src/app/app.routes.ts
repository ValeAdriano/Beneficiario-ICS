import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import path from 'path';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './layout/menu/menu.component';
import { AvisosComponent } from './pages/avisos/avisos.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {path: 'avisos', component: AvisosComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent}
    
];

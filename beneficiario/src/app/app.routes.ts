import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import path from 'path';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent}
    
];

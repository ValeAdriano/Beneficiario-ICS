import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import path from 'path';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './layout/menu/menu.component';
import { AvisosComponent } from './pages/avisos/avisos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { PagamentosComponent } from './pages/pagamentos/pagamentos.component';
import { ProtocolosComponent } from './pages/protocolos/protocolos.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { ContatoComponent } from './pages/contato/contato.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {path: 'avisos', component: AvisosComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'consultas', component: ConsultasComponent},
    {path: 'pagamentos', component: PagamentosComponent},
    {path: 'ajuda', component: AjudaComponent},
    {path: 'protocolos', component: ProtocolosComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'perfil', component: PerfilComponent}
    
];

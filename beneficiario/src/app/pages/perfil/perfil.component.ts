import { Component } from '@angular/core';
import { MenuComponent } from "../../layout/menu/menu.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-perfil',
    standalone: true,
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.scss',
    imports: [MenuComponent, RouterLink]
})
export class PerfilComponent {

}

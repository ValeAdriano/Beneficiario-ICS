import { Component } from '@angular/core';
import { MenuComponent } from "../../layout/menu/menu.component";

@Component({
    selector: 'app-contato',
    standalone: true,
    templateUrl: './contato.component.html',
    styleUrl: './contato.component.scss',
    imports: [MenuComponent]
})
export class ContatoComponent {

}

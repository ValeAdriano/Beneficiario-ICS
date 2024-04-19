import { Component } from '@angular/core';
import { MenuComponent } from "../../layout/menu/menu.component";

@Component({
    selector: 'app-avisos',
    standalone: true,
    templateUrl: './avisos.component.html',
    styleUrl: './avisos.component.scss',
    imports: [MenuComponent]
})
export class AvisosComponent {

}

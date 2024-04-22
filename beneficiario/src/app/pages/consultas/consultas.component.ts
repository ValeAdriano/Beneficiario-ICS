import { Component } from '@angular/core';
import { MenuComponent } from "../../layout/menu/menu.component";

@Component({
    selector: 'app-consultas',
    standalone: true,
    templateUrl: './consultas.component.html',
    styleUrl: './consultas.component.scss',
    imports: [MenuComponent]
})
export class ConsultasComponent {

}

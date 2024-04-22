import { Component } from '@angular/core';
import { MenuComponent } from "../../layout/menu/menu.component";

@Component({
    selector: 'app-protocolos',
    standalone: true,
    templateUrl: './protocolos.component.html',
    styleUrl: './protocolos.component.scss',
    imports: [MenuComponent]
})
export class ProtocolosComponent {

}

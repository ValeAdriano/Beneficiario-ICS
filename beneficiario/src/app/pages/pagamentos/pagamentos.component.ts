import { Component } from '@angular/core';
import { MenuComponent } from "../../layout/menu/menu.component";

@Component({
    selector: 'app-pagamentos',
    standalone: true,
    templateUrl: './pagamentos.component.html',
    styleUrl: './pagamentos.component.scss',
    imports: [MenuComponent]
})
export class PagamentosComponent {

}

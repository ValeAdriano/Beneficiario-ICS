import { Component } from '@angular/core';
import { MenuComponent } from "../../layout/menu/menu.component";

@Component({
    selector: 'app-ajuda',
    standalone: true,
    templateUrl: './ajuda.component.html',
    styleUrl: './ajuda.component.scss',
    imports: [MenuComponent]
})
export class AjudaComponent {

}

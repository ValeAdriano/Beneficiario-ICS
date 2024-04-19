import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from "../../layout/menu/menu.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLink, MenuComponent]
})
export class HomeComponent {

}

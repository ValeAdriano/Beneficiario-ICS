import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../layout/header/header.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [RouterLink, HeaderComponent]
})
export class LoginComponent {
  entradaUsuario: any;
  
  }
  
  
  class Dados {
    cpf: string | undefined;
    carteira: string | undefined;
    input: string;
  
    constructor(input: string) {
        this.input = input;
        const inputSemCaracteresNaoNumericos = input.replace(/\D/g, '');
        const tamanho = inputSemCaracteresNaoNumericos.length;
  
        if (tamanho === 9) {
            this.carteira = inputSemCaracteresNaoNumericos;
            this.cpf = undefined; // Garantir que cpf esteja undefined
            window.alert('entrou com o carteira')
        } else if (tamanho === 11) {
            this.cpf = inputSemCaracteresNaoNumericos.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            this.carteira = undefined; // Garantir que carteira esteja undefined
            window.alert('entrou com cpf')
        } else {
            // Mostrar uma mensagem de alerta
            window.alert('Dados de login incorretos, verifique e tente novamente');
            this.cpf = undefined;
            this.carteira = undefined;
        }
    }
  }
  
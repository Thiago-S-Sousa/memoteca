import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Os bilhões são feitos de centavos.',
      autoria: 'Felippi Crevellari',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Faça da sua vida mais "Responsivo',
      autoria: 'Luana Monteiro',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'No longínquo ano de 1991, iniciou-se o desenvolvimento do que viria a se tornar a plataforma Java como uma parte do programa Green, que agrupava projetos que tinham como objetivo estabelecer a nova geração de softwares inteligentes para dispositivos eletrônicos, como televisores, videocassetes, torradeiras e demais utensílios, para que esses pudessem se comunicar com outros do mesmo tipo e também com computadores...',
      autoria: 'Artigo Java Alura',
      modelo: 'modelo2',
    },
  ];
}

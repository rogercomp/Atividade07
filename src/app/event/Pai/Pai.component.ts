import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Pai',
  templateUrl: './Pai.component.html',
  styleUrls: ['./Pai.component.css']
})
export class PaiComponent implements OnInit {

 
  familia: Object[];

  constructor() {
    this.familia = [
      {
        nome: 'Vitor',
        sobrenome: 'Borges'
      },
      {
        nome: 'Carlos',
        sobrenome: 'Dantas'
      }
    ]
  }

  ngOnInit() {
    console.log(this.familia);
  }

  receberFeedback(respostaFilho) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
    this.familia.push(respostaFilho);
    console.log(this.familia);
  }
}

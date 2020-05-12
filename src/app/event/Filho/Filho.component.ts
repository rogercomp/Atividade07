import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Filho',
  templateUrl: './Filho.component.html',
  styleUrls: ['./Filho.component.css']
})
export class FilhoComponent implements OnInit {
 
  @Input() recebeFamilia;
  @Output() respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit() {
      console.log(this.recebeFamilia);
      console.log('Objeto familia recebido do component pai via Input: ', 
      this.recebeFamilia);
  }

  feedback() {
    console.log('Resposta para o component pai', 
    this.respostaFamilia.emit({"nome": "Raimudo", "sobrenome": "Nonato"}));
  }

}
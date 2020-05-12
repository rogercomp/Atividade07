import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-exemplo12',
  templateUrl: './exemplo12.component.html',
  styleUrls: ['./exemplo12.component.css']
})
export class Exemplo12Component implements OnInit {
  title = "Exemplo 12";
  observable: Observable<string>;
  nomes: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.observable = new Observable(subscriber => {
      setInterval(() => {
        subscriber.next(this.makeid(5));
      }, 10000);
    });
    let lista: Array<string> = [];
    this.observable.subscribe({
      next(x) { lista.push(x) },
      error(err) { alert('ocorreu um erro ' + err); }
    });
    this.nomes = lista;
  }

  enviar(valor: string) {
    this.nomes.push(valor);
  }

  makeid(length): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}

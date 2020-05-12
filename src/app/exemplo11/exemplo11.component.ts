import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-exemplo11',
  templateUrl: './exemplo11.component.html',
  styleUrls: ['./exemplo11.component.css']
})
export class Exemplo11Component implements OnInit {

  title = "Exemplo 11";
  constructor() { }

  ngOnInit() {
    const observable = new Observable(subscriber => {
      subscriber.next(100);
      subscriber.next(2);
      subscriber.next(300);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    console.log('Antes de executar subscribe');
    observable.subscribe({
      next(x) {console.log('recebeu o valor ' + x);},
      error(err) { console.error('Erro: ' + err);},
      complete() { console.log('terminou o subscribe');}
    });
    console.log('ultima linha');
  }
}
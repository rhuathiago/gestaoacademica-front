import {Component, OnInit} from '@angular/core';

@Component({
  template: `
  <div class="container text-center p-t-50">
      <h1 class="text-center">Acesso negado!</h1>
  </div>
  `,
})
export class NaoAutorizadoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

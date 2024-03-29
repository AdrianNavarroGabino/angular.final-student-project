import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: boolean = false;
  anyadir: boolean = false;
  notificarUpload = new EventEmitter<any>();

  constructor() { }

  abrirModal() {
    this.modal = true;
  }

  cerrarModal() {
    this.modal = false;
  }

  abrirAnyadir() {
    this.anyadir = true;
  }

  cerraAnyadir() {
    this.anyadir = false;
  }
}

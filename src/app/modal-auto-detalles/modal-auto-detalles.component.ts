import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-modal-auto-detalles',
  templateUrl: './modal-auto-detalles.component.html',
  styleUrls: ['./modal-auto-detalles.component.css']
})
export class ModalAutoDetallesComponent {
  accion: string;
  auto: any;
  
  constructor(public activeModal: NgbActiveModal) { }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}

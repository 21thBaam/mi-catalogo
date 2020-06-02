import { Component, OnInit } from '@angular/core';
import {AUTOMOVILES} from '../data';
import {Automovil} from '../models';
import {NgbModal, ModalDismissReasons } from  '@ng-bootstrap/ng-bootstrap';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  au;

  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  
  lista = ["marca","descripcion"]; 
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  open(content: any, auto: Automovil) {
    this.au = auto;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}

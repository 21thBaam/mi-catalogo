import { Component, OnInit } from '@angular/core';
import {Automovil} from '../models';
import {NgbModal, ModalDismissReasons } from  '@ng-bootstrap/ng-bootstrap';
import { KeyValue } from '@angular/common';
import { AutosService } from '../services/autos.service';
import { ModalAutoDetallesComponent } from '../modal-auto-detalles/modal-auto-detalles.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  aSelected;
  closeResult: string;
  page = 1;
  pageSize = 10;
  constructor(private modalService: NgbModal, private autoService: AutosService) {}

  ngOnInit() {
    this.autoService.getAutos().subscribe((response) => {
      this.autos = response.data;
    });
  }

  open(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAutoDetallesComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Detalles Automóvil';
  }
}

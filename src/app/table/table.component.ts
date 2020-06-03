import { Component, OnInit } from '@angular/core';
import {Automovil} from '../models';
import { AutosService } from '../services/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: any;
  autoVacio: Automovil = {} as Automovil;
  page: number;
  pageSize: number;
  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response) => {
      this.autos = response.data;
    });
  }

  openModalEdit(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAutos(auto).subscribe();
      }
    )
  }

  openModalDelete(auto: Automovil){
    const modalRef = this.modalService.open(ModalDeleteComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Eliminar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.deleteAutos(auto).subscribe();
      }
    )
  }

  openModalAdd(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.addAutos(auto).subscribe();
        this.autoVacio = {} as Automovil;
      }
    )
  }
}

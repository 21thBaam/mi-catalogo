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
  autos: Automovil[];
  autoVacio: Automovil = {} as Automovil;
  page: number;
  pageSize: number;
  displayBar: boolean;
  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit() {
    this.displayBar = true;
    this.page = +sessionStorage.getItem('currentPage');
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response) => {
      this.autos = response.data;
      this.displayBar = false;
    });
  }

  openModalEdit(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAutos(auto).subscribe(response => {
          sessionStorage.setItem('currentPage',this.page.toString());
          this.ngOnInit();
        });
      }
    )
  }

  openModalDelete(auto: Automovil){
    const modalRef = this.modalService.open(ModalDeleteComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Eliminar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.deleteAutos(auto).subscribe(response => {
          sessionStorage.setItem('currentPage',this.page.toString());
          this.ngOnInit();
        });
      }
    )
  }

  openModalAdd(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.addAutos(auto).subscribe(response => {
          sessionStorage.setItem('currentPage',this.page.toString());
          this.ngOnInit();
        });
        this.autoVacio = {} as Automovil;
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';


@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent {
  accion: string;
  auto: Automovil;
  minmax = [2010,2010];
  newModelos = [];

  constructor(public activeModal: NgbActiveModal) { }

  onSubmit(){
    if(this.minmax[0]<this.minmax[1]){
      this.auto.modelos = [];
      for(var i=this.minmax[0];i<=this.minmax[1];i++){
        console.log("Numero: ",i," Tipo: ",typeof i);
        this.auto.modelos.push(i);
      }
      this.activeModal.close(this.auto);
    }else{
      console.log("Minimo Mayor que Maximo");
    }
  }
}

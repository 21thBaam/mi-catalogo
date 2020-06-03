import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { Page404Component } from './page404/page404.component';
import { ModalAutoDetallesComponent } from './modal-auto-detalles/modal-auto-detalles.component';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    Page404Component,
    ModalAutoDetallesComponent,
    ModalAddUpdateComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddUpdateComponent, ModalAutoDetallesComponent,ModalDeleteComponent]
})
export class AppModule { }

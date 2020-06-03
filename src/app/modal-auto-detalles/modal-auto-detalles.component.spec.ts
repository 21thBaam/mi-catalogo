import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAutoDetallesComponent } from './modal-auto-detalles.component';

describe('ModalAutoDetallesComponent', () => {
  let component: ModalAutoDetallesComponent;
  let fixture: ComponentFixture<ModalAutoDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAutoDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAutoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

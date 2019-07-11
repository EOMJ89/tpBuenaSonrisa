import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasEspecialidadRecepcionistaLazyComponent } from './estadisticas-especialidad-recepcionista-lazy.component';

describe('EstadisticasEspecialidadRecepcionistaLazyComponent', () => {
  let component: EstadisticasEspecialidadRecepcionistaLazyComponent;
  let fixture: ComponentFixture<EstadisticasEspecialidadRecepcionistaLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasEspecialidadRecepcionistaLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasEspecialidadRecepcionistaLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

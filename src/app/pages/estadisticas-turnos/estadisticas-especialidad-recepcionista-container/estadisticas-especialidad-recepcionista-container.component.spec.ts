import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasEspecialidadRecepcionistaContainerComponent } from './estadisticas-especialidad-recepcionista-container.component';

describe('EstadisticasEspecialidadRecepcionistaContainerComponent', () => {
  let component: EstadisticasEspecialidadRecepcionistaContainerComponent;
  let fixture: ComponentFixture<EstadisticasEspecialidadRecepcionistaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasEspecialidadRecepcionistaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasEspecialidadRecepcionistaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

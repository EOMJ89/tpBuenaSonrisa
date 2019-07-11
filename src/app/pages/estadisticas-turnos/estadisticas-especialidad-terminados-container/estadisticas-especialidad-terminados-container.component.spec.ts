import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasEspecialidadTerminadosContainerComponent } from './estadisticas-especialidad-terminados-container.component';

describe('EstadisticasEspecialidadTerminadosContainerComponent', () => {
  let component: EstadisticasEspecialidadTerminadosContainerComponent;
  let fixture: ComponentFixture<EstadisticasEspecialidadTerminadosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasEspecialidadTerminadosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasEspecialidadTerminadosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

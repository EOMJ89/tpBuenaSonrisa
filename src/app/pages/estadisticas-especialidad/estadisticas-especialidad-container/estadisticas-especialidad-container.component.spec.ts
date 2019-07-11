import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasEspecialidadContainerComponent } from './estadisticas-especialidad-container.component';

describe('EstadisticasEspecialidadContainerComponent', () => {
  let component: EstadisticasEspecialidadContainerComponent;
  let fixture: ComponentFixture<EstadisticasEspecialidadContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasEspecialidadContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasEspecialidadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

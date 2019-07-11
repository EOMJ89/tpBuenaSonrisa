import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasEspecialidadLazyComponent } from './estadisticas-especialidad-lazy.component';

describe('EstadisticasEspecialidadLazyComponent', () => {
  let component: EstadisticasEspecialidadLazyComponent;
  let fixture: ComponentFixture<EstadisticasEspecialidadLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasEspecialidadLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasEspecialidadLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

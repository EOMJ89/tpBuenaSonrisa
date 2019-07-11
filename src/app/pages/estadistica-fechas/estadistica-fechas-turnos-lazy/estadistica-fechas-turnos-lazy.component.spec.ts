import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaFechasTurnosLazyComponent } from './estadistica-fechas-turnos-lazy.component';

describe('EstadisticaFechasTurnosLazyComponent', () => {
  let component: EstadisticaFechasTurnosLazyComponent;
  let fixture: ComponentFixture<EstadisticaFechasTurnosLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaFechasTurnosLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaFechasTurnosLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaFechasLazyComponent } from './estadistica-fechas-lazy.component';

describe('EstadisticaFechasLazyComponent', () => {
  let component: EstadisticaFechasLazyComponent;
  let fixture: ComponentFixture<EstadisticaFechasLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaFechasLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaFechasLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

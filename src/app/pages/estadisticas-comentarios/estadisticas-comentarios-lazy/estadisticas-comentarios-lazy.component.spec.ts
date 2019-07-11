import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasComentariosLazyComponent } from './estadisticas-comentarios-lazy.component';

describe('EstadisticasComentariosLazyComponent', () => {
  let component: EstadisticasComentariosLazyComponent;
  let fixture: ComponentFixture<EstadisticasComentariosLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasComentariosLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasComentariosLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasComentariosContainerComponent } from './estadisticas-comentarios-container.component';

describe('EstadisticasComentariosContainerComponent', () => {
  let component: EstadisticasComentariosContainerComponent;
  let fixture: ComponentFixture<EstadisticasComentariosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasComentariosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasComentariosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

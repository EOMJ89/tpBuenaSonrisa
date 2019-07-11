import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasUsadosContainerComponent } from './estadisticas-usados-container.component';

describe('EstadisticasUsadosContainerComponent', () => {
  let component: EstadisticasUsadosContainerComponent;
  let fixture: ComponentFixture<EstadisticasUsadosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasUsadosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasUsadosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

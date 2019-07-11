import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaFechasContainerComponent } from './estadistica-fechas-container.component';

describe('EstadisticaFechasContainerComponent', () => {
  let component: EstadisticaFechasContainerComponent;
  let fixture: ComponentFixture<EstadisticaFechasContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaFechasContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaFechasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

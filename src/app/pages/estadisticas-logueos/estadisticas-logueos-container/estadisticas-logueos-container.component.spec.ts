import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasLogueosContainerComponent } from './estadisticas-logueos-container.component';

describe('EstadisticasLogueosContainerComponent', () => {
  let component: EstadisticasLogueosContainerComponent;
  let fixture: ComponentFixture<EstadisticasLogueosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasLogueosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasLogueosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

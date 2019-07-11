import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasLogueosLazyComponent } from './estadisticas-logueos-lazy.component';

describe('EstadisticasLogueosLazyComponent', () => {
  let component: EstadisticasLogueosLazyComponent;
  let fixture: ComponentFixture<EstadisticasLogueosLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasLogueosLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasLogueosLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

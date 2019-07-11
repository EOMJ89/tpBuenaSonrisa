import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoMostrarLazyComponent } from './diagnostico-mostrar-lazy.component';

describe('DiagnosticoMostrarLazyComponent', () => {
  let component: DiagnosticoMostrarLazyComponent;
  let fixture: ComponentFixture<DiagnosticoMostrarLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticoMostrarLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoMostrarLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoLazyComponent } from './diagnostico-lazy.component';

describe('DiagnosticoLazyComponent', () => {
  let component: DiagnosticoLazyComponent;
  let fixture: ComponentFixture<DiagnosticoLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticoLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

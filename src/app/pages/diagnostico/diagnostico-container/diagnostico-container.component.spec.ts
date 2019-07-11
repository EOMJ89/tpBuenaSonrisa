import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoContainerComponent } from './diagnostico-container.component';

describe('DiagnosticoContainerComponent', () => {
  let component: DiagnosticoContainerComponent;
  let fixture: ComponentFixture<DiagnosticoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsultorioComponent } from './modal-consultorio.component';

describe('ModalConsultorioComponent', () => {
  let component: ModalConsultorioComponent;
  let fixture: ComponentFixture<ModalConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

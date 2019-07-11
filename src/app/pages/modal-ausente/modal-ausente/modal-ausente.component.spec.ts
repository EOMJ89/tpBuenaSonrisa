import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAusenteComponent } from './modal-ausente.component';

describe('ModalAusenteComponent', () => {
  let component: ModalAusenteComponent;
  let fixture: ComponentFixture<ModalAusenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAusenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAusenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

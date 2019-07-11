import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTurnoLazyComponent } from './alta-turno-lazy.component';

describe('AltaTurnoLazyComponent', () => {
  let component: AltaTurnoLazyComponent;
  let fixture: ComponentFixture<AltaTurnoLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTurnoLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTurnoLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

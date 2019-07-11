import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTurnosLazyComponent } from './listado-turnos-lazy.component';

describe('ListadoTurnosLazyComponent', () => {
  let component: ListadoTurnosLazyComponent;
  let fixture: ComponentFixture<ListadoTurnosLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoTurnosLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTurnosLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

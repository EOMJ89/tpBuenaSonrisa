import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTurnosContainerComponent } from './listado-turnos-container.component';

describe('ListadoTurnosContainerComponent', () => {
  let component: ListadoTurnosContainerComponent;
  let fixture: ComponentFixture<ListadoTurnosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoTurnosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTurnosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

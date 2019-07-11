import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEspecialistaContainerComponent } from './listado-especialista-container.component';

describe('ListadoEspecialistaContainerComponent', () => {
  let component: ListadoEspecialistaContainerComponent;
  let fixture: ComponentFixture<ListadoEspecialistaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEspecialistaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEspecialistaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

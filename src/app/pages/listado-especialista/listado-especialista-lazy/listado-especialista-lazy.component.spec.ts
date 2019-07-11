import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEspecialistaLazyComponent } from './listado-especialista-lazy.component';

describe('ListadoEspecialistaLazyComponent', () => {
  let component: ListadoEspecialistaLazyComponent;
  let fixture: ComponentFixture<ListadoEspecialistaLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEspecialistaLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEspecialistaLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

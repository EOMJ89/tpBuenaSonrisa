import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniaMostrarLazyComponent } from './resenia-mostrar-lazy.component';

describe('ReseniaMostrarLazyComponent', () => {
  let component: ReseniaMostrarLazyComponent;
  let fixture: ComponentFixture<ReseniaMostrarLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseniaMostrarLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseniaMostrarLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

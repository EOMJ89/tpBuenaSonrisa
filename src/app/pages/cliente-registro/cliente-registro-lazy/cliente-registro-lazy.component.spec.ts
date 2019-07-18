import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteRegistroLazyComponent } from './cliente-registro-lazy.component';

describe('ClienteRegistroLazyComponent', () => {
  let component: ClienteRegistroLazyComponent;
  let fixture: ComponentFixture<ClienteRegistroLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteRegistroLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteRegistroLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

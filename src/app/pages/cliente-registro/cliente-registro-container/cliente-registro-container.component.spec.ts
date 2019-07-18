import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteRegistroContainerComponent } from './cliente-registro-container.component';

describe('ClienteRegistroContainerComponent', () => {
  let component: ClienteRegistroContainerComponent;
  let fixture: ComponentFixture<ClienteRegistroContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteRegistroContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteRegistroContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

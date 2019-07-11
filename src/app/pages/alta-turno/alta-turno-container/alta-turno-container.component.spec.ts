import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTurnoContainerComponent } from './alta-turno-container.component';

describe('AltaTurnoContainerComponent', () => {
  let component: AltaTurnoContainerComponent;
  let fixture: ComponentFixture<AltaTurnoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTurnoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTurnoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

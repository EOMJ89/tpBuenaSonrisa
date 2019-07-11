import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaEsperasContainerComponent } from './sala-esperas-container.component';

describe('SalaEsperasContainerComponent', () => {
  let component: SalaEsperasContainerComponent;
  let fixture: ComponentFixture<SalaEsperasContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaEsperasContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaEsperasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

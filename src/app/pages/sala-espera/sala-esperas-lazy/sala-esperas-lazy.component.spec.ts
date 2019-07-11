import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaEsperasLazyComponent } from './sala-esperas-lazy.component';

describe('SalaEsperasLazyComponent', () => {
  let component: SalaEsperasLazyComponent;
  let fixture: ComponentFixture<SalaEsperasLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaEsperasLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaEsperasLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

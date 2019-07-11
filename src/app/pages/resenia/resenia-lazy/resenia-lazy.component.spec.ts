import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniaLazyComponent } from './resenia-lazy.component';

describe('ReseniaLazyComponent', () => {
  let component: ReseniaLazyComponent;
  let fixture: ComponentFixture<ReseniaLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseniaLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseniaLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

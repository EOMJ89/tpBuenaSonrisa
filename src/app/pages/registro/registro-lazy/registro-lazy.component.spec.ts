import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLazyComponent } from './registro-lazy.component';

describe('RegistroLazyComponent', () => {
  let component: RegistroLazyComponent;
  let fixture: ComponentFixture<RegistroLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

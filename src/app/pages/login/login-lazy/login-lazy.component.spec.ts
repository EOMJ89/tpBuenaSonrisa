import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLazyComponent } from './login-lazy.component';

describe('LoginLazyComponent', () => {
  let component: LoginLazyComponent;
  let fixture: ComponentFixture<LoginLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

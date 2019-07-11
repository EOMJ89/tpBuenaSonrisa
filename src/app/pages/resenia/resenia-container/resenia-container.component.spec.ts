import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniaContainerComponent } from './resenia-container.component';

describe('ReseniaContainerComponent', () => {
  let component: ReseniaContainerComponent;
  let fixture: ComponentFixture<ReseniaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseniaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseniaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

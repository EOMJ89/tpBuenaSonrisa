import { TestBed, async, inject } from '@angular/core/testing';

import { EspecialistaGuard } from './especialista.guard';

describe('EspecialistaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspecialistaGuard]
    });
  });

  it('should ...', inject([EspecialistaGuard], (guard: EspecialistaGuard) => {
    expect(guard).toBeTruthy();
  }));
});

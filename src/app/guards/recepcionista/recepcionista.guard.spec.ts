import { TestBed, async, inject } from '@angular/core/testing';

import { RecepcionistaGuard } from './recepcionista.guard';

describe('RecepcionistaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecepcionistaGuard]
    });
  });

  it('should ...', inject([RecepcionistaGuard], (guard: RecepcionistaGuard) => {
    expect(guard).toBeTruthy();
  }));
});

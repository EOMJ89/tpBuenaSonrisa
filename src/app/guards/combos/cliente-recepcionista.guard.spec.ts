import { TestBed, async, inject } from '@angular/core/testing';

import { ClienteRecepcionistaGuard } from './cliente-recepcionista.guard';

describe('ClienteRecepcionistaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteRecepcionistaGuard]
    });
  });

  it('should ...', inject([ClienteRecepcionistaGuard], (guard: ClienteRecepcionistaGuard) => {
    expect(guard).toBeTruthy();
  }));
});

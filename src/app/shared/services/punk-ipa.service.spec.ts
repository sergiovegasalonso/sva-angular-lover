import { TestBed } from '@angular/core/testing';

import { PunkIpaService } from './punk-ipa.service';

describe('PunkIpaService', () => {
  let service: PunkIpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunkIpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

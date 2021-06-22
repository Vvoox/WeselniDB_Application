import { TestBed } from '@angular/core/testing';

import { CreateAccountDriverService } from './create-account-driver.service';

describe('CreateAccountDriverService', () => {
  let service: CreateAccountDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAccountDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TestcomponentService } from './testcomponent.service';

describe('TestcomponentService', () => {
  let service: TestcomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestcomponentService],
    });
    service = TestBed.inject(TestcomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('No messages at initial', () => {
    let total = service.messages.length;
    expect(total).toBe(0);
  });
  it('Meassage Uploads after one user', () => {
    service.userlog('Dineshkumar');
    let total = service.messages.length;
    expect(total).toBe(1);
  });
  it('Clear all the data', () => {
    service.userlog('Dineshkumar');
    service.clear();
    let total = service.messages.length;
    expect(total).toBe(0);
  });
});

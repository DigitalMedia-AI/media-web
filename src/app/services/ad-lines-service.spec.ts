import { TestBed } from '@angular/core/testing';
import { AdLinesService } from './ad-lines-service';

describe('AdLinesService', () => {
  let service: AdLinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdLinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
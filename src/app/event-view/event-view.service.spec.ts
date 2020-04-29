import { TestBed } from '@angular/core/testing';

import { EventViewService } from './event-view.service';

describe('EventViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventViewService = TestBed.get(EventViewService);
    expect(service).toBeTruthy();
  });
});

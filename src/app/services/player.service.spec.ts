import { TestBed } from '@angular/core/testing';

import { PlayerService } from './Player.service';

describe('PlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerService = TestBed.get(PlayerService);
    expect(service).toBeTruthy();
  });
});

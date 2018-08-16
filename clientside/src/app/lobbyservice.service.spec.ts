import { TestBed, inject } from '@angular/core/testing';

import { LobbyserviceService } from './lobbyservice.service';

describe('LobbyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LobbyserviceService]
    });
  });

  it('should be created', inject([LobbyserviceService], (service: LobbyserviceService) => {
    expect(service).toBeTruthy();
  }));
});

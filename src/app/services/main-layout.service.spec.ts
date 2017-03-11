/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainLayoutService } from './main-layout.service';

describe('MainLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainLayoutService]
    });
  });

  it('should ...', inject([MainLayoutService], (service: MainLayoutService) => {
    expect(service).toBeTruthy();
  }));
});

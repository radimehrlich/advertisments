import { Injectable } from '@angular/core';

import { Advertisment } from './advertisment';

/*
 * Service AdvertismentsData
 * Responsible for reading and saving advertisments from JSON files and LocalStorage
 */
@Injectable({
  providedIn: 'root'
})
export class AdvertismentsDataService {

  constructor() { }

  getAdvertisments(): Advertisment[] {
    return;
  }

}

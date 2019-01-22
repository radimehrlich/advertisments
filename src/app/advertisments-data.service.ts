import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { IAdvertisment } from './iadvertisment';

/*
 * Service AdvertismentsData
 * Responsible for reading advertisments from JSON file and reading/saving to LocalStorage.
 */
@Injectable({
  providedIn: 'root'
})
export class AdvertismentsDataService {
  
  public advertisments$: Observable<IAdvertisment[] | null>;
  private adsObs: BehaviorSubject<IAdvertisment[] | null>;
  
  
  constructor(private http: HttpClient) {
    this.adsObs = new BehaviorSubject<IAdvertisment[] | null>(null);
    this.advertisments$ = this.adsObs.asObservable();
    this.advertisments$ = this.http.get('./advertisments.json');
  }

}

/* let ads: any;
    ads = JSON.parse(localStorage.getItem('advertisments'));
    if( ads === null){
      ads = this.http.get('./advertisments.json');
      localStorage.setItem('advertisments', JSON.stringify(ads));
    }
    return ads; */

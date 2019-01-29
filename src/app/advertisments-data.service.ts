import { Injectable } from '@angular/core';
import { Advertisment } from './advertisment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


/*
 * Service AdvertismentsData
 * Responsible for reading/saving ads to LocalStorage. If empty, ask AdvertismentsFileService
 */
@Injectable({
  providedIn: 'root'
})
export class AdvertismentsDataService {

  private ads: BehaviorSubject<Advertisment[]> = new BehaviorSubject<Advertisment[]>([]);
  
  constructor(private http: HttpClient) {
    let loadedAds: Advertisment[] = this.loadAdsLocal();
    if(loadedAds) {
      this.ads.next(loadedAds);
    } else {
      this.http.get<Advertisment[]>('assets/advertisments.json').subscribe(data => {
        this.ads.next(data);
        localStorage.setItem('advertisments', JSON.stringify(data));
      } );
    }
  }

  public getAds(): Observable<Advertisment[]> {
    return this.ads.asObservable();
  }

  private loadAdsLocal(): Advertisment[] {
    let fromLocal: string;
    fromLocal = localStorage.getItem('advertisments');
    if (fromLocal) {
      return <Advertisment[]>JSON.parse(fromLocal);
    } else {
      return null;
    }
  }

  public addAd(ad: Advertisment): void {
    let ads: Advertisment[] = this.ads.getValue()
    ads.unshift(ad);
    this.ads.next(ads);
    localStorage.setItem('advertisments', JSON.stringify(ads));
  }

    }

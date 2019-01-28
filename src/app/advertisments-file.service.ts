import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisment } from './advertisment';
import { Observable } from 'rxjs';


/*
 * Service AdvertismentsFile
 * Responsible for reading advertisments from JSON file.
 */
@Injectable({
  providedIn: 'root'
})
export class AdvertismentsFileService {

  constructor(private http: HttpClient) { }

  getAds(): Observable<Advertisment[]> {
    return this.http.get<Advertisment[]>('assets/advertisments.json');
  }

}

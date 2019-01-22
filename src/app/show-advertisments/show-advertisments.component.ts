import { Component, OnInit } from '@angular/core';
import { AdvertismentsDataService } from '../advertisments-data.service';
import { IAdvertisment } from '../iadvertisment';

/*
 * Component ShowAdvertisments
 * Showing active advertisments. Advertismetns are subscribed from AdvertismentsDataService.
 */
@Component({
  selector: 'app-show-advertisments',
  templateUrl: './show-advertisments.component.html',
  styleUrls: ['./show-advertisments.component.css']
})
export class ShowAdvertismentsComponent implements OnInit {

  private advertisments: IAdvertisment[];

  constructor(private advertismentsDataService: AdvertismentsDataService) { }

  ngOnInit() {
    this.advertismentsDataService.advertisments$.subscribe(ads => this.advertisments = ads);
  }

}

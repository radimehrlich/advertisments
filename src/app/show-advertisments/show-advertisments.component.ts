import { Component, OnInit } from '@angular/core';

import { AdvertismentsDataService } from '../advertisments-data.service';

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

  constructor(advertismentDataService: AdvertismentsDataService) { }

  ngOnInit() {
  }

}

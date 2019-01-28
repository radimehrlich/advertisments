import { Component, OnInit } from '@angular/core';
import { AdvertismentsDataService } from '../advertisments-data.service';
import { Advertisment } from '../advertisment';


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

  private advertisments: Advertisment[];

  constructor(private advertismentsDataService: AdvertismentsDataService) { }

  ngOnInit() {
    this.advertismentsDataService.getAds().subscribe((data: Advertisment[]) => this.advertisments = data);
  }

}

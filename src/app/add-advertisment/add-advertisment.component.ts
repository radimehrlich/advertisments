import { Component, OnInit } from '@angular/core';

import { AdvertismentsDataService } from '../advertisments-data.service';

/*
 * Component AddAdvertisment
 * Adding a new advertisment
 */
@Component({
  selector: 'app-add-advertisment',
  templateUrl: './add-advertisment.component.html',
  styleUrls: ['./add-advertisment.component.css']
})
export class AddAdvertismentComponent implements OnInit {

  constructor(advertismentDataService: AdvertismentsDataService) { }

  ngOnInit() {
  }

}

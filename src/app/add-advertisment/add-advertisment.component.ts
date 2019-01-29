import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdvertismentsDataService } from '../advertisments-data.service';
import { Advertisment } from '../advertisment';
import { Router } from '@angular/router';

/*
 * Component AddAdvertisment
 * Adding a new advertisment using form
 */
@Component({
  selector: 'app-add-advertisment',
  templateUrl: './add-advertisment.component.html',
  styleUrls: ['./add-advertisment.component.css']
})
export class AddAdvertismentComponent implements OnInit {
  
  advertismentForm = new FormGroup({
    caption: new FormControl('', Validators.compose([
        Validators.minLength(3), 
        Validators.maxLength(120), 
        Validators.required])),
    content: new FormControl('', Validators.compose([
      Validators.minLength(3), 
      Validators.maxLength(600), 
      Validators.required])),
    type: new FormControl('', Validators.required)
  });

  constructor(private advertismentsDataService: AdvertismentsDataService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    const newAd: Advertisment = Object.assign({}, this.advertismentForm.value);
    newAd.date = Date.now();
    this.advertismentsDataService.addAd(newAd);
    this.router.navigate(['/inzeraty']);
  }

}

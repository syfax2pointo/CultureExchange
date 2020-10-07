import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../models/country';
import countryData from '../data/countries.json';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  countryId: number;
  countryName: string;
  countryList: Country[] = countryData;
  public fragment: string;



  constructor(public router: Router) {
      
    }


  ngOnInit(): void {
  
  }
  
  onSubmit() {
    this.router.navigate(['/country'], { fragment: this.countryName}).then((err) => {
      if (err) {
        console.log("navigation is successful");
      } else {
        console.log("navigation failed")
      }
    });
    

  }
}



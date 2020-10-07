import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/country';
import countryData from '../data/countries.json';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css'],
})
export class CultureComponent implements OnInit {
  culture;
  countryName: string;
  countryList: Country[] = countryData;
  
  

  constructor(public route: ActivatedRoute) {
  
  }
    
    

  ngOnInit(): void {
    
  }

}

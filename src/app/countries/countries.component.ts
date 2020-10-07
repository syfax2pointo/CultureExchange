import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import countryData from '../data/countries.json';
import { Country } from '../models/country';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit, AfterViewInit {
  country = countryData;
  countryList: Country[] = countryData;
  scrollContainer: any;
  @ViewChild('scrollframe', {static: false}) scrollframe: ElementRef; 

  constructor(public route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
  
  }
  
  ngAfterViewInit(): void {
    this.route.fragment.subscribe(country => {
    const countryElement: any = document.getElementById(country);
      this.scrollContainer = countryElement.scrollIntoView(countryElement);
    });
  }
  
}

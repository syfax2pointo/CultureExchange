import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent implements OnInit {
  holidays: any[];
  holidayCopy: any[];
  dayArray: string[];
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getHolidays().subscribe((data: any) => {
    this.holidays = data.response.holidays;
    this.holidayCopy = data.response.holidays;
    this.dayArray = this.holidays.map((h) => h?.date?.iso);
    });
  }

  // Function to search by Country name
  myFunction(val): void {
    console.log('holidays', this.holidays);
    let results = this.holidays.filter((holiday) => val === holiday.country.name
    );
    if (results.length > 0) {
      this.holidays = results;
    } else {
      this.holidays = this.holidayCopy;
    }
  }

  // Function to list dates in ascending order
  getDays(val): any {
    let results = this.holidays.sort((d1, d2) =>  {
    let dateA = new Date(d1?.date?.iso);
    let dateB = new Date(d2?.date?.iso);
    return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
    });

    if (results.length > 0) {
      this.holidays = results.sort();
    }
  }
}

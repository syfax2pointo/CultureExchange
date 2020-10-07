import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Calanderific API KEY
  holidayApiKey = '49f2edd5bf043a727f73649144947c6fc5aa7ebb7c856909112ef7a91a0f00b3';
  holidayBaseUrl = 'https://calendarific.com/api/v2/holidays';

  constructor(private http: HttpClient) {}

  getHolidays() {
    const api = `${this.holidayBaseUrl}?&api_key=${this.holidayApiKey}&country=all&month=7&year=2020`;
    return this.http.get(api);
  }
}

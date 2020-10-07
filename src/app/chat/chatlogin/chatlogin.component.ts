import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../models/country';
import { SharedService } from '../../services/shared.service';
import countryData from '../../data/countries.json';

const CHAT_URL: string = '/chatmain';

@Component({
  selector: 'app-chatlogin',
  templateUrl: './chatlogin.component.html',
  styleUrls: ['./chatlogin.component.css'],
})
export class ChatloginComponent {
  countryList: Country[] = countryData;
  username: string;
  country: string;
  language: string;
  roomToken?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedData: SharedService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.roomToken = params['roomToken'];
    });
  }

  onSubmit() {
    this.sharedData.submitNewUser({
      name: this.username,
      room: this.roomToken,
      type: this.roomToken != undefined ? 'guide' : 'visitor',
      country: this.country,
      language: this.language,
    });

    this.router.navigate([CHAT_URL]);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CountriesComponent } from './countries/countries.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { CultureComponent } from './culture/culture.component';
import { CommunityComponent } from '../app/community/community.component';
import { ChatloginComponent } from './chat/chatlogin/chatlogin.component';
import { ChatmainComponent } from './chat/chatmain/chatmain.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    CountriesComponent,
    HolidaysComponent,
    CultureComponent,
    CommunityComponent,
    ChatloginComponent,
    ChatmainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

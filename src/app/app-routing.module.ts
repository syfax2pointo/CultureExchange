import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CultureComponent } from './culture/culture.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { CountriesComponent } from './countries/countries.component';
import { CommunityComponent } from './community/community.component';
import { ChatmainComponent } from './chat/chatmain/chatmain.component';
import { ChatloginComponent } from './chat/chatlogin/chatlogin.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'country', component: CountriesComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'chatlogin', component: ChatloginComponent },
  { path: 'chatmain', component: ChatmainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

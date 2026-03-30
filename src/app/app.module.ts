import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { BannerImageComponent } from './home/banner-image/banner-image.component';
import { SearchEngineComponent } from './home/search-engine/search-engine.component';
import { AboutInnplayComponent } from './home/about-innplay/about-innplay.component';
import { WhyChooseusComponent } from './home/why-chooseus/why-chooseus.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PaymentsComponent } from './home/payments/payments.component';
import { FlightComponent } from './flight/flight.component';
import { SearchResultComponent } from './flight/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerImageComponent,
    SearchEngineComponent,
    AboutInnplayComponent,
    WhyChooseusComponent,
    ContactUsComponent,
    PaymentsComponent,
    FlightComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

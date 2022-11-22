import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from '/Users/Felip/Documents/DIFER/src/app/Components/footer/footer.component';
import { HeaderComponent } from '/Users/Felip/Documents/DIFER/src/app/Components/header/header.component';
import { HomePageComponent } from '/Users/Felip/Documents/DIFER/src/app/Components/home-page/home-page.component';
import { LandingPageComponent } from '/Users/Felip/Documents/DIFER/src/app/components/landing-page/landing-page.component'

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

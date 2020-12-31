import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './nav/search/search.component';
import { AboutComponent } from './nav/about/about.component';
import { SymptomsCheckerComponent } from './symptoms-checker/symptoms-checker.component';
import { DiseasesListComponent } from './symptoms-checker/diseases-list/diseases-list.component';
import { DiseaseDetailComponent } from './symptoms-checker/diseases-list/disease-detail/disease-detail.component';
import { CureMainComponent } from './cure-main/cure-main.component';
import { BodyMapComponent } from './symptoms-checker/body-map/body-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    SearchComponent,
    AboutComponent,
    SymptomsCheckerComponent,
    DiseasesListComponent,
    DiseaseDetailComponent,
    CureMainComponent,
    BodyMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

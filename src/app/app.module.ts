import { TranslationService } from './translation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';

export const appRouteList: Routes = [
  { path: 'home', component: PersonListComponent },
  { path: 'details', component: PersonComponent },

  { path: 'fr/home', component: PersonListComponent },
  { path: 'fr/details', component: PersonComponent },

  { path: 'nl/home', component: PersonListComponent },
  { path: 'nl/details', component: PersonComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
      },
    }),
    RouterModule.forRoot(appRouteList)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

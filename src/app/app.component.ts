import { HeaderService } from './header.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-translate-app';
  pageName: string;

  constructor(
    public translate: TranslateService,
    private router: Router,
    private _header: HeaderService
  ) {
    translate.addLangs(['fr', 'nl']);

    this.router.events.subscribe((event: RouterEvent) => {
      const pathname = window.location.pathname;
      if (event instanceof NavigationEnd) {
        const lastIndex = pathname.lastIndexOf('/') + 1;
        this.pageName = pathname.substring(lastIndex);
        console.log(lastIndex, this.pageName);
        if (pathname.match('/nl')) {
          translate.setDefaultLang('nl');
        } else {
          // translate.setDefaultLang('fr');
        }
      }
    });
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}

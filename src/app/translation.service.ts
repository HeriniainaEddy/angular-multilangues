import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TranslationService implements TranslateLoader {
    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<any> {
        return this.http.get(`http://localhost:4200?language=${lang}`)
            .map((response: JSON) => {
                return response;
            });
    }
}

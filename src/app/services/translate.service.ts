import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TranslationResults } from '../models/translationResults';
import { environment } from '../../environments/environment';

const API_URL: string = environment.translateAPI;
const API_KEY: string = environment.translateAPIkey;

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor(private httpClient: HttpClient) {}

  public translateText(
    sourceLang: string,
    targetLang: string,
    content: string
  ): any {
    let httpParams = new HttpParams()
      .set('key', API_KEY)
      .set('format', 'text')
      .set('source', sourceLang)
      .set('target', targetLang)
      .set('q', content);

    return this.httpClient
      .get<TranslationResults>(API_URL, { params: httpParams })
      .pipe(catchError(this.handleError));
  }

  // If the service throws an error
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Translation Service Error: ';

    // Client-side errors
    if (error.error instanceof ErrorEvent) {
      errorMessage = `${errorMessage} ${error.error.message}`;
    }
    // Server-side errors
    else {
      errorMessage = `${errorMessage}\nError Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RequestInterceptorsService implements HttpInterceptor {
  /**
   *  Used to intercept all the request going out of the application and add appid and headers
   * @param req HTTP request going out from application
   * @param next to pass on the req to actual server
   * @returns Observable<HttpEvent<any>>
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = req.clone({
      params: new HttpParams().set('appid', environment.app_id),
    });
    return next.handle(request);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler
  ): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status === 401) {
          return throwError(error.statusText);
        }
        if (error instanceof HttpErrorResponse) {
          const applicationError = error.headers.get('Application-Error');
          if (applicationError) {
            return throwError(applicationError);
          }

          const ServerError = error.error;
          let modelStateErrors = '';
          if (ServerError.error && typeof ServerError.error === 'object') {
            for (const Key in ServerError.error) {
              if (ServerError.error[Key]) {
                modelStateErrors = ServerError.error[Key] + '\n';
              }
            }
          }
          return throwError(modelStateErrors || ServerError || 'Server Error');
        }
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};

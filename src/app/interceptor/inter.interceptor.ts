import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

//

export const interInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap((risposta) => console.log('log dentro interceptor', risposta)),
  );
};

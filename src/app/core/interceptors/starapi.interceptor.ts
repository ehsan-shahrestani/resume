import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const starapiInterceptor: HttpInterceptorFn = (req, next) => {
  const starapiSecret = environment.strapiSecret;
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${starapiSecret}`,
    },
  });

  return next(authReq);
};

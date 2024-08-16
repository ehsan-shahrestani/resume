import { HttpInterceptorFn } from '@angular/common/http';

export const starapiInterceptor: HttpInterceptorFn = (req, next) => {
  const starapiSecret =
    'f030e078eab62ef0b5fec20ca8742ee4c8253ab810a809cbd41490cc8ec9e7b473dd3c51ddde6087d66b655903fdfe68e37ad0ad22a00603827e35db8b8c771dfc3735d724a3d442d482e7aa0fb8bd767fa8af367b3369493b6d6361491484a9436636b234eda30f5fcb75332c61106ac9265a45d372431b0ccac95e2a4668c6';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${starapiSecret}`,
    },
  });

  return next(authReq);
};
import { HttpInterceptorFn } from '@angular/common/http';

export const starapiInterceptor: HttpInterceptorFn = (req, next) => {
  // const starapiSecret =
  //   'f030e078eab62ef0b5fec20ca8742ee4c8253ab810a809cbd41490cc8ec9e7b473dd3c51ddde6087d66b655903fdfe68e37ad0ad22a00603827e35db8b8c771dfc3735d724a3d442d482e7aa0fb8bd767fa8af367b3369493b6d6361491484a9436636b234eda30f5fcb75332c61106ac9265a45d372431b0ccac95e2a4668c6';
  const starapiSecret =
    '6dc151c16cc4616bc698af01c31a802f8b373957e94a4b5cf0e9b3e63cfdc9dbf772c5a03681cee7d6ad6bea59c643c1da086f50ff87420879e5e70bb63a4ba9c8639c86a0e7e18925a18ee97f6c58eb6fa7a0bd8e4f86e41616b6bf50f38b96a847896651484b3afae621fa196eae39e7acad0047943b8ed3989f3f23467018';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${starapiSecret}`,
    },
  });

  return next(authReq);
};

of()  // 에러
  .pipe(single())
  .subscribe(console('[]'));

of(1) // OK
  .pipe(single())
  .subscribe(console('[1]'));

of(1, 2)  // 에러
  .pipe(single())
  .subscribe(console('[1, 2]'));

const query = concat(of(1, 2, 3, 4), throwError(() => -999));
const alternative = of('I', 'II', 'III', 'IV', 'V');

query
  .pipe(
    // 에러가 발생하면 observable을 전환한다.
    catchError(() => alternative)
  )
  .subscribe(console('catchError'));

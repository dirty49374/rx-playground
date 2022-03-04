const slowQuery$ = of(500, 1000, 2000, 2500)
  .pipe(
    map(v => timer(v)),
    mergeAll(),
    map(v => `slow query #${v}`)
  );

const fastQuery$ = interval(100)
  .pipe(
    map(v => `fast query #${v}`)
  );

slowQuery$
  .pipe(
    // timeout({ each, with })과 동일하다
    // slowQuery가 timeout이 걸리면, 뒤는 fastQuery로 전환한다.
    timeoutWith(800, fastQuery$),
    take(10)
  )
  .subscribe(console('timeoutWith'));

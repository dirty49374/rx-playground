const range = count =>
  interval(500)
    .pipe(
      take(count),
      map(v => `${v+1}/${count}`)
    );

// concatMapTo는 map의 constant 버전이다.
of(1, 2, 3)
  .pipe(
    concatMapTo(range(3)),
    /* 아래 코드는 동일하다
    mapTo(range(3)),
    concatAll(),
    */
  )
  .subscribe(console('concatMap'));

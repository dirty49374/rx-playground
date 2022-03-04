const range = count =>
  interval(500)
    .pipe(
      take(count),
      map(v => `${v+1}/${count}`)
    );

// mergeMap(cb)는 merge(map(cb))로 이해하면 된다
// 1. 먼저 map을 하며 high order로 만든뒤,
// 2. 모든 observable을 동시에 합친다
of(1, 2, 3)
  .pipe(
    mergeMap(count => range(count)),
    /* 아래 코드는 동일하다
    map(count => range(count)),
    mergeAll()
    */
  )
  .subscribe(console('mergeMap'));

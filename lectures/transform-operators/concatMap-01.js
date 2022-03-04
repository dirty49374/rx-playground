const range = count =>
  interval(500)
    .pipe(
      take(count),
      map(v => `${v+1}/${count}`)
    );

// concatMap(cb)는 concat(map(cb))로 이해하면 된다
// 1. 먼저 map을 하며 high order로 만든뒤,
// 2. 앞의 observable이 끝나면 넘어가는 방식으로 순서대로 합친다
of(1, 2, 3)
  .pipe(
    concatMap(count => range(count)),
    /* 아래 코드는 동일하다
    map(count => range(count)),
    concatAll()
    */
  )
  .subscribe(console('concatMap'));

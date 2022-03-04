const range = count =>
  interval(500)
    .pipe(
      take(count),
      map(v => `${v + 1}/${count}`)
    );

// exhaustMap(cb)는 exhaust(map(cb))로 이해하면 된다. (exhaustAll 참조)
// 1. 먼저 map을 하며 high order로 만든뒤,
// 2. 앞의 observable이 끝나야 넘어가지만, 끝난뒤에 발생한 observable로 건너뛴다.
interval(500)
  .pipe(
    map(v => v + 1),
    take(3),
  )
  .pipe(
    exhaustMap(count => range(count)),
    /* 아래 코드는 동일하다
    map(count => range(count)),
    exhaustAll()
    */
  )
  // 1/2, 2/2 를 건너뛴다
  .subscribe(console('exhaustMap'));
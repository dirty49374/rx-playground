const range = count =>
  interval(200)
    .pipe(
      take(count),
      map(v => `${v+1}/${count}`)
    );

// switchMap()은 입력값을 observable로 map하는 것은 동일하나, 최신 observable만을 합친다.
// 1. 먼저 map을 하며 high order로 만든뒤,
// 2. 새로나온 observable로 switch한다.
interval(500).pipe(take(5))
  .pipe(
    switchMap(count => {
      console.log('switching ---------');
      return range(count + 1);
    }),
  )
  .subscribe(console('switchMap'));

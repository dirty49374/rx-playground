timer(0, 300).pipe(take(10))
  .pipe(
    // optional인자를 설정하면, window에 포함하지 않는 기간을 지정할 수 있다.
    // 아래는 매 2초중 1초만 window에 포함된다.
    windowTime(1000, 2000),
    switchMap(
      o => o.pipe(
        scan((acc, v) => [...acc, v], []),
      ),
    ),
  )
  // 결과는 high order observable들이다.
  .subscribe(console('observer'));

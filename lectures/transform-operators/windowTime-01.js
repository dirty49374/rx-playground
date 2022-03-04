timer(0, 300).pipe(take(10))
  .pipe(
    // window와 유사하나 window의 경계가 고정된 시간으로 결정된다
    // (참조 bufferTime)
    windowTime(1000),
    switchMap(
      o => o.pipe(
        scan((acc, v) => [...acc, v], []),
      ),
    ),
  )
  // 결과는 high order observable들이다.
  .subscribe(console('observer'));

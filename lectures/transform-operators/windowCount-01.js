// windowCount<T>(
//   windowSize: number,
//   startWindowEvery: number = 0
// ): OperatorFunction<T, Observable<T>>

timer(0, 300).pipe(take(10))
  .pipe(
    // window와 유사하나 window의 경계가 개수로 정해진다. (참조, bufferCount)
    windowCount(3),
    switchMap(
      o => o.pipe(
        scan((acc, v) => [...acc, v], []),
      ),
    ),
  )
  // 결과는 high order observable들이다.
  .subscribe(console('observer'));

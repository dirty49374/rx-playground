timer(0, 300).pipe(take(10))
  .pipe(
    // windowWhen()은 windowToggle()과 유사하나 closing selector로 닫히는 것만 제어한다.
    // 즉, window는 닫히자 마자 다음 window가 바로 열린다.
    // 아래 예제는, 매 1초마다 열리고 닫히는 window이다. (참조, bufferWhen)
    windowWhen(
      v => timer(1000)  // closing selector
    ),
    switchMap(
      o => o.pipe(
        scan((acc, v) => [...acc, v], []),
      ),
    ),
  )
  // 결과는 high order observable들이다.
  .subscribe(console('observer'));

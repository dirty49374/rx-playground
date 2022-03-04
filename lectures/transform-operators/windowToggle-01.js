timer(0, 300).pipe(take(10))
  .pipe(
    // windowToggle()은 observable을 사용하여 window의 시작과 끝을 지정한다.
    // 아래 예제는, 매 2초마다 열리고, 1초뒤에 닫히는 window이다. 이전 windowTime 예제와 동일하다.
    // (참조 bufferToggle)
    windowToggle(
      timer(0, 2000),   // openings
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

timer(0, 100)
  .pipe(
    take(20),
    // timer(1000)이 1초뒤 이벤트를 발생시키기 이전 이벤트만 통과된다.
    takeUntil(timer(1000))
  )
  .subscribe(console('takeUntil timer(1s)'));

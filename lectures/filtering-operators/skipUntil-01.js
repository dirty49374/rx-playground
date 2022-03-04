timer(0, 100)
  .pipe(
    take(20),
    // timer(1000)이 1초뒤 이벤트를 발생시키기 전까지 이벤트는 모두 skip된다. 
    skipUntil(timer(1000))
  )
  .subscribe(console('skipUntil timer(1s)'));

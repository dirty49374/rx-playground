const subscription = timer(500, 100)
  .pipe(
    filter(v => v < 5 || 25 < v),
    // tap은 observable을 변경하지는 않지만, 중간에 꺼내 볼 수 있다.
    tap(v => console.log('tap =', v)),
    // throttleTime은 이벤트를 통과시킨후, 일정기간동안 이벤트를 버리기를 반복한다.
    throttleTime(1000)
  )
  .subscribe(console('throttleTime 1s'));

setTimeout(() => subscription.unsubscribe(), 5000);

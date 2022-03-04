const subscription = timer(500, 100)
  .pipe(
    filter(v => v < 5 || 25 < v),
    // tap은 observable을 변경하지는 않지만, 중간에 꺼내 볼 수 있다.
    tap(v => console.log('tap =', v)),
    // throttle은 throttleTime과 달리 시간을 observable로 조절할 수 있다.
    // 최초 이벤트가 들어오면 callback으로 observable을 요청하고,
    // observable이 이벤트를 발생한 시점까지 이벤트를 막는다.
    throttle(ev => timer(1000))
  )
  .subscribe(console('throttle timer(1s)'));

setTimeout(() => subscription.unsubscribe(), 5000);

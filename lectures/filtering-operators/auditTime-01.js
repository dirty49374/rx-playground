const subscription = timer(500, 100)
  .pipe(
    filter(v => v < 5 || 25 < v),
    // tap은 observable을 변경하지는 않지만, 중간에 꺼내 볼 수 있다.
    tap(v => console.log('tap =', v)),
    // auditTime은 이벤트를 일정기간동안 모으고, 마지막 이벤트만을 전달하기를 반복한다.
    auditTime(1000)
  )
  .subscribe(console('auditTime 1s'));

setTimeout(() => subscription.unsubscribe(), 5000);

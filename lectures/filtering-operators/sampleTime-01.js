const subscription = timer(500, 100)
  .pipe(
    filter(v => v < 5 || 25 < v),
    // tap은 observable을 변경하지는 않지만, 중간에 꺼내 볼 수 있다.
    tap(v => console.log('tap =', v)),
    // sampleTime은 주기적으로 마지막 이벤트를 샘플링해서 전달한다.
    // 기간동안 이벤트가 없으면 생략되나, 이벤트가 있건 없건 샘플링의 주기가 딱 떨어진다.
    sampleTime(1000)
  )
  .subscribe(console('sampleTime 1s'));

setTimeout(() => subscription.unsubscribe(), 5000);

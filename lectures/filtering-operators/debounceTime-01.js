const subscription = timer(500, 100)
  .pipe(
    filter(v => v < 5 || 25 < v),
    // tap은 observable을 변경하지는 않지만, 중간에 꺼내 볼 수 있다.
    tap(v => console.log('tap =', v)),
    // debounceTime은 이벤트가 들어온 후 일정기간 더이상 들어오지 않으면 전달하고, 아니면 버린다.
    // text 입력중 자동완성을 생각하면 쉽다
    debounceTime(1000)
  )
  .subscribe(console('debounceTime 1s'));

setTimeout(() => subscription.unsubscribe(), 5000);

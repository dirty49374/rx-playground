const subscription = timer(500, 100)
  .pipe(
    filter(v => v < 5 || 25 < v),
    // tap은 observable을 변경하지는 않지만, 중간에 꺼내 볼 수 있다.
    tap(v => console.log('tap =', v)),
    // debounce는 debounceTime의 시간을 observable로 조절한다.
    // 입력이 들어오면 callback으로 observable을 요청하고,
    // observable이 이벤트를 발생하기전까지 다른 이벤트가 없으면 기존 이벤트가 전달된다.
    debounce(ev => timer(1000))
  )
  .subscribe(console('debounce timer(1s)'));

setTimeout(() => subscription.unsubscribe(), 5000);

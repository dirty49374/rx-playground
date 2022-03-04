const after = (ms, val) => new Observable(subscribe => {
  setTimeout(() => {
    subscribe.next(val);
    subscribe.complete();
  }, ms);
});

// 최초에 도착하는 observable 만을 선택한다
race(after(3000, "1st"), after(2000, "2nd"), of("3rd"))
  .subscribe(console('race'));
